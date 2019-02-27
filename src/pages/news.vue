<template>
    <div>
        <vs-header></vs-header>
        <vs-news-content :data="article"></vs-news-content>
        <vs-back-top></vs-back-top>
    </div>
</template>

<script>
import VsHeader from "../components/news/VsHeader"
import VsNewsContent from "../components/news/VsNewsContent"
import VsBackTop from "../components/CBA/VsBackTop"

export default {
    components:{
        VsHeader,
        VsBackTop,
        VsNewsContent
    },
    data(){
        return{
            article:{
                h3:"[流言板]科尔：考辛斯感觉良好，不计划让他在背靠背中轮休",
                time:"01-21 07:08",
                read:"92386",
                news: {
                        authorImg:"https://i1.hoopchina.com.cn/user/967/27686967/27686967_small_3.png",
                        author:"流浪的光",
                        newsImg:"https://c1.hoopchina.com.cn/uploads/star/event/images/190121/bmiddle-316a88254ee4387bebb9a6e328a019cadf9e0cf5.png?x-oss-process=image/resize,w_800/format,webp",
                        newsP:[
                            {p:"虎扑1月21日讯 今天，勇士主教练史蒂夫-科尔接受了记者的采访。"},
                            {p:"谈到德马库斯-考辛斯的情况，科尔说：“他说自己感觉很好。”"},
                            {p:"谈到是否会让考辛斯休战背靠背的比赛，科尔说：“现在还没这个打算。如果医疗组告诉我要这么做的话，我会的，但现在没这个打算。”"},
                            {p:"谈到考辛斯的犯规问题，科尔说：“我们计划让他每节初出场4分钟，如果有必要的话，也许在节末的时候也让他出场一些时间。”"},
                            {p:"谈到周二的计划，科尔说：“我们不会急于增加他的上场时间，这需要时间。”"}
                        ]
                },
                from:"虎扑",
                pointWord:[
                    {word:"史蒂夫-科尔"},
                    {word:"德马库斯-考辛斯"},
                    {word:"勇士"}
                ]
                
            }
        }
    }
    
}
</script>

<style>

</style>
