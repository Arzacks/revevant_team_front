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
                <v-btn @click="handleClick('something')" type="submit">Sign In</v-btn><br/>
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
    data() {
      return {
        quote: ''
      }
    },

    methods: {
      handleClick: function(text) {
        const axios = require('axios');

        alert(text)
        axios.get('/api/user', {
          params: {
            ID: 12345
          }
        })
        .then(function (response) {
          if (response != undefined) {
            console.log("all good")
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });  

      },
    }
}
</script>
