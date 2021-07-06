import message from "src/lib/stores/message";

export default function update(localVersion,remoteVersion):void{
    message.set('')
    localStorage.clear();
    console.log(`Updating from version ${localVersion} to version ${remoteVersion}`);
    if(window.caches)
        caches.keys().then((keyList) => {
            console.log({keyList});
            Promise.all(keyList.map((key) => caches.delete(key)))
        });
    if(window.navigator && window.navigator.serviceWorker)
        window.navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration.unregister()
            }
        })
    localVersion.set(remoteVersion);

    location.reload(true);
}
