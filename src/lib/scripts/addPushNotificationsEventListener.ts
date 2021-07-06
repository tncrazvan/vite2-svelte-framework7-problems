import Permission from './Permission';
export default async function addPushNotificationsEventListener():Promise<void>{
    if(!await Permission.requestPushNotificationPermission()){
		  console.warn("Push Notifications permission not granted.");
      return;
    }
}