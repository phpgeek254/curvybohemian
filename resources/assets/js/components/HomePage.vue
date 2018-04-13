<template>
    <div>
        <div class="parallax-container">
            <div class="row">
                <div class="col m12 s12" style="background: white; opacity: 0.95;">
                    <h5 class="header center">
                        The website that tends to your all round person
                    </h5>
                    <carousel v-if="slider" :perPage="1" :navigationEnabled="true" :autoplay="true">
                        <slide v-if="slider && Object.keys(slider).length > 0 && slider.images.length > 0"
                               v-for="image in slider.images" :key="image.id">
                            <img :src="image.url" class="responsive-img" alt="">
                        </slide>
                    </carousel>
                </div>
            </div>

            <div class="parallax">
                <img v-if="slider" :src="slider.images[0].url">
            </div>


        </div>
        <div class="section white">
            <div class="row">
                <div class="col s12">
                    <h3 class="center">FASHION AND STYLE</h3>
                    <p>
                        Fashion  is what you buy, style is what you do with it.
                        <br>
                        <strong class="right">Nicky Hilton Rothschild.</strong> <br>
                        Our outfits are who we want the world to perceive us to be, often a reflection of our inner selves. An instant language. That is why our blog’s main focus will be on how to dress stylishly using different pieces and colours juxtaposed.  The pieces will range from designer outfits to thrifted ones to give just the right vibe.
                        We will also show how to attain looks for various occassions that is both fabulous and appropriate for that environment with a touch of sassy. Fashion gurus that always keep it trendy and elegant will be featured as we draw inspiration from them.
                        Create your own visual style, let it be unique for yourself and  yet  identifiable for others as it reflects your attitude and personality. Let’s get dashing!

                    </p>
                </div>
                <div class="col s12">
                    <h3 class="center">BEAUTY</h3>
                    <p>
                        Make up is not a mask that covers up your beauty, it’s a weapon that helps you express who you are from the inside.
                        <br>
                        <strong class="right">Michelle Phan.</strong> <br>
                        Looking amazing always boosts our confidence to face the world. That is why we will show amazing face beats from our very own and skilled Nina to crown the entire look.
                        Not forgetting nail art that flatter those fingers and hairdos that bring out those amazing features on your face.  We will give tips on how to keep that hair, those nails, and that skin healthy and glowing.
                        How to make easily available and safe natural home beauty remedies will be our main focus.
                    </p>
                </div>

                <div class="col s12">
                    <h3 class="center">D.I.Y.</h3>
                    <p>
                        You can’t use up creativity. The more you use, the more you have.
                        <br>
                        <strong class="right"> Maya  Angelou. </strong> <br>
                        We intend to inspire your creativity by coming up with interesting ideas on how to spice up that look. This will include makeovers various clothes and coming up with captivating designs from otherwise plain pieces. Having fun with your outfit by giving it an unexpected twist with a whole dash of uniqueness is our aim.
                        Creativity is allowing yourself to make mistakes. Art is knowing  which ones to keep.  We hope this will not only be an inspiration to your slay, but also in other areas of your creative life.

                    </p>
                </div>

                <div class="col s12">
                    <h3 class="center"> FUN FACTS </h3>
                    <p>
                        I continue to be interested in new things that seem old and old things that seem new.
                        <br>
                        <strong class="right"> Jacquelin .T. Robertson. </strong> <br>
                        From Science, to History, to beauty, we will give facts on various engrossing  topics to sharpen that bright mind. Our aim is to reach you wholesomely because a smart person, is a beautiful person. These topics will be well researched to ensure to get the correct knowledge.
                        We hope you enjoy them as much as we do. Thank you. 

                    </p>
                </div>


                <div class="col s12">
                    <h3 class="center">HEALTH</h3>
                    <p>
                        To keep the body in good health is a duty…otherwise we shall not be able to keep our mind strong and clear.
                        <br>
                        <strong class="right">Buddha.</strong> <br>
                        Self care is a key importance to every human, starting from self love to doing the 20 minute workout. Yes thick thighs save lives, but a thick heart (in terms of cholesterol) might be the end of one’s so nurture that body.
                        Through this blog we will show various workout routine to tone various parts as we also venture into this journey ourselves. Food is paramount to our lives and that is why we will share easy recipes for that quick healthy treat.

                    </p>
                </div>

            </div>
            <div class="row">
                <div class="col s12">
                    <h4 class="center"> Fashion Tips </h4>
                    <div class="card" v-if="fashion">
                        <div class="card-content white-black">
                            <span class="card-title"> {{ fashion.title }}</span>
                             <carosel :object="fashion"></carosel>
                            <div class="black-text" style="white-space: pre-wrap;">
                                {{ fashion.body }}
                            </div>

                        </div>
                        <!-- Like, comment and picture button for the posts. -->

                    </div>

                </div>
                <div class="col s12">
                    <h4 class="center"> Fun Facts</h4>
                    <div class="card" v-if="fact">
                        <div class="card-content white-black">
                            <span class="card-title"> {{ fact.title }}</span>
                            <carosel :object="fact"></carosel>
                            <div class="black-text" style="white-space: pre-wrap;">
                                {{ fact.body }}
                            </div>

                        </div>
                        <!-- Like, comment and picture button for the posts. -->

                    </div>

                </div>

                <div class="col s12">
                    <h4 class="center"> Beauty</h4>
                    <div class="card" v-if="beauty">
                        <div class="card-content white-black">
                            <span class="card-title"> {{ beauty.title }}</span>
                             <carosel :object="beauty"></carosel>
                            <div class="black-text">
                                {{ beauty.body }}
                            </div>

                        </div>
                        <!-- Like, comment and picture button for the posts. -->

                    </div>
                </div>
            </div>
        </div>
        <div class="parallax-container">

            <div class="parallax" v-if="slider">
                <img :src="slider.images[0].url">
            </div>
        </div>

    </div>

</template>
<script>
    export default {
        name: 'Homepage',
        components: {  },
        data() {
            return {

            }
        },
        mounted() {
            this.$store.dispatch('load_all_sliders')
            this.$store.dispatch('load_all_facts')
            this.$store.dispatch('load_beauty_list')
            this.$store.dispatch('load_all_fashion')
        },
        computed: {
        slider() {
            return this.$store.getters.get_all_sliders[0];
        },
        fact() {
            return this.$store.getters.get_all_facts[0];
        },
        fashion() {
            return this.$store.getters.get_all_fashion[0];
        },
        beauty() {
            return this.$store.getters.get_beauty_list[0];
        }
        },
        methods: {
        
        }
    }
</script>
<style>
    p {
        white-space: pre-wrap;
    }

</style>