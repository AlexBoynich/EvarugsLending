<template>
    <div class="slider-wrapper">
        <div class="arrow_left"><img src="/img/arrow.png"/></div>

        <swiper class="swiper container" :options="swiperOption">
            <swiper-slide
                v-for="(slide, index) in slides"
                :key="index"
            >
                <img :src="slide.link"/>
            </swiper-slide>
        </swiper>
        
        <div class="arrow_right"><img src="@/assets/arrow.png"/></div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'Slider',
        components: {
            Swiper,
            SwiperSlide
        },
        data: () => {
            return {
                slides: [
                    '/1.png',
                    '/2.png',
                    '/3.png',
                    '/4.png',
                    '/5.png',
                    '/6.png',
                ],
                data: [],
            }
        },  
        computed: {
            swiperOption() {
                return {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.arrow_right',
                        prevEl: '.arrow_left'
                    },
                    breakpoints: {
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1115: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .slider-wrapper {
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .swiper-button-prev {
        left: 20px
    }
    .swiper-button-next {
        right: 20px
    }
    .swiper-button-next  img {
        transform: rotate(180deg);
    }
    .swiper-button-prev, .swiper-button-next {
        width: 48px;
        height: 48px;
        background: transparent;
    }
    .swiper-button-prev:after, .swiper-button-next:after {
        content: none
    }
    .arrow_left, .arrow_right {
        cursor: pointer;
        border: none;
        background: transparent;
        width: 48px;
        height: 48px;
    }
    .arrow_right img {
        transform: rotate(180deg);
    }
    .swiper-slide img {
        width: 100%;
    }
</style>