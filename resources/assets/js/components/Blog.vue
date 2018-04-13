
<template>
    <div>
        <!-- List of all the fact_list -->
        <object-list :objects="posts" object="post" object_type="Post" :details="details"></object-list>
    </div>
</template>
<script>
    import {POST_URL, get_headers} from "../config";
    import { Bus } from './../Bus'

    export default {
        name: 'blog',
        data() {
            return {
                details: {
                url: POST_URL,
                action: "add_new_post",
                }
            }
        },
        mounted() {
            this.load_post_list()
             Bus.$on('Delete.blog', (obj)=> {
                this.$store.dispatch('delete_blog', obj)
            })
        },
        computed: {
            posts() {
                return this.$store.getters.get_all_posts;
            }
        },
        methods: {
            load_post_list() {
                axios.get(POST_URL, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        this.$store.dispatch('load_all_posts', response.data)
                    }
                })
            }
        }
    }
</script>
<style>

</style>