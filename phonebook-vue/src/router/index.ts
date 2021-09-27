import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ContactForm from "../components/ContactForm.vue";
import ContactList from "../components/ContactList.vue";
import Login from "../components/Login.vue";
import {architectSDK} from '../architectSDKConfig';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if(architectSDK.isAuthenticated()) {
        next({
          name:  "Contact List",
        })
      } else {
        next();
      }
    }
  },
  {
    path: "/contact-list",
    name: "Contact List",
    component: ContactList,
    beforeEnter: (to,from,next) => {
      if(architectSDK.isAuthenticated()) {
        next();
      } else {
        next({ name: 'Login'})
      }
    }
  },
  {
    path: "/contact/:id",
    name: "Edit contact",
    component: ContactForm,
  },
  {
    path: "/contact",
    name: "Create contact",
    component: ContactForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
