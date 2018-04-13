<template>
    <div>
        <!-- List of all the fashion_list -->
         <object-list
                 :objects="fashion_list"
                 object="fashion"
                 object_type="Fashion"
                 :details="details">

         </object-list>
    </div>
</template>
<script>
    import {FASHION_URL, get_headers} from "../config";
    import { Bus } from './../Bus'

    export default {
        name: 'Fashion',
        data() {
            return {
                details: {
                url: FASHION_URL,
                action: "add_new_fashion",
                }
            }
        },
        mounted() {
            this.load_fashion_list()
             Bus.$on('Delete.fashion', (obj)=> {
                this.$store.dispatch('delete_fashion', obj)
            })
        },
        computed: {
            fashion_list() {
                return this.$store.getters.get_all_fashion;
            }
        },
        methods: {
            load_fashion_list() {
                this.$store.dispatch('load_all_fashion')
            }
        }
    }
</script>
<style>

</style>