<template>
    <nav class="purple">
        <div class="nav-wrapper">
            <a href="/" class="brand-logo v-align-wrapper">
                <img src="images/white.png" alt=""
                     width="50" height="50">
            </a>

            <a href="#" data-activates="mobile-demo" class="button-collapse">
                <i class="fa fa-bars fa-2x"></i>
            </a>
            <ul class="right hide-on-med-and-down purple" >
                <router-link tag="li" to="/">
                    <a>Home</a>
                </router-link>
                <!-- <router-link tag="li" to="/about">
                    <a>About</a>
                </router-link> -->
                <router-link tag="li" to="/fashion">
                    <a>Fashion & Style</a>
                </router-link>
                <router-link tag="li" to="/beauty">
                    <a>Beauty</a>
                </router-link>

                <router-link tag="li" to="/diy">
                    <a>DIY</a>
                </router-link>
                <router-link tag="li" to="/facts">
                    <a>Fun Facts</a>
                </router-link>
                <router-link tag="li" to="/gallery">
                    <a>Gallery</a>
                </router-link>
                <router-link tag="li" to="/blog">
                    <a>Blog</a>
                </router-link>
                <router-link  v-if="auth_user && auth_user.admin === 1" tag="li" to="/slider">
                    <a>Slider</a>
                </router-link>
                <router-link v-if="!auth_user" tag="li" to="/login">
                    <a>Login</a>
                </router-link>
                <router-link v-if="!auth_user" tag="li" to="/register">
                    <a>Register</a>
                </router-link>
                <router-link   v-if="auth_user" tag="li" to="/register" @click.native='handle_logout()'>
                    <a>Logout</a>
                </router-link>
            </ul>
            <ul class="side-nav purple white-text" id="mobile-demo">
                <router-link tag="li" to="/" @click.native='hideNav()'>
                    <a > Home </a>
                </router-link>
                <!-- <router-link tag="li" to="/about" @click.native='hideNav()'>
                    <a>About</a>
                </router-link> -->
                <router-link tag="li" to="/fashion" @click.native='hideNav()'>
                    <a>Fashion & Style</a>
                </router-link>
                <router-link tag="li" to="/beauty" @click.native='hideNav()'>
                    <a>Beauty</a>
                </router-link>
                <router-link tag="li" to="/diy" @click.native='hideNav()'>
                    <a>DIY</a>
                </router-link>
                <router-link tag="li" to="/facts" @click.native='hideNav()'>
                    <a>Fun Facts</a>
                </router-link>
                <router-link tag="li" to="/gallery" @click.native='hideNav()'>
                    <a>Gallery</a>
                </router-link>
                <router-link tag="li" to="/blog" @click.native='hideNav()'>
                    <a>Blog</a>
                </router-link>
                <router-link v-if="auth_user && auth_user.admin === 1" tag="li" to="/slider" @click.native='hideNav()'>
                    <a>Slider</a>
                </router-link>

                <router-link   v-if="!auth_user"  tag="li" to="/login" @click.native='hideNav()'>
                    <a>Login</a>
                </router-link>

                <router-link  v-if="!auth_user" tag="li" to="/register" @click.native='hideNav()'>
                    <a>Register</a>
                </router-link>
                <router-link   v-if="auth_user" tag="li" to="/register" @click.native='handle_logout()'>
                    <a>Logout</a>
                </router-link>


            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Navigation',
        data(){
            return {
            }
        },
        mounted() {
        
        },
        computed: {
            auth_user() {
                return this.$store.getters.get_auth_user
            }
        },
        methods: {
            hideNav(){
                $('.button-collapse').sideNav('hide')
            },
            handle_logout () {
               window.localStorage.removeItem('access_token')
               window.localStorage.removeItem('refresh_token')
                this.$store.dispatch('unset_auth_user');
                $('.button-collapse').sideNav('hide');
                this.$router.push({path: '/'})
            }
        }
    }
</script>
<style scoped>
    a {
        color: white !important
    }
</style>