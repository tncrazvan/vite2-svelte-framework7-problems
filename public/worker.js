importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');


const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

registerRoute(
  ({url}) => (
    !url.pathname.match(/.+\/CompFacileLogin\//)
    && !url.pathname.match(/.+\/source\.unsplash\.com\//)
    && !url.pathname.endsWith(".json")
    && !url.pathname.endsWith("version")
    && !url.pathname.endsWith("worker.js")
    && !url.pathname.endsWith("manifest.js")
  ),
  new CacheFirst()
);

function notify(title,body,vibrate=[200, 100, 200],icon='assets/images/logo.png',tag=''){
  return this.registration.showNotification(title, {
      body: body,
      icon: icon,
      vibrate: vibrate,
      tag: tag
  });
}

self.addEventListener('message', async function(event){
  let data = JSON.parse(event.data);
  switch(data.action){
      case "set-vars":
          for(let key in a) vars[key] = event.data.body[key];
      break;
      case "send-notification":
        notify(
          data.body.title,
          data.body.body,
          data.body.vibrate,
          data.body.icon,
          data.body.tag
        );
      break;
  }
});

self.addEventListener('install', function (e) {
  console.log("Website saved locally.");
});