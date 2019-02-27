<template>
    <!-- 头部 -->
    <header>
        <div class="logo">
            <img src="@/assets/img/logohupu.png">
            <i class="iconfont ">&#xe7c9;</i>
        </div>
        <nav :class="navTopFixed == true?'isFixed':''">
            <span>NBA</span>
            <span>CBA</span>
            <span>足球</span>
            <span>电竞</span>
            <span>社区</span>
            <span>步行街</span>
        </nav>
    </header>
</template>

<script>
    export default {
        name:"VsHeader",
        data(){
            return {navTopFixed :''}
        },
        methods:{
            handleScroll(){
                
                var scrollTop=document.documentElement.scrollTop || document.body.scrollTop
                var offsetTop=document.querySelector('header').offsetTop
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
</style>
