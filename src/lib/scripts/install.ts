import message from '../stores/message';
let request;
window.addEventListener('beforeinstallprompt', (r:any) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	r.preventDefault();
	request = r;
});
export default function install():void{
	if(!request){
		if(!location.protocol.startsWith("https")){
			message.set("Non puoi installare la pwa da un dominio non sicuro.")
		}else{
			message.set("Non puoi installare la pwa senza un service worker attivo.")
		}
		return;
	}
	request.prompt();
}