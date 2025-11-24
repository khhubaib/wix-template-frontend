
import Home from "./components/Home.vue";
import Service from "./components/Service.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import OurWork from "./components/OurWork.vue";
import { createRouter, createWebHistory } from "vue-router";

 const routes = [
    {
        path : '/',
        name: 'Home',
        component: Home,
    },
     {
        path : '/about',
        name: 'About',
        component: About,
    },
     {
        path : '/service',
        name: 'Service',
        component: Service,
    },
     {
        path : '/ourwork',
        name: 'OurWork',
        component: OurWork,
    },
     {
        path : '/contact',
        name: 'Contact',
        component: Contact,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;