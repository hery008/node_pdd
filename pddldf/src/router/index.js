//1.配置路由
import Vue from "vue"
import VueRouter from "vue-router"

//引入一级路由路径
import Home from "../pages/Home/Home"
import Search from "../pages/Search/Search"
import Recommend from "../pages/Recommend/Recommend"
import Me from "../pages/Me/Me"
import Chat from "../pages/Chat/Chat"

//引入二级路由路径
import Hot from '../pages/Home/Children/Hot/Hot.vue'
import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'


//2.使用路由
Vue.use(VueRouter);

//3.输出路由对象
export default new VueRouter({
    //3.1配置一级路由
   routes:[
     {
       path:"/home",
       component: Home,
       children:[
         // 热门版块
         {path: 'hot', component: Hot},
         // 服饰版块
         {path: 'dress', component: Dress},
         // 鞋包版块
         {path: 'box', component: Box},
         // 母婴版块
         {path: 'mbaby', component: Mbaby},
         // 百货版块
         {path: 'general', component: General},
         // 食品版块
         {path: 'food', component: Food},
         // 内衣版块
         {path: 'shirt', component: Shirt},
         // 男装版块
         {path: 'man', component: Man},
         // 电器版块
         {path: 'ele', component: Ele},
         {path: '/home', redirect: '/home/hot'}
       ]
     },
     {
       path:"/recommend",
       component: Recommend
     },
     {
       path:"/me",
       component: Me
     },
     {
       path:"/search",
       component: Search
     },
     {
       path:"/chat",
       component: Chat
     },
     {
       path:"/",
       redirect:'/home'
     },
   ]
})
