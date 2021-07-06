import worker from "../../stores/worker";
import localAgencies from "../app/localAgencies";
import touchAllAssets from "./touchAllAssets";


async function findServiceWorker(registrations){
	if(registrations.length > 0){
		let reg = null;
		for(let i = 0; i < registrations.length; i++){
			if(registrations[i].active && window.location.origin+"/worker.js" === registrations[i].active.scriptURL){
				reg = registrations[i];
				break;
			}
		}
		if(reg === null)
			console.info("Service worker '/worker.js' not found!");
		else{
			console.info("Service worker '/worker.js' found!");
			worker.set(reg);
		}
	}else{
		console.info("No service worker registered on this website.");
        console.log("New worker registration request created for /worker.js");
        // let names = Object.keys(localAgencies);
        // if(!names.includes(location.hostname)){
			let wk = await navigator.serviceWorker.register("/worker.js");
			worker.set(wk);
			await touchAllAssets();
		// }else{
		// 	console.info("Service worker has not been registered because you're accessing the application from one of the protected agencies:",localAgencies),"\nYou must add the service worker manually.";
		// 	worker.set(await navigator.serviceWorker.register("/worker.js"));
		// }
	}
}

export {
    findServiceWorker
};