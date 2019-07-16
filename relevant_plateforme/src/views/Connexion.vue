<template>
  <div class="Connexion">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center" mt-5>
          <h1>Sign In</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field name="email" label="Email" id="email" type="email" required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field name="password" label="Password" id="password" type="password" required></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" mt-5>
                <v-btn @click="handleClick()">Sign In</v-btn>
                or <router-link to="/Inscription">Register</router-link>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {

    methods: {
      handleClick: function() {

        const pass = document.getElementById("password").value
        const email = document.getElementById("email").value

        console.log("totototo = ", email, pass)
        const axios = require("axios")
        axios.post('https://relevant.cynnfx.fr/api/login', {
          email: email,
          password: pass,
        })
        .then(function (response) {
          window.location.href = '/research'
          console.log("toto = ", response)
        })
        .catch(function (error) {
          console.log("error = ", error)
        })
      },
    }
  }
</script>
