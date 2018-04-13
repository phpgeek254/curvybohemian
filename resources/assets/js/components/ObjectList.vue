<template>
	<div class="row">
		<div class="row">
            <div class="col s12 m8 offset-m2" v-if="add_pallet">
            <add-object 
            :editable_object="editable_object" 
            :url="details.url" 
            :action="details.action">
            </add-object>
            </div>
        </div>
		<div v-for="object in objects" :key="object.id"
                 class="col s12 m8 offset-m2">
                <div class="card darken-1">
                    <div class="card-content black-text">
                        <span class="card-title" style="padding: 10px;">
                           {{ object.title }} 
                         </span>
                        <div class="right" v-if="auth_user && auth_user.admin ===1">
                            <a @click="set_editable_object(object)" class="black-text btn-flat"><i  class="fa fa-pencil"></i> Edit Blog</a>
                            <a @click="delete_object(object)" class="black-text btn-flat"><i class="fa  fa-trash"></i> Delete Blog</a>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                 <carosel :object="object"></carosel>
                            </div>
                            <div class="col s12" style="white-space: pre-wrap;">
                                {{ object.body }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s4">
                                <!-- Likes -->
                                <like :object="object" :object_type="object_type"></like>
                            </div>
                            <div class="col s4">
                                <!--Comments-->
                                <a v-if="auth_user"
                                   @click.prevent="show_comments()"
                                   class="btn-flat right">
                                    <i class="fa fa-commenting-o"></i>
                                </a>
                                <a v-if="!auth_user"
                                @click.prevent="show_comments()"
                                   class="btn-flat center purple-text">
                                    <i class="fa fa-commenting-o fa-2x"></i> {{ object.comments.length }}
                                </a>
                            </div>
                            <div class="col s4">
                                <!-- Add Images -->
                                <a v-if="auth_user && auth_user.admin=== 1"
                                   @click.prevent="show_uploader()"
                                   class="btn-flat right">
                                    <i class="fa fa-plus"></i>
                                </a>

                                <a v-if="!auth_user"
                                   class="btn-flat right purple-text">
                                    <i class="fa fa-instagram fa-2x"></i> {{ object.images.length }}
                                </a>
                            </div>

                        </div>
                        <div class="row" v-if="show_comments_pallet">
                            <div class="col s12">
                                <comment :object="object" :object_type="object_type"></comment>
                            </div>
                        </div>
                        <div class="row" v-if="show_uploader_pallet">
                            <div class="col s8 offset-s2">
                                <image-uploader :object="object" :object_type="object_type"></image-uploader>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-if="auth_user && auth_user.admin=== 1" 
            class="fixed-action-btn vertcal click-to-toggle">
            <a class="btn-floating btn purple"
               @click.prevent="show_add_object_pallet()">
                <i class="fa fa-plus"></i>
            </a>
        </div>
	</div>
	
</template>
<script>
import { get_headers } from './../config'
import { Bus } from './../Bus'
	export default {
        name: 'object-list',
		props: ['objects', 'object', 'object_type', 'details'],
		data() {
			return {
                editable_object: null,
				add_pallet: false,
				show_uploader_pallet: false,
                show_comments_pallet: false,
			}
		},
		computed: {
            auth_user() {
                return this.$store.getters.get_auth_user;
            },
        },
        mounted() {
            Bus.$on('object_saved', () => {
                this.add_pallet = false
            });
        },
        methods: {
        	show_uploader() {
                this.show_uploader_pallet = !this.show_uploader_pallet
            },

            show_comments() {
                this.show_comments_pallet = !this.show_comments_pallet
            },

            show_add_object_pallet() {
                this.add_pallet = !this.add_pallet
                this.editable_object = null;
            },
            set_editable_object(object) {
                this.editable_object = object;
                this.add_pallet = true;
            },
            delete_object(object) {
                Bus.$emit('Delete.' + this.object, object);
                console.log(this.object)
            },
            // load_detail_page(object) {
            //     this.$router.push({
            //         path: 'detail',
            //         params: { data: object }
            //     })
            // }
        }
	} 
</script>