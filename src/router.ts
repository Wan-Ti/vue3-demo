import {createWebHashHistory,createRouter} from "vue-router";
import './index.css'
import Doc from "./views/Doc.vue";
import Home from "./views/Home.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import Intro from "./views/Intro.vue"
import GetStarted from "./views/GetStarted.vue"
import Install from "./views/Install.vue"


const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
                {path:'Intro',component:Intro},
                {path:'Get-started',component:GetStarted},
                {path:'Install',component:Install},
                {path:'SwitchDemo',component:SwitchDemo},
                {path:'ButtonDemo',component:ButtonDemo},
                {path:'DialogDemo',component:DialogDemo},
                {path:'TabsDemo',component:TabsDemo},
            ]}
    ]
})
router.afterEach(()=>{
    console.log('路由切换了')
})
