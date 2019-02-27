<template>
    <div>
        <vs-content-item :key="i" v-for="(n,i) in content[pages]" :data="n"></vs-content-item>
        <div class="page">
            <div class="homePage" @click="homePage">首页</div>
            <div class="lastPage" @click="backPage">上一页</div>
            <div class="pages">
                <span>{{currPage}}</span>/<span>{{totalPage}}</span>
            </div>
            <div class="nextPage" @click="addPage">下一页</div>
            <div class="footPage" @click="footPage">尾页</div>
        </div>
    </div>
    
</template>

<script>
import VsContentItem from "./VsContentItem"
export default {
    components:{
        VsContentItem
    },
    data(){
        return{
            pages:0,
            currPage:1,
            totalPage:3,
            content:[
                [
                    {
                        title :"很多人喜欢英雄无敌3，我也凑个热闹，说下我对于技能学习的一些看法，配图",
                        time:"刚刚",
                        author:"休斯屯航天民工",
                        dengpao:"50",
                        message:"123"
                    },
                    {
                        
                        title :"关于慢性咽炎有没有知道的jrs来解答几个问题？",
                        time:"刚刚",
                        author:"照明月",
                        dengpao:"20",
                        message:"153"
                    },
                    {
                        
                        title :"《不冷笑话》第1974期：看到一男的对女的动手动脚，我一脚就将那渣男踹翻了！",
                        time:"刚刚",
                        author:"BIKES",
                        dengpao:"80",
                        message:"52"
                    },
                    {
                        
                        title :"女生可以化妆让自己变得精神，男生有什么可以变得精神？",
                        time:"刚刚",
                        author:"周鑫驰",
                        dengpao:"50",
                        message:"254"
                    },
                    {
                        
                        title :"晒一下公司年会的大奖，街上什么水平",
                        time:"刚刚",
                        author:"冈布奥",
                        dengpao:"9",
                        message:"58"
                    },
                    {
                        
                        title :"理性讨论 月薪五千在成都能生活么？",
                        time:"刚刚",
                        author:"sarabald",
                        dengpao:"",
                        message:"165"
                    },
                    {
                        
                        title :"如果关羽不丢荆州，你认为隆中对能实现不？",
                        time:"刚刚",
                        author:"我火必胜66666",
                        dengpao:"89",
                        message:"321"
                    },
                    {
                        
                        title :"9012年我居然付了智商税，哎欲哭无泪。",
                        time:"刚刚",
                        author:"EdenGt",
                        dengpao:"",
                        message:"123"
                    },
                    {
                        
                        title :"这几天英国下议院为脱欧吵翻了天。 zt",
                        time:"刚刚",
                        author:"视频综合站",
                        dengpao:"18",
                        message:"83"
                    },
                    {
                        
                        title :"星爷，达叔，张敏这段小品什么水平",
                        time:"刚刚",
                        author:"一生紫金终身紫金",
                        dengpao:"18",
                        message:"90"
                    }
                ],
                [
                    {
                        title :"分享下近期你最满意的摄影作品吧",
                        time:"刚刚",
                        author:"SwangCat",
                        dengpao:"",
                        message:"15"
                    },
                    {
                        
                        title :"[新闻] 网友辱骂已故中国氢弹之父于敏被拘留15日",
                        time:"刚刚",
                        author:"三声六步传奇小郎君",
                        dengpao:"50",
                        message:"781"
                    },
                    {
                        
                        title :"明天要住江景房，现在晚上睡不着觉。。。需要注意点什么啊",
                        time:"刚刚",
                        author:"小小QUINN",
                        dengpao:"12",
                        message:"26"
                    },
                    {
                        
                        title :"想知道，我们的国民素质真的会越来越好么？",
                        time:"刚刚",
                        author:"红精灵温格",
                        dengpao:"",
                        message:"2"
                    },
                    {
                        
                        title :"聂远当年的杨过试妆照你们看过没？是黄晓明还是聂远更合适呢？ zt",
                        time:"刚刚",
                        author:"娱乐八卦阵",
                        dengpao:"50",
                        message:"311"
                    },
                    {
                        
                        title :"[电影主题曲]  席琳迪翁献唱《死侍2》主题曲《Ashes》，天后到底是天后！",
                        time:"刚刚",
                        author:"在座的男人都笑了",
                        dengpao:"87",
                        message:"174"
                    },
                    {
                        
                        title :"魔王给JRs派福利啦！蜘蛛侠同款AJ ONE奉上~",
                        time:"刚刚",
                        author:"在下萝莉控ii",
                        dengpao:"28",
                        message:"175"
                    },
                    {
                        
                        title :"厦门珠海海口三亚哪个适合定居？",
                        time:"刚刚",
                        author:"鉴黄大师",
                        dengpao:"25",
                        message:"62"
                    },
                    {
                        
                        title :"像我这样子的人回国会不会就业完蛋？",
                        time:"刚刚",
                        author:"彩色哥的妹妹",
                        dengpao:"",
                        message:"12"
                    },
                    {
                        
                        title :"airpods值得买么",
                        time:"刚刚",
                        author:"风和日丽714",
                        dengpao:"3",
                        message:""
                    }
                ],
                [
                    {
                        title :"老哥们，我这种情况二建证书该不该挂出去？",
                        time:"刚刚",
                        author:"若非当年",
                        dengpao:"",
                        message:"16"
                    },
                    {
                        
                        title :"莫西子诗的原版《要死就一定要死在你手里》什么水平？",
                        time:"刚刚",
                        author:"搞了个笑哦",
                        dengpao:"82",
                        message:"215"
                    },
                    {
                        
                        title :"这活还招人不？ zt",
                        time:"刚刚",
                        author:"视频综合站",
                        dengpao:"5",
                        message:""
                    },
                    {
                        
                        title :"金小妹KylieJenner最新ins图，带着闺蜜好友和女儿一起亮相！ zt",
                        time:"刚刚",
                        author:"美女图片精选",
                        dengpao:"",
                        message:"1"
                    },
                    {
                        
                        title :"周末了，你们穿的什么鞋",
                        time:"刚刚",
                        author:"melo张",
                        dengpao:"2",
                        message:"10"
                    },
                    {
                        
                        title :"终于轮到我了，我是做烧烤外卖的。加入虎扑1400多天，第一次发贴",
                        time:"刚刚",
                        author:"科比就是我的信仰",
                        dengpao:"20",
                        message:"30"
                    },
                    {
                        
                        title :"为什么现在在腾讯视频看个NBA直播这么困难",
                        time:"刚刚",
                        author:"我喜欢绿色",
                        dengpao:"",
                        message:"28"
                    },
                    {
                        
                        title :"奶茶，正在毁掉一代人！太可怕了 zt",
                        time:"刚刚",
                        author:"公众号好文精选",
                        dengpao:"27",
                        message:"145"
                    },
                    {
                        
                        title :"父母和杀人犯之间，可能只有一次情绪爆发的距离！ zt",
                        time:"刚刚",
                        author:"有趣话题搜罗",
                        dengpao:"",
                        message:""
                    },
                    {
                        
                        title :"各位JR，你们看过最感人的电影是什么？",
                        time:"刚刚",
                        author:"小_熊",
                        dengpao:"33",
                        message:"554"
                    }
                ],
            ]
        }
    },
    methods:{
        addPage(){
            this.currPage++
            this.pages++
            if(this.currPage>=this.totalPage){
                this.currPage=this.totalPage
                this.pages=this.currPage-1
            }
            window.scrollTo(0,0)
            
        },

        backPage(){
            this.currPage--
            this.pages--
            if(this.currPage<=1){
                this.currPage=1
                this.pages=this.currPage-1
            }
            window.scrollTo(0,0)
        },
        homePage(){
            this.currPage=1
            this.pages=this.currPage-1
        },
        footPage(){
            this.currPage=3
            this.pages=this.currPage-1
        }
    }
}
</script>

<style scoped>
    .page{
       display: -webkit-flex;
       justify-content: space-around;
       font-size: .14rem;
       padding: .15rem 0;
       background-color: #f3f3f3;
   }
   .page>div{
       width: .76rem;
       height: .4rem;
       line-height: .4rem;
       text-align: center;
       background: white;
       border: 1px solid #e3e3e3;
       margin-right: .1rem;
   }
   .page div:last-child{
       margin-right: 0;
   }
</style>
