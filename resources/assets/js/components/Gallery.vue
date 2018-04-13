<template>
    <div>
        <!-- List of all the galleries -->
        <div class="row">
            <div v-for="gallery in galleries" :key="gallery.id"
                 class="col s12 m8 offset-m2">
                <div class="card darken-1">
                    <div class="card-content black-text">
                      <span class="card-title" style="padding: 10px;"> {{ gallery.name }} </span>
                        <div class="row">
                        <div class="col s12">
                             <carosel :object="gallery"></carosel>
                        </div>
                        </div>

                        <div class="row">
                            <div class="col s4">
                            <!-- Likes -->
                                <like :object="gallery" object_type="Gallery"></like>
                            </div>
                            <div class="col s4">
                            <!--Commentns-->
                                <a v-if="auth_user"
                                   @click.prevent="show_comments(gallery)"
                                   class="btn-flat right">
                                    <i class="fa fa-commenting-o"></i>
                                </a>
                            </div>
                            <div class="col s4">
                                <!-- Add Images -->
                                <a v-if="auth_user && auth_user.admin=== 1"
                                   @click.prevent="show_uploader(gallery)"
                                   class="btn-flat right">
                                    <i class="fa fa-plus "></i>
                                </a>
                            </div>

                        </div>
                        <div class="row" v-if="show_comments_pallet">
                            <div class="col s12">
                                <comment :object="gallery" object_type="Gallery"></comment>
                            </div>
                        </div>
                        <div class="row" v-if="show_uploader_pallet">
                            <div class="col s8 offset-s2">
                                <image-uploader :object="gallery" object_type="Gallery"></image-uploader>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- add Gallery button if the user is an admin -->
        <div v-if="auth_user && auth_user.admin === 1" class="fixed-action-btn horizontal click-to-toggle">
            <a class="btn-floating btn purple" @click.prevent="show_add_pallet = !show_add_pallet">
                <i class="fa fa-plus"></i>
            </a>
        </div>
        <!-- Add Gallery Dialog -->
        <div v-if="show_add_pallet" id="add_gallery">
            <form @submit.prevent="add_new_gallery()">
                <div class="modal-content">
                    <h4> Add New Gallery </h4>
                    <div class="input-field col s12">
                        <input id="icon_prefix" type="text" v-model="gallery.name" class="validate">
                        <label for="icon_prefix">Gallery Name </label>

                    </div>
                </div>
                <div class="modal-footer">
                    <button :disabled="!gallery.name" type="submit" href="#"
                            class="left btn waves-effect waves-purple ">Save
                    </button>
                    <a href="#" class=" btn waves-effect waves-purple modal-action modal-close">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import {GALLERY_URL, get_headers} from "../config";

    export default {
        name: 'Gallery',
        data() {
            return {
                show_uploader_pallet: false,
                show_comments_pallet: false,
                show_add_pallet: false,
                active_gallery: null,
                gallery: {
                    name: ''
                }
            }
        },
        mounted() {
            this.load_galleries()
        },
        computed: {
            auth_user() {
                return this.$store.getters.get_auth_user;
            },
            galleries() {
                return this.$store.getters.get_all_galleries;
            }
        },
        methods: {
            load_galleries() {
                axios.get(GALLERY_URL, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        this.$store.dispatch('get_all_galleries', response.data)
                    }
                })
            },
        
            show_uploader(gallery) {
                this.show_uploader_pallet = !this.show_uploader_pallet
                this.active_gallery = gallery;
            },
            show_comments() {
                this.show_comments_pallet = !this.show_comments_pallet
            },
            add_new_gallery() {
                axios.post(GALLERY_URL, this.gallery, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        this.$store.dispatch('add_new_gallery', response.data);
                        this.gallery.name = '';
                    }
                }, (error) => {
                    console.log(error.errors)
                })
            },
        }
    }
</script>
<style>

</style>