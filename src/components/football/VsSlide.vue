<template>
    <!-- 轮播图 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box1">
                <h3>复盘尤文：尤文遭遇强力抵抗，一锤定音还得看C罗</h3>
            </div>
            <div class="swiper-slide box2">
                <h3>复盘中韩战：高位逼抢失灵，国足还需开垦进攻空间</h3>
            </div>
            <div class="swiper-slide box3">
                <h3>复盘皇马：上下半场一波三折，艰难赢球前路依然艰险 </h3>
            </div>
            <div class="swiper-slide box4">
                <h3>复盘曼联：期中考顺利过关，身后球冲击助索帅喜提六连胜</h3>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
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
    .box1{
        background: url("https://w2.hoopchina.com.cn/79/60/f4/7960f4892a1a479603baa795dcbf707d001.jpg")
    }
    .box2{
        background: url("https://w4.hoopchina.com.cn/9a/1d/4f/9a1d4f96c9b48c12e887896c2ae7b63d001.jpg")
    }
    .box3{
        background: url("https://w1.hoopchina.com.cn/fc/03/a8/fc03a885cdf66d1bc76ae5448b342606001.jpg")
    }
    .box4{
        background: url("https://w1.hoopchina.com.cn/22/36/76/2236767e578593a4a623c32f42de85da001.jpg")
    }
    .swiper-container {
        width: 100%;
        height: 160px;
    }
    .swiper-slide{
        background-size: cover;
        background-repeat: no-repeat;
    }
    .swiper-slide h3{
        font-size: .14rem;
        color: white;
        position: relative;
        top: 83%;
        left: 2%;
        width: 2.7rem;
        line-height: .29rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .swiper-pagination .swiper-pagination-bullet-active{
        background: red;
        opacity: 1;
    }
    .swiper-pagination{
        left: 86%;
    }
    .swiper-pagination span{
        background: white;
        opacity: 1;
    }
</style>
