<template>
	<div class="Inscription">
		<template>
			<v-container fluid>
				<v-layout row wrap>
					<v-flex xs12 class="text-xs-center" mt-5>
                    	<h1>Register</h1>
					</v-flex>
            		<v-flex xs10 sm6 offset-sm3 mt->
                    	<form>
                        	<v-layout column>
                            	<v-flex>
									<v-text-field label="E-mail" id="email" required></v-text-field>
								</v-flex>
								<v-flex>
									<v-text-field type="password" label="Pass" id="password" required></v-text-field>
								</v-flex>
								<v-flex>
									<v-text-field type="password" label="Password Confirmation" id="passwordConfirmation" required> </v-text-field>
								</v-flex>
								<v-flex>
									<v-text-field label="Name" id="name" required></v-text-field>
								</v-flex>

								<v-flex class="text-xs-center" mt-5>
									<v-btn  @click="handleClick()">Register</v-btn>
								</v-flex>
							</v-layout>							
						</form>
					</v-flex>
				</v-layout>
			</v-container>
		</template>
	</div>
</template>

<script>
  export default {

    methods: {
      handleClick: function() {

        const pass = document.getElementById("password").value
		const email = document.getElementById("email").value
		const name = document.getElementById("name").value

        console.log("totototo = ", email, pass)
        const axios = require("axios")
        axios.post('https://relevant.cynnfx.fr/api/register', {
          email: email,
		  password: pass,
		  name: name
        })
        .then(function (response) {
          window.location.href = '/Success'
          console.log("toto = ", response)
        })
        .catch(function (error) {
          console.log("error = ", error)
        })
      },
    }
  }
</script>
