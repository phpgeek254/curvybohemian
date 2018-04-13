<template>
    <div class="center">
        <carousel v-if="object.images.length > 0" :perPage="1" :autoplay="true" :autoplayHoverPause="true">
            <slide v-for="image in object.images" :key="image.id">
                <img :src="image.url" class="responsive-img" alt="">
                <button v-if="auth_user && auth_user.admin === 1"
                        class="btn-flat" @click="remove_image(image)">
                    <i class="fa fa-trash"></i> Remove Image</button>
            </slide>
        </carousel>
    </div>
</template>
<script>
    import { IMAGE_URL, get_headers } from './../config'
	export default {
        name: 'carosel',
		props: ['object'],
        computed: {
            auth_user() {
                return this.$store.getters.get_auth_user;
            }
        },
        methods: {
            remove_image(image) {
                axios.delete(IMAGE_URL + '/' + image.id, { headers: get_headers() }).then(resp => {
                if(resp.status === 200) {
                    this.object.images = this.object.images.filter(image => {
                        return image.id !== resp.data.id;
                    })
                }
                }, (error) => {
                    console.log('ERROR OCCURRED WHILE DELETING THE IMAGE', error)
                })
            }
        }
	}
</script>