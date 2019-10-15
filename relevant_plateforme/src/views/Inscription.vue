<template>
	<div class="Inscription">
		<template>
			<v-layout row wrap>
				<v-flex xs10 sm4 offset-sm4 mt-0>
					<form id="register">
						<v-flex xs12 class="text-xs-center" mt-0>
							<h1 id="title">Register</h1>
						</v-flex>
						<v-layout column>
							<v-flex xs10 sm8 offset-sm2 mt-0>
								<v-text-field class="input-txt" label="E-mail" id="email" required></v-text-field>
							</v-flex>
							<v-flex xs10 sm8 offset-sm2 mt-0>
								<v-text-field class="input-txt" type="password" label="Pass" id="password" required></v-text-field>
							</v-flex>
							<v-flex xs10 sm8 offset-sm2 mt-0>
								<v-text-field class="input-txt" type="password" label="Password Confirmation" id="passwordConfirmation" required> </v-text-field>
							</v-flex>
							<v-flex xs10 sm8 offset-sm2 mt-0>
								<v-text-field class="input-txt" label="Name" id="name" required></v-text-field>
							</v-flex>
							<v-flex xs10 sm4 offset-sm6 mt-0>
								<v-btn id="btn-submit" @click="handleClick()">Submit</v-btn>
								<h6 id="text">Already have an account ?</h6>
							</v-flex>
						</v-layout>
					</form>
				</v-flex>
			</v-layout>
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

<style>
	.Inscription {
		background: #009AD3;
	}

	#title {
		padding-top: 15px;
	}

	#register {
		background: #BEE6F4;
		border-radius: 40px;
	}

	#text {
		padding-bottom: 5px;
	}

	.input-txt {
		width: 80%;
	}

	#btn-submit {
		background: #BEE6F4;
	}

</style>
