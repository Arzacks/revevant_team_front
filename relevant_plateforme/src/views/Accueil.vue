<template>
  <div class="Accueil">
    <template>
      <v-container fluid>
        <v-layout align-center column>
          <v-flex xs12 class="text-xs-center" mt-5>
            <h1>Welcome on Relevant!</h1>
          </v-flex>
          <v-flex xs12 sm4 text-xs-center>
            <div>
              <v-btn to="/Connexion">
                Sign In
              </v-btn>
            </div>
            <div>
              <v-btn to="/Inscription">
                Register
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </div>
</template>
