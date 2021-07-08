import Framework7 from 'framework7/lite';
import Framework7Svelte from "framework7-svelte";
import Root from './Root.svelte'


import 'framework7/framework7-bundle.css';

Framework7.use(Framework7Svelte);


const app = new Root({
  target: document.getElementById("app")
})

export default app
