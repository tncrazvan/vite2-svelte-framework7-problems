import { findServiceWorker } from "../pwa/findServiceWorker";
import localVersion from '../../stores/localVersion';
import message from "../../stores/message";

async function initWebApp():Promise<void>{
    let $localVersion:string;
    localVersion.subscribe($=>$localVersion=$)();
    try{
        let remoteVersion:any = await fetch(`/main.version?time=${Date.now()}`);
        remoteVersion = await remoteVersion.text();
        
        console.log("versions:",{
            "local":$localVersion,
            "remote":remoteVersion
        });
        
        if($localVersion !== remoteVersion){
            message.set(`Nuova versione disponibile ${remoteVersion}`)
        }
        
        if(window.navigator && window.navigator.serviceWorker) 
            navigator.serviceWorker.getRegistrations().then(findServiceWorker);
            
    }catch(e){
        console.error(e);
    }
}

export { initWebApp }