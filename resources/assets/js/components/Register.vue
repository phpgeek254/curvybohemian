<template>
	<div class="row">
            <div class="col s12 m6 offset-m3">
                <div class="card large  darken-1 center">
                    <div class="card-content black-text">
                        <span class="card-title">Sign In</span>
                        <form @submit.prevent="signup()" method="post">
                        	<div class="input-field col s12">
                                <input v-model="signup_data.name"  type="text" class="validate" required>
                                <label>Name</label>
                            </div>
                            <div class="input-field col s12">
                                <input v-model="signup_data.email"  type="email" class="validate" required>
                                <label>Email</label>
                            </div>
                            <div class="input-field col s12">
                                <input v-model="signup_data.password" type="password" class="validate" required>
                                <label>Password</label>
                            </div>
                            <div class="input-field col s12">
                                <input v-model="signup_data.re_password" type="password" class="validate" required>
                                <label>Re-Password</label>
                            </div>
                            <div class="input-field col s12 center">

                                <button
                                :disabled="signup_data.password !== signup_data.re_password
                                || !signup_data.email || !signup_data.name || !signup_data.password"
                                type="submit" class="btn green">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    import {REGISTER_URL} from "../config";
	export default {
        name: 'Register',
		data() {
			return {
				signup_data: {
					name: '',
					email: '',
					password: '',
                    re_password: ''
				}
			}
		},
        methods: {
            signup() {
            axios.post(REGISTER_URL, this.signup_data).then(response => {
                if( response.status === 200) {
                    this.signup_data = {
                        name: '',
                        email: '',
                        password: '',
                        re_password: ''
                    }
                    this.$router.push({name: 'login'})
                }
            }, (error) => {
                console.log("Registration Unsuccessful", error)
            })
            }
        }
	}
</script>