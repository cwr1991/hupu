<template>
    <!-- 头部 -->
    <header>
        <div class="logo">
            <img src="@/assets/img/logohupu.png">
            <i class="iconfont ">&#xe7c9;</i>
        </div>
        <nav :class="navTopFixed == true?'isFixed':''">
            <router-link to='/' tag="span">NBA</router-link>
            <router-link to='/cba' tag="span">CBA</router-link>
            <router-link to='/football' tag="span">足球</router-link>
            <router-link to='/game' tag="span">电竞</router-link>
            <router-link to='/community' tag="span">社区</router-link>
            <router-link to='/walkStreet' tag="span">步行街</router-link>
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
