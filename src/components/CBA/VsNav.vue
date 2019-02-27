<template>
    <div class="nav">
        <div id="navTop" :class="navTopFixed == true?'isFixed':''">
            <span>CBA</span>
            <span>新闻</span>
            <span>社区</span>
        </div>
        <div class="navBot">
            <span>首页<i class="iconfont">&#xe601;</i></span>
            <span>CBA<i class="iconfont">&#xe601;</i></span>
            <span>新闻</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"VsNav",
        data(){
            return {navTopFixed :''}
        },
        methods:{
            handleScroll(){
                
                var scrollTop=document.documentElement.scrollTop || document.body.scrollTop
                var offsetTop=document.querySelector('.nav').offsetTop
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
    .nav span{
        margin-right: .15rem;
    }
    #navTop{
        background: white;
    }
    #navTop,.navBot{
        display: -webkit-flex;
        padding: .12rem;
        font-size: .12rem;
    }
    #navTop span{
        padding-bottom: .03rem;
        color: #e01b1b;
    }
    #navTop span:nth-child(1){
        color: black;
    }
    #navTop span:nth-child(2){
        border-bottom: 1px solid #e01b1b;
    }
    .navBot{
       background-color: #f3f3f3;
    }
    .navBot .iconfont{
        color: #b9b4b4;
        font-size: .12rem;
    }
    .navBot span:nth-child(1){
        color: #e01b1b;
    }
</style>
