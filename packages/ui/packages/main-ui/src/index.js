import Vue from "./vue";
import VueRouter from "./vue-router";

(()=>{
     console.log("Wow it actually works");
     Vue.use(VueRouter);
     const routes = [
         {
             path: '/',
             component: Viewport
         }
     ];
     const router = new VueRouter({
         mode: "history",
         routes: routes
     });
     window.app = new Vue({ router })
     window.app.$mount('#jg-app');
})();
