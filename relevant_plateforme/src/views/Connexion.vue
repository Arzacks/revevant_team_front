<template>
  <div class="Connexion">
    <template>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 class="text-xs-center" mt-5>
            <h1>Sign In</h1>
          </v-flex>
          <v-flex xs12 sm6 offset-sm3 mt-3>
            <form>
              <v-layout column>
                <v-flex>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    type="email"
                    required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    required></v-text-field>
                </v-flex>
                <v-flex class="text-xs-center" mt-5>
                  <v-btn type="submit">Sign In</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>
      </v-container>
    </template>

    <v-app id="inspire">
      <v-card height="200px">
      <v-bottom-nav
        absolute
        :value="true"
        :active.sync="e1"
        :class="{
          'grey darken-4': e1 === 0,
          'light-blue darken-4': e1 === 1,
          'teal darken-4': e1 === 2,
          'amber darken-4': e1 === 3,
          'light-green darken-4': e1 === 4,
          'blue-grey darken-2': e1 === 5,
        }">
        <v-btn dark>
          <span>Team</span>
          <v-icon>group</v-icon>
        </v-btn>
        <v-btn dark>
          <span>Computation</span>
          <v-icon>memory</v-icon>
        </v-btn>
        <v-btn dark>
          <span>Contact</span>
          <v-icon>contact_mail</v-icon>
        </v-btn>
        <v-btn dark>
          <span>Project</span>
          <v-icon>build</v-icon>
        </v-btn>
        <v-btn dark>
          <span>Funding</span>
          <v-icon>attach_money</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>

  </div>
</template>
