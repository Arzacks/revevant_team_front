<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Connexion">Connection</router-link> |
      <router-link to="/Inscription">Register</router-link> |
      <router-link to="/Social">Social</router-link> |
      <router-link to="/research">Search from keywords</router-link>
    </div>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <v-footer
      color="#3AB4DF"
      app
    >
      <div id="footer">
        <span class="white--text">&copy; Relevant</span>
      </div>
    </v-footer>
  </div>
</template>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #009AD3;
    height:100%;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #footer {
    width: 100%;
    align-items: center;
    text-align: center;
  }
</style>
