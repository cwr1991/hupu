<template>
    <header>
        <div class="header1" :class="navTopFixed == true?'isFixed':''">
            <span>足球</span>
            <span>比赛</span>
            <span>新闻</span>
            <span>社区</span>
            <span>积分榜</span>
            <span>射手榜</span>
        </div>
        <div class="header2">
            <span>全部</span>
            <span>中国足球</span>
            <span>英超</span>
            <span>西甲</span>
            <span>德甲</span>
            <span>意甲</span>
            <span>欧冠</span>
            <span>法甲</span>
            
        </div>
        <div class="header3">
            <span>首页<i class="iconfont">&#xe601;</i></span>
            <span>足球<i class="iconfont">&#xe601;</i></span>
            <span>全部</span>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {navTopFixed :''}
    },
    methods:{
        handleScroll(){
            
            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop=document.querySelector('.header2').offsetTop
            console.log(scrollTop,offsetTop)
            if(scrollTop>offsetTop){
                    this.navTopFixed=true
            }else{
                    this.navTopFixed=false
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style>
    .isFixed{
        position: fixed;
        top: 0;
        z-index: 99;
        width: 100%;
    }
    .header1, .header2 , .header3{
        font-size: .14rem;
        display: -webkit-flex;
        padding: .1rem;
       
        box-sizing: border-box;
    }
    .header1{
        background: white;
        color: #e01b1b;
       
    }
    .header1 span{
        margin-right: .2rem;
    }
    .header2{
        background: #e11b1c;
        color: white;
        width: 100%;
        overflow-x: auto;
    }
    .header2 span{
        margin-right: .2rem;
        flex-shrink:0;
    }
    .header3{
       background-color: #f3f3f3;
    }
    .header3 .iconfont{
        color: #b9b4b4;
        font-size: .12rem;
        margin-left: .04rem;
    }
    .header3 span{
        color: #e01b1b;
        margin-right: .1rem;
    }
    .header3 span:last-child{
        color:black;
    }
</style>
