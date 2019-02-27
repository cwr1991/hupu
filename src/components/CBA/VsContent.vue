<template>
    <article>
        <vs-content-item :key="i" v-for="(n,i) in contents[pages]" :data="n"></vs-content-item>
        <div class="page">
            <div class="homePage" @click="homePage">首页</div>
            <div class="lastPage" @click="backPage">上一页</div>
            <div class="pages">
                <span>{{currPage}}</span>/<span>{{totalPage}}</span>
            </div>
            <div class="nextPage" @click="addPage">下一页</div>
            <div class="footPage" @click="footPage">尾页</div>
        </div>
    </article>
</template>

<script>
   import VsContentItem from "./VsContentItem"                                     
    export default {
        components:{
            VsContentItem
        },
       
        data(){
            return {
                pages:0,
                currPage:1,
                totalPage:3,
                contents:[
                    [
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/441757098abe3410e8b01856cc195612d2586c44.jpg@.webp",
                            title :"胡安：广州管理层出色，4天新援到位在CBA罕见",
                            span1:"虎扑CBA",
                            span2:"55分钟前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190116/290b984919d0137ec6118964c6bab3e6da429901.jpg@.webp",
                            title :"男神齐现身！阿不都回应书豪：十年前盼站在职业赛场",
                            span1:"虎扑CBA",
                            span2:"9 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190116/8e57f12012afeb82ee034d5638b207ccdac104b6.jpg@.webp",
                            title :"王治郅：面对强敌广厦，我们出现太多失误",
                            span1:"虎扑CBA",
                            span2:"9 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190116/5f5e6942624b11706de08a5e02d69430f9871b8c.jpg@.webp",
                            title :"李春江：要继续保持赢球的势头",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190116/ecba9739e79557e265da9b5cace28bb006824ae5.jpg@.webp",
                            title :"丘天谈关键隔扣2+1：主要还是球传得好",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190116/a03de583f7b90d2bf5595536344673a678dec7d9.jpg@.webp",
                            title :"早日康复！赵继伟再度晒出训练照",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190116/815f9571359a90eb529ee43506809cba67eadf50.jpg@.webp",
                            title :"广州单场34次助攻创球队历史新高",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190116/7e43f4a981893287d88c39401879afc19d613a5e.jpg@.webp",
                            title :"雅尼斯：靠不停地分享球赢得比赛",
                            span1:"虎扑CBA",
                            span2:"11 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190116/6d45e06504fd8a4fcb6c7ea54fd9b8d8ba8a4345.jpg@.webp",
                            title :"浙江外援得40分后艾特韦德：看看你错过了什么",
                            span1:"虎扑CBA",
                            span2:"13 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190116/d014e2ebd38001ff06fe4b463b0f9c553a402e69.jpg@.webp",
                            title :"莫泰：为什么我的中文名字是“建军”",
                            span1:"虎扑CBA",
                            span2:"15 小时前"
                        }
                    ],
                    [
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190118/0c9fe0eead9848d937c8a1ae777915a55f2d986a.jpg@.webp",
                            title :"再迎里程碑！易建联CBA生涯出场数达500场",
                            span1:"虎扑CBA",
                            span2:"55分钟前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190118/6d9c5466d223482da9bb72dadf4b58a36c483231.jpg@.webp",
                            title :"孙梦然：喜欢邓肯、加索尔，希望在世军会取得好成绩",
                            span1:"虎扑CBA",
                            span2:"9 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190118/f5867d98e85be29eede9a5082e8537636dae743b.jpg@.webp",
                            title :"雅尼斯：广厦善于抓失误，我们需110%专注",
                            span1:"虎扑CBA",
                            span2:"9 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190118/f6046cfe4ec9c519a811b7017b6b9edbc0fbfcc5.jpg@.webp",
                            title :"胡金秋：北京队很强，我们争取拿下比赛",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190118/a766f729b384b53da727981adc44e06df0d82594.jpg@.webp",
                            title :"李春江：伤病情况基本没有，球队状态还算不错",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190118/a826aaf27a249e9ca08fca8e4607c7fbcebf9da0.jpg@.webp",
                            title :"董瀚麟晒恢复片段：生活很苦，进步很甜",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190118/e35f05544a7057de8260fe77f1a2564b22ed93c3.jpg@.webp",
                            title :"重情义！同曦队发文祝福旧将蔡李龙",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190118/c1ca5a8853657e9c2b1463a2c030a7441e726a5f.jpg@.webp",
                            title :"吉林队前锋蔡李龙因心脏问题选择退役",
                            span1:"虎扑CBA",
                            span2:"11 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190118/5ed692fc9a8a3998ba884197ca4ec203501d3902.jpg@.webp",
                            title :"[老李选领带]最近感觉就是客场客场客场",
                            span1:"虎扑CBA",
                            span2:"13 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190118/f810ccf5cac570637d906cedbac8f7e4947d1f4e.jpg@.webp",
                            title :"陈林坚违体犯规累计已达4次将被停赛一场",
                            span1:"虎扑CBA",
                            span2:"15 小时前"
                        }
                    ],
                    [
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/cc768fbba74596ccd1fd667226b3041686bc0b6f.jpg@.webp",
                            title :"韩德君晒与潘长江合影：再这么加时下去，我就换人",
                            span1:"虎扑CBA",
                            span2:"55分钟前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/7ddd74ddaf3735ba26f50934e580018299593722.jpg@.webp",
                            title :"郭艾伦：只有打好今天的比赛才是对姥姥最好的祭奠",
                            span1:"虎扑CBA",
                            span2:"9 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/0408eef8271028ea43fcd47760f4aca1b2a16936.jpg@.webp",
                            title :"北控队签下里卡多-莱多，替换皮埃尔-杰克逊",
                            span1:"虎扑CBA",
                            span2:"9 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/a0d740ec82188658ee95029fb9b3da600e10566b.jpg@.webp",
                            title :"贝帅：给队员最大褒奖，比赛开始就已做好赢球准备",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/235d72c2f29faf044f9e54a42d82f4f8b78fdcbc.jpg@.webp",
                            title :"横空出世！姜伟泽连续两场砍下20+，生涯首次",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c1.hoopchina.com.cn/uploads/star/event/images/190117/26442d30eb49372bf427e3c1c177713ae5974381.jpg@.webp",
                            title :"刘志轩：真不容易，在下面看着真的很着急",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/496c53cb4b80bc8110f5e636f4f9dabffb86f2ee.jpg@.webp",
                            title :"郭士强：郭艾伦进步了",
                            span1:"虎扑CBA",
                            span2:"10 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/9a02acc001877e48de41d8d079cd61d08d021771.jpg@.webp",
                            title :"总冠军中锋！韩德君19投16中砍下赛季新高37分",
                            span1:"虎扑CBA",
                            span2:"11 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/66d2d44d5b43df57467bd851aae5bb951a94fb22.jpg@.webp",
                            title :"竭尽全力！崔晋铭、代怀博双双砍下赛季最高分",
                            span1:"虎扑CBA",
                            span2:"13 小时前"
                        },
                        {
                            imgurl:"https://c2.hoopchina.com.cn/uploads/star/event/images/190117/fb45aa3ace5fff15f6198801edf33dffefe3f490.jpg@.webp",
                            title :"神仙打架！吉辽战送出本赛季首个三加时",
                            span1:"虎扑CBA",
                            span2:"15 小时前"
                        }
                    ]     
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
