import Vue from "vue";
import Router from "vue-router";
import Connexion from "./views/Connexion.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Connexion",
      component: Connexion
    },
    {
      path: "/Accueil",
      name: "Accueil",
      component: function() {
        return import("./views/Accueil.vue");
      }
    },
    {
      path: "/Social",
      name: "Social",
      component: function() {
        return import("./views/Social.vue");
      }
    },
    {
      path: "/Inscription",
      name: "Inscription",
      component: function() {
        return import("./views/Inscription.vue");
      }
    }

  ]
});
