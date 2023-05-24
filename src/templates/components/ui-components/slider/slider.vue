<template>
    <div class="slider-wrapper">
        <div class="arrow_left"><img src="/img/arrow.png"/></div>

        <swiper class="swiper" :options="swiperOption">
            <swiper-slide
                v-for="(slide, index) in slides"
                :key="index"
            >
            <div class="feedbackBlock">
                <img :src='slide.link' class="feedbackImg d16"/>
                <p class="feedbackText">{{ slide.text }}</p>
                <hr>
                <p class="feedbackAuthor">{{slide.author}}</p>
            </div>
            </swiper-slide>
        </swiper>
        
        <div class="arrow_right"><img src="/img/arrow.png"/></div>
    </div>
</template>

<script>
    export default {
        name: 'Slider',
        data: () => {
            return {
                slides: [
                    {link: '/img/otz1.png', text: 'Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.', author: 'Вера К.'},
                    {link: '/img/otz2.jpg', text: 'Коврики супер!!! Качество на высшем уровне!!!Удачи и побольше заказов вам!!! Большое спасибо!', author: 'Константин В.'},
                    {link: '/img/otz3.jpg', text: 'Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.', author: 'Николай П.'},
                ],
                data: [],
            }
        },  
        computed: {
            swiperOption() {
                return {
                    slidesPerView: 3,
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
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped lang="sass">
// .slider-wrapper 
//     padding: 0 20px
//     display: flex
//     align-items: center
//     justify-content: space-between
    
// .swiper-button-prev 
//     left: 20px
    
// .swiper-button-next 
//     right: 20px
    
// .swiper-button-next 
//     img 
//         transform: rotate(180deg)
    
// .swiper-button-prev, .swiper-button-next 
//     width: 48px
//     height: 48px
//     background: transparent
    
// .swiper-button-prev:after, .swiper-button-next:after 
    
//     content: none
    
// .arrow_left, .arrow_right 
//     cursor: pointer
//     border: none
//     background: transparent
//     width: 48px
//     height: 48px
    
// .arrow_right 
//     img 
//         transform: rotate(180deg)
    
// .swiper-slide 
//     img 
//         width: 100%
</style>