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
									<v-text-field
										v-model="email"
										v-validate="'required|email'"
										:error-messages="errors.collect('email')"
										label="E-mail"
										data-vv-name="email"
										required
									></v-text-field>
								</v-flex>
								<v-flex>
									<v-text-field
										ref="password"
										type="password"
										label="Pass"
										required>
									</v-text-field>
								</v-flex>
								<v-flex>
									<v-text-field
										v-model="pass2"
										type="password"
										label="Password Confirmation"
										data-vv-name="pass"
										required>
									</v-text-field>
								</v-flex>
								<v-flex class="text-xs-center" mt-5>
									<v-btn type="submit" to="/Success">Register</v-btn>
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
Vue.use(VeeValidate);

export default {
	$_veeValidate: {
		validator: 'new'
	},

	data () {
		email = '',
		dictionary = {
			attributes: {
				email: 'E-mail Address'
			}
    	}
	},

	mounted () {
	this.$validator.localize('en', this.dictionary)
	},

	methods: {
		submit () {
		this.$validator.validateAll()
		},

		clear () {
		this.email = ''
		this.$validator.reset()
		}
  	}
}
</script>