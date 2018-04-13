
<template>
    <div>
        <!-- List of all the fact_list -->
         <object-list :objects="fact_list" object="fact" object_type="Fact" :details="details"></object-list>
    </div>
</template>
<script>

    import {FACT_URL, get_headers} from "../config";
    import { Bus } from './../Bus'

    export default {
        name: 'Fact',
        data() {
            return {
                details: {
                url: FACT_URL,
                action: "add_new_fact",
                }
               
            }
        },
        mounted() {
            this.load_fact_list()
             Bus.$on('Delete.fact', (obj)=> {
                this.$store.dispatch('delete_fact', obj)
            })
        },
        computed: {
            auth_user() {
                return this.$store.getters.get_auth_user;
            },
            fact_list() {
                return this.$store.getters.get_all_facts;
            }
        },
        methods: {
            load_fact_list() {
                this.$store.dispatch('load_all_facts')
              },
            
        }
    }
</script>
<style>

</style>