<template>
	<div>
		<form @submit.prevent="save_object()">
                <div class="modal-content">
                    <h4> Create New </h4>
                    <div class="input-field col s12">
                        <label> Title </label>
                        <input type="text" v-model="object.title" class="validate">
                      

                    </div>

                    <div class="input-field col s12">
                        <textarea v-model="object.body" class="materialize-textarea"></textarea>
                        <label for="icon_prefix">Body </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button :disabled="!object.title || !object.body" 
                    type="submit"
                            class="left btn waves-effect waves-purple ">Save
                    </button>
                    <a @click="hide()" class=" btn waves-effect waves-purple right">Cancel</a>
                </div>
        </form>
	</div>
</template>
<script>
    import { get_headers } from './../config'
    import { Bus } from './../Bus'
	export default {
        name: 'AddObject',
		props: ['url', 'action', 'editable_object'],
		data() {
			return {
				object: {
					title: '',
                    body: '',
                    user_id: null
				}
			}
        },
        mounted() {
            this.set_component_object();
        },
		computed: {
			auth_user() {
				return this.$store.getters.get_auth_user;
			}
		},
		methods: {
            set_component_object() {
                if(this.editable_object !== null) {
                     this.object = this.editable_object;
                } else {
                    this.object = {
					title: '',
                    body: '',
                    user_id: null
                    }
                }
            },
			save_object() {
                if(this.editable_object !== null) {
                    this.object = this.editable_object
                    axios.put(this.url + "/" + this.object.id, this.object, { headers: get_headers() }).then(resp => {
                        console.log('Component successfully saved', resp)
                        Bus.$emit('object_saved');
                    }, (error) => {
                        console.log("Unable to edit the object", error);
                    })
                } else {
                this.object.user_id = this.auth_user.id
                axios.post(this.url, this.object, { headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        this.$store.dispatch(this.action, response.data);
                        Bus.$emit('object_saved');
                        this.object = {
	                    title: '',
	                    body: '',
	                    user_id: null
                	};
                    }
                }, (error) => {
                    console.log(error.errors)
                })
                }
                
            },
            hide() {
                this.editable_object = null;
            	this.object = {
	                    title: '',
	                    body: '',
	                    user_id: null
                };
            }
		}
	}
</script>