<template>

    <div>
        <ul class="collection" v-if="object.comments.length > 0">
            <h5 class="center">Comments</h5>
            <li class="collection-item avatar" v-for="comment in object.comments" :key="comment.id">
                <img :src="comment.user.avatar" alt="" class="circle">
                <span class="title">{{ comment.user.name }}</span>
                <p>
                    {{ comment.comment }}
                </p>
            </li>
        </ul>
        <form @submit.prevent="add_new_comment()"
              v-if="$store.getters.get_auth_user !== null">
            <div class="modal-content valign-wrapper">
                <div class="input-field col s8">
                    <input type="text"
                           v-model="comment.body"
                    />
                    <label for="textarea1">Comment</label>
                    <input type="hidden" name="token" value="token">
                </div>
                <div class="col s4">
                    <button :disabled="!comment.body"
                            type="submit" href="#"
                            class="left btn-flat waves-effect waves-purple">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>

            </div>

        </form>
    </div>

</template>
<script>
    import { COMMENT_URL, get_headers } from './../config'
    export default {
        name: 'comment',
        props: ['object', 'object_type'],
        data() {
            return {
                comment: {
                    body: ''
                },
            }
        },
        methods: {
            add_new_comment(){
                if(this.$store.getters.get_auth_user === null) {
                    this.$router.push({path: 'login'})
                }
                axios.post(COMMENT_URL, {
                    commentable_id: this.object.id,
                    commentable_type: this.object_type,
                    comment: this.comment.body,
                    user_id: this.$store.getters.get_auth_user.id
                }, { headers: get_headers() }).then(response => {
                    if(response.status === 200) {
                        $('#show_image').modal('close');
                        this.object.comments.unshift(response.data)
                        this.comment =  {
                            body: ''
                        }
                    }
                })
            }
        }
    }
</script>