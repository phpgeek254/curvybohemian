<template>
    <div>
        <!-- List of all the galleries -->
        <div class="row">
            <div v-if="show_add_pallet" id="add_slider" class="col s12 m10 offset-m1 center">
            <form @submit.prevent="add_new_slider()">
                <div class="modal-content">
                    <h4> Add New Slider </h4>
                    <div class="input-field col s12">
                        <input id="icon_prefix" type="text" v-model="slider.name" class="validate">
                        <label for="icon_prefix">Slider Name </label>

                    </div>
                </div>
                <div class="modal-footer">
                    <button :disabled="!slider.name" type="submit" href="#"
                            class="left btn waves-effect waves-purple ">Save
                    </button>
                    <a href="#" class=" btn waves-effect waves-purple modal-action modal-close">Cancel</a>
                </div>
            </form>
        </div>

            <div v-for="slider in sliders" :key="slider.id"
                 class="col s12 m8 offset-m2">
                <div class="card darken-1">
                    <div class="card-content black-text">
                      <span class="card-title" style="padding: 10px;"> {{ slider.name }} </span>
                        <div class="row">
                        <div class="col s12">
                            <carosel :object="slider"></carosel>
                        </div>
                        </div>

                        <div class="row">
                            <div class="col s4">
                            <!-- Likes -->
                                <like :object="slider" object_type="Slider"></like>
                            </div>
                            <div class="col s4">
                            <!--Commentns-->
                                <a v-if="auth_user"
                                   @click.prevent="show_comments(slider)"
                                   class="btn-flat right">
                                    <i class="fa fa-commenting-o"></i>
                                </a>
                            </div>
                            <div class="col s4">
                                <!-- Add Images -->
                                <a v-if="auth_user && auth_user.admin=== 1"
                                   @click.prevent="show_uploader(slider)"
                                   class="btn-flat right">
                                    <i class="fa fa-plus "></i>
                                </a>
                            </div>

                        </div>
                        <div class="row" v-if="show_comments_pallet">
                            <div class="col s12">
                                <comment :object="slider" object_type="Slider"></comment>
                            </div>
                        </div>
                        <div class="row" v-if="show_uploader_pallet">
                            <div class="col s8 offset-s2">
                                <image-uploader :object="slider" object_type="Slider"></image-uploader>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- add Slider button if the user is an admin -->
        <div v-if="auth_user && auth_user.admin=== 1" class="fixed-action-btn horizontal click-to-toggle">
            <a class="btn-floating btn purple" @click.prevent="show_add_pallet = !show_add_pallet">
                <i class="fa fa-plus"></i>
            </a>
        </div>
        <!-- Add Slider Dialog -->
        
    </div>
</template>
<script>
import {SLIDER_URL, get_headers} from "../config";
import { Bus } from './../Bus'

    export default {
         name: 'Slider',
        data() {
           
            return {
                show_uploader_pallet: false,
                show_comments_pallet: false,
                show_add_pallet: false,
                slider: {
                    name: ''
                }
            }
        },
        mounted() {
            this.load_all_sliders()
            Bus.$on('Delete.slider', (obj)=> {
                this.$store.dispatch('delete_slider', obj)
            })
        },
        computed: {
            auth_user() {
                return this.$store.getters.get_auth_user;
            },
            sliders() {
                return this.$store.getters.get_all_sliders;
            }
        },
        methods: {
            load_all_sliders() {
                this.$store.dispatch('load_all_sliders')
            },
            
            show_uploader(slider) {
                this.show_uploader_pallet = !this.show_uploader_pallet
                this.active_slider = slider;
            },
            show_comments() {
                this.show_comments_pallet = !this.show_comments_pallet
            },
            add_new_slider() {
                axios.post(SLIDER_URL, this.slider, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        this.$store.dispatch('add_new_slider', response.data);
                        this.slider.name = '';
                        this.show_add_pallet = false
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