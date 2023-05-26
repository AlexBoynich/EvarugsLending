<template>
    <div class="slider-wrapper">

        <swiper class="swiper" :options="swiperOption">
            <swiper-slide
                v-for="(slide, index) in slides"
                :key="index"
            >
            <div class="feedbackBlock">
                <div class="hexagon">
                    <div v-bind:class="[{shape1: index===0}, {shape2: index===1}, {shape3: index===2}]"></div>

                </div>
                <div class="feedbackSubBlock">
                    <p class="feedbackText">{{ slide.text }}</p>
                    <img src="/img/hr.png" alt="">
                    <p class="feedbackAuthor">{{slide.author}}</p>
                </div>
            </div>
            </swiper-slide>
        </swiper>
        
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
                    spaceBetween: 70,
                    slidesPerGroup: 1,
                    loop: true,
                    centeredSlides: true,
                    loopFillGroupWithBlank: true,
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