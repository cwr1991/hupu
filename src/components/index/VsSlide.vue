<template>
    <!-- 轮播图 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box1">
                <h3>猛龙能说服伦纳德留在多伦多吗？</h3>
            </div>
            <div class="swiper-slide box2">
                <h3>主教练与管理层：鱼与熊掌不可兼得</h3>
            </div>
            <div class="swiper-slide box3">
                <h3>雷霆将在3月21日退役尼克-科里森的4号球衣</h3>
            </div>
            <div class="swiper-slide box4">
                <h3>萨拉赫点球破门，利物浦客场1-0赛季双杀布莱顿</h3>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import "@/assets/css/index.css";
import Swiper from 'swiper'
import "../../../static/bower_components/swiper/dist/js/swiper.js"
import "../../../static/bower_components/swiper/dist/css/swiper.css"
    export default {
        mounted(){
            var mySwiper =new Swiper ('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                //播放速度
                autoplay: true,

                // 自动播放时间
                // 播放的速度
                speed:500,
                
                // 如果需要分页器，即下面的小圆点
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                    color:'white'
                },
        　　　　// 这样，即使我们滑动之后， 定时器也不会被清除
        　　　　autoplayDisableOnInteraction : false,   

            })
        }
    }
</script>

<style scoped>

</style>
