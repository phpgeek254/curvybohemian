
<template>
    <div>
        <!-- List of all the beauty_list -->
        <object-list :objects="beauty_list" object="beauty" object_type="Beauty" :details="details"></object-list>

    </div>
</template>
<script>
    import {BEAUTY_URL, get_headers} from "../config";
    import { Bus } from './../Bus'

    export default {
        name: 'beauty',
        data() {
            return {
                details: {
                url: BEAUTY_URL,
                action: "add_new_beauty",
                }
            }
        },
        mounted() {
            this.load_beauty_list()
             Bus.$on('Delete.beauty', (obj)=> {
                this.$store.dispatch('delete_beauty', obj)
            })
        },
        computed: {
            beauty_list() {
                return this.$store.getters.get_beauty_list;
            }
        },
        methods: {
            load_beauty_list() {
                this.$store.dispatch('load_beauty_list')
                
            }
        }
    }
</script>
<style>

</style>