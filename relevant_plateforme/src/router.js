import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Accueil.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Home
    },
    {
      path: "/Connexion",
      name: "Connexion",
      component: function() {
        return import("./views/Connexion.vue")
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
    },
    {
      path: "/Success",
      name: "Success",
      component: function() {
        return import("./views/Success.vue");
      }
    }

  ]
});
