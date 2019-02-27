<template>
    <header>
        <div class="header1" :class="navTopFixed == true?'isFixed':''">
            <span>NBA</span>
            <span>新闻</span>
            <span>比赛</span>
            <span>数据</span>
            <span>选秀</span>
            <span>社区</span>
        </div>
        <div class="header2">
            <p>
                <span>首页<i class="iconfont">&#xe601;</i></span>
                <span>社区<i class="iconfont">&#xe601;</i></span>
                <span>湿乎乎的话题</span>
            </p>
            <p class="head"><i class="iconfont">&#xe7c9;</i></p>
        </div>
        
    </header>
</template>

<script>
    export default {
        data(){
            return {
                navTopFixed :''
            }
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

<style scoped>
    .isFixed{
        position: fixed;
        top: 0;
        z-index: 99;
        width: 100%;
    }
    .header1,.header2{
        font-size: .14rem;
        display: -webkit-flex;
        padding:0 .1rem;
        box-sizing: border-box;
    }
    .header1{
        background: white;
        color: #e01b1b;
    }
    .header1 span{
        margin-right: .18rem;
        padding: .1rem 0;
    }
    .header1 span:last-child{
        border-bottom: 2px solid #e01b1b;
    }
    .header2{
        justify-content: space-between;
        background-color: #f3f3f3;
        border-bottom: 1px solid #e1e1e1;

    }
    .header2 .iconfont{
        color: #b9b4b4;
        font-size: .12rem;
        margin-left: .04rem;
    }
    .header2 .head .iconfont{
        color: #e01b1b;
        font-size: .22rem;
    }
    .header2 p{
        padding: .1rem 0;
    }
    .header2 p span{
        color: #e01b1b;
        margin-right: .1rem;
    }

   
</style>
