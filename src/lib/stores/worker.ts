import {Writable, writable} from 'svelte/store';
declare global {
    interface Window { cordova: any; }
}

const worker:Writable<any> = writable(null);


if(window.navigator && window.navigator.serviceWorker){
    window.navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            worker.set(registration);
            break;
        }
    })
}


export default worker;