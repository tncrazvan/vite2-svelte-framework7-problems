import { Writable, writable } from 'svelte/store'

interface RichMessageButton{
    text:string
    action:Function
}

interface RichMessage{
    text:string
    buttons?:Array<RichMessageButton>
}

const message:Writable<null|RichMessage> = writable({text:'hello',buttons:[
    {
        text:'ok',
        action:()=>{
            message.set(null)
        }
    }
]})

export default message
export type {
    RichMessage,
    RichMessageButton
}