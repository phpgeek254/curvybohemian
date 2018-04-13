<template>
    <div>
        <a class="green-text"
           v-if="$store.getters.get_auth_user !== null
                && !auth_user_likes_post"
           @click="like()">
            <i class="fa fa-heart-o  blacl-text" aria-hidden="true"></i>
            <span class="black-text">{{ object.likes.length }} likes</span>
        </a>
        <a
            class="red-text"
            v-if="$store.getters.get_auth_user !== null &&
            auth_user_likes_post"
            @click="unlike()"
        >
            <i class="fa fa-heart" aria-hidden="true"></i>
            {{ object.likes.length }} likes
        </a>
        <a
            class="purple-text"
            v-if="!$store.getters.get_auth_user"
        >
            <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
            {{ object.likes.length }} likes
        </a>
    </div>
</template>

<script>
    import {LIKE_URL, get_headers } from "../config";
    export default {
        name: 'like',
        props: ['id', 'object', 'object_type'],
        mounted() {

        },
        computed: {
            likers() {
                console.log(this.object);
                let likers = [];
                this.object.likes.forEach((like) => {
                    likers.push(like.user.id)
                });
                return likers
            },
            auth_user_likes_post() {
                let check_index = this.likers.indexOf(
                    this.$store.getters.get_auth_user.id
                );
                if (check_index === -1)
                    return false;
                else
                    return true
            }
        },

        methods: {
            like(){
                if(this.$store.getters.get_auth_user === null) {
                    this.$router.push({path: 'login'})
                }
                axios.post(LIKE_URL, {
                    likable_type: this.object_type,
                    likable_id: this.object.id,
                    user_id: this.$store.getters.get_auth_user.id,
                }, { headers: get_headers() }).then( response => {
                    this.object.likes.push(response.data)
                })

            },

            unlike(){
                let like = null;
                like = this.object.likes.find(l => {
                    return l.user.id === this.$store.getters.get_auth_user.id
                });
                axios.delete(LIKE_URL + '/' + like.id, { headers: get_headers() }).then((response) => {
                    this.object.likes = this.object.likes.filter((l) => {
                        return l.id !== response.data.id
                    })
                })
            }
        }
    }
</script>
