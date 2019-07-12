import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Accueil.vue";
import Connexion from "./views/Connexion.vue";
import Register from "./views/Inscription.vue";
import Social from "./views/Social.vue";
import Research from "./views/Research.vue";
import ResearchResult from "./views/SearchResult.vue";

import Success from "./views/Success.vue";

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
      component: Connexion
    },
    {
      path: "/Social",
      name: "Social",
      component: Social
    },
    {
      path: "/Inscription",
      name: "Inscription",
      component: Register
    },
    {
      path: "/Success",
      name: "Success",
      component: Success
    },
    {
      path: "/research",
      name: "Research",
      component: Research
    },
    {
      path: "/ResultResearch",
      name: "ResultResearch",
      component: ResearchResult
    }
  ]
});
