
<template>
    <div>
        <!-- List of all the diy_list -->
       <object-list :objects="diy_list" object="diy" object_type="Diy" :details="details"></object-list>
    </div>
</template>
<script>
    import { DIY_URL, get_headers } from "../config";
    import {Bus} from './../Bus'

    export default {
        name: 'Diy',
        data() {
            return {
                details: {
                url: DIY_URL,
                action: "add_new_diy",
                }
            }
        },
        mounted() {
            this.load_diy_list()
            console.log('Component')
            Bus.$on('Delete.diy', (obj)=> {
                this.$store.dispatch('delete_diy', obj)
            })
        },
        computed: {
            diy_list() {
                return this.$store.getters.get_all_diys;
            }
        },
        methods: {
            load_diy_list() {
                axios.get(DIY_URL, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        this.$store.dispatch('load_all_diy', response.data)
                    }
                })
            }
        }
    }
</script>
<style>

</style>