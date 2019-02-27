<template>
    <!-- 新闻列表 -->
    <ul class="newsList">
        <vs-news :key="index" :data="news" v-for="(news,index) in data"></vs-news>
        <!-- <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547366710_s_4374_o_w__h__50318.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">NBA</span>欧文和海沃德发生口角，随后友好击掌
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547366710_s_3062_o_w__h__21818.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">NBA</span>威少：施罗德没让任何人失望，投丢投篮是比赛一部分
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547366710_s_3843_o_w__h__95338.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">NBA</span>Shams：巴里亚接受核磁共振检查，遭遇右跟腱撕裂
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547366710_s_3408_o_w__h__8790.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">NBA</span>科比带着二女儿来到现场观看俄勒冈大学女篮比赛
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547116564_s_4660_o_w__h__46466.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">英雄联盟</span>ahq.Westdoor个人脸书宣布退役
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547116564_s_3452_o_w__h__10098.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">英雄联盟</span>设计师：将增强鳄鱼、皇子等英雄
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547366710_s_4657_o_w__h__83138.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">国际足球</span>奥巴梅扬科斯切尔尼进球被吹，阿森纳客场0-1西汉姆联
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547366710_s_2988_o_w__h__72379.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">CBA</span>星锐赛：CBA星锐88-90大学生联队
            </div>
        </li>
        <li>
            <img src="https://i1.hoopchina.com.cn/touch/63/31813283232063/touch_home_31813283232063_1547366710_s_4075_o_w__h__76995.jpeg@.webp">
            <div class="newsTitle">
                <span class="tag">CBA</span>姚明：周琦没有预注册，本赛季不能打CBA
            </div>
        </li> -->
    </ul>
</template>

<script>
    import VsNews from "./VsNews"
    export default {
        name:"VsNewsList",
        props:{
            data:Array 
        },
        components:{
            VsNews
        },
    }
</script>

<style scoped>

</style>
