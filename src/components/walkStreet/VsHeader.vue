<template>
    <header>
        <div class="header1" :class="navTopFixed == true?'isFixed':''">
            <span>NBA</span>
            <span>CBA</span>
            <span>足球</span>
            <span>电竞</span>
            <span>社区</span>
            <span>步行街</span>
        </div>
        <div class="header2">
            <p>
                <span>首页<i class="iconfont">&#xe601;</i></span>
                <span>社区</span>
            </p>
            <p class="head"><i class="iconfont">&#xe7c9;</i></p>
        </div>
        <div class="header3">
            <div class="left">
                <span>步行街主干道</span>
                <span>+关注</span>
            </div>
            <div class="right">按发帖时间排序</div>
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
                var offsetTop=document.querySelector('.header3').offsetTop
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
    .header1,.header2,.header3{
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

    .header3{
        justify-content: space-between;
        background-color: #f3f3f3;
        padding: .15rem .1rem;
    }
    .left span:last-child{
        color: #e01b1b;
        border: 1px solid #e01b1b;
        padding: 0 .03rem;
        margin-left: .1rem;
    }
    .right{
        color: #005eac;
    }
</style>
