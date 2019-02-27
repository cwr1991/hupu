<template>
    <div>
        <vs-header></vs-header>
        <vs-slide></vs-slide>
        <vs-main-news-list :data="News.MainNews"></vs-main-news-list>
        <vs-hot :data="News.brand[0]"></vs-hot>
        <vs-near-news-list :data="News.brand[1]"></vs-near-news-list>
        <vs-footer></vs-footer>
        <vs-back-top></vs-back-top>
    </div>
    
</template>

<script>
import VsHeader from "../components/football/VsHeader"
import VsFooter from "../components/index/VsFooter"
import VsSlide from "../components/football/VsSlide"
import VsMainNewsList from "../components/football/VsMainNewsList"
import VsHot from "../components/football/VsHot"
import VsNearNewsList from "../components/football/VsNearNewsList"
import VsBackTop from "../components/CBA/VsBackTop"

export default {
    components:{
        VsHeader,
        VsFooter,
        VsSlide,
        VsMainNewsList,
        VsHot,
        VsNearNewsList,
        VsBackTop
    },

    data(){
        return{
            News:{
                MainNews:[
                    {MainNewsTitle:"孙兴慜造两球，中国0-2韩国"},
                    {MainNewsTitle:"皇马3-1晋级国王杯8强"},
                    {MainNewsTitle:"C罗制胜，尤文1-0米兰夺意超杯"},
                    {MainNewsTitle:"马竞两回合4-4遭吉罗纳淘汰"},
                    {MainNewsTitle:"尤文史上第8次夺意超杯冠军"},
                    {MainNewsTitle:"C罗：很高兴赢下在尤文第一冠"},
                    {MainNewsTitle:"传曼联可能冬窗放走费莱尼"},
                    {MainNewsTitle:"曝切尔西租借伊瓜因与尤文谈妥"},
                    {MainNewsTitle:"毕包小威廉再现半场飙车"},
                    {MainNewsTitle:"视频：德赫亚化身叹息墙"},
                    {MainNewsTitle:"实战：如何为队友传出舒服的球"},
                    {MainNewsTitle:"李康仁：最年轻西甲登场外援"}
                ],
                brand:[
                    {
                        brandTitle:"社区热点",
                        brandNews:[
                            {
                                news:"国家队后卫这腹肌什么水平？",
                                tag:"足球话题区"
                            },
                            {
                                news:"再见切赫：二十载荣耀告一段落 “坦克兵”终卸下战盔",
                                tag:"足球话题区"
                            },
                            {
                                news:"FIFA19这操作，这波颠球真的是秀出天际?",
                                tag:"足球话题区"
                            },
                            {
                                news:"赛后孙兴慜来到看台边与球迷合影，真的好亲民",
                                tag:"足球话题区"
                            },
                            {
                                news:"深情，昔日队友亨利与维埃拉一同走进球场，这次是教练席",
                                tag:"足球话题区"
                            },
                            {
                                news:"现役球员中，跑位意识最强的是谁？",
                                tag:"足球话题区"
                            },
                            {
                                news:"富力新援穆萨-登贝莱集锦：闲庭信步过中场，真英超第一盘过帝",
                                tag:"足球话题区"
                            },
                            {
                                news:"[韩语传声筒]实力风度的完胜，本托无能到最后才换孙兴慜",
                                tag:"足球话题区"
                            },
                            {
                                news:"[流言板]RAC1名记 ：巴尔韦德已告知马尔科姆，他可以1月离队",
                                tag:"巴萨专区"
                            },
                            {
                                news:"郑智已经跟不上这种比赛的节奏了",
                                tag:"中国足球"
                            }
                        ]
                    },
                    {
                        brandTitle:"最新新闻",
                        brandNews:[
                            {
                                news:"特立独行贝尔萨，上任拉齐奥仅两天就曾闪电辞职",
                                img:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-fc7e101d682f43030b10ddfc5e639a329f437138.jpg"
                            },
                            {
                                news:"泰国主帅：相比于各方面都强的韩国，对阵中国是好事",
                                img:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-88042531443f881efe93512596709bb10aadb2e1.jpg"
                            },
                            {
                                news:"孙兴慜：中国是强队运气没站在他们那，我们配得上三分",
                                img:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-299db621f60a2360a14ed6a7797aea91387744d1.png"
                            },
                            {
                                news:"镜报：富勒姆盼租借德林克沃特，同时要把门萨送回曼联",
                                img:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-815179867c6a66a77c8bbf4bc863408eaa3f2f57.jpg"
                            },
                            {
                                news:"官方：热刺中场穆萨-登贝莱加盟广州富力，签约3年",
                                img:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-22f1dd03b84e62f4765cc7013e1b24ad50d86ab6.jpg"
                            },
                            {
                                news:"德国女教练回怼记者：我很职业，是根据XX尺寸挑球员的",
                                img:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-559e249eef94c99fa08a3cbe29a6bca96b47a34e.jpg"
                            },
                            {
                                news:"柯洁：看了亚洲杯中韩战很生气，足球不行围棋一定要行",
                                img:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-f10276237f7cfb8f5942b1e0e83413f0b2c6becf.png"
                            },
                            {
                                news:"德媒：巴黎对魏格尔心心念念，同时发力招揽盖伊",
                                img:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-20c5eff34cc4ca19399138445f9d7103002a1d21.png"
                            },
                            {
                                news:"NBA第一高人造访铁锤帮，小豌豆愈显娇小",
                                img:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-138b55a6dd4e9d12e6d977b11e6d7d7110ffcba6.png"
                            },
                            {
                                news:"跟队记者：切尔西还在考虑是否要在冬窗补进一位中场",
                                img:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/thumbnail-31a490d16002445c08204781f7e7e656a0b40853.jpg"
                            }
                        ]
                    }
                ]
                
            }
        }
    }

}
</script>

<style scoped>

</style>
