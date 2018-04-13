<template>
    <div>
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>
<script>
    import Navigation from './Navigation.vue'
    import Homepage from './HomePage.vue'

    export default {
        name:'App',
        components: { Navigation, Homepage },
        mounted() {
            this.$store.dispatch('init_auth_user');
            console.log('Component mounted.')
        }
    }
</script>
<style>
    .btn{
        background-color: purple;
    }
</style>
