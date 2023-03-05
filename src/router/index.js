import {createRouter, createWebHistory} from "vue-router"
import HotPlay from "@/components/HotPlay.vue";
import message from "@/components/Message.vue";
import Game from "@/components/Game.vue";
import SelectGame from "@/components/SelectGame.vue";
import EatSnack from "@/components/EatSnack.vue";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/Hot",component:HotPlay},
        {path:"/Message",component:message},
        {path : "/Game",component:Game},
        {path:"/SelectGame",component:SelectGame},
        {path : "/EatSnack",component:EatSnack},

    ]
})
export default router;