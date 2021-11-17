import Dialog from "./Dialog.vue";
import { createApp,h } from 'vue';



export const openDialog = (options: { cancel(): void; title: string; ok(): void; content: string }) => {
    // @ts-ignore
    const {title,content,ok,cancel} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        // @ts-ignore
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render(){
            return h(
                Dialog,
                {visible:true,'onUpdate:visible':(newVisible: any) => {
                    if(newVisible === false){
                        close()
                    }
                },
                ok,
                cancel
            },
                {
                title:title,
                content:content
            })
        }
    })
    app.mount(div)

}
