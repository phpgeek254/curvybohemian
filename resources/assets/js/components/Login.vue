<template>
        <div class="row">
            <div class="col s12 m6 offset-m3">
                <div class="card medium  darken-1 center">
                    <div class="card-content black-text">
                        <span class="card-title">Sign In</span>
                        <form @submit.prevent="login()">
                            <div class="input-field col s12">
                                <input v-model="login_data.username" id="icon_prefix" type="text" class="validate">
                                <label for="icon_prefix">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <input v-model="login_data.password" id="icon_prefix1" type="password" class="validate">
                                <label for="icon_prefix1">Password</label>
                            </div>
                            <div class="input-field col s12 center">

                                <button
                                        :disabled="!login_data.username || !login_data.password"
                                        type="submit" class="btn green">
                                    Login
                                </button>
                                <br>
                                or <a @click.prevent="register"> Register </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

</template>
<script>
    import {LOGIN_URL, CLIENT_SECRET, CLIENT_ID, AUTH_USER_URL, get_headers } from './../config'
    export default {
        name: 'login',
        data() {
            return {
                login_data: {
                    grant_type: 'password',
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    username: '',
                    password: '',
                }
            }
        },
        mounted(){

        },
        methods: {
            login(){
                axios.post(LOGIN_URL, this.login_data).then(response => {
                    if(response.status === 200) {
                        console.log(response)
                        // Store the token in in the local storage
                        localStorage.setItem('access_token', response.data.access_token)
                        localStorage.setItem('refresh_token', response.data.refresh_token)
                        this.$store.dispatch('init_auth_user');
                        this.$router.push({name: 'home'})

                    }

                }, (error) => {
                    console.log(error);
                })
            },
            register() {
                this.$router.push({name: 'register'})
            }
        }
    }
</script>
<style scoped>

</style>