<template>
    <header>
        <div class="header1" :class="navTopFixed == true?'isFixed':''">
            <span>电竞</span>
            <span>绝地求生</span>
            <span>王者荣耀</span>
            <span>英雄联盟</span>
            <span>社区</span>
        </div>
        <div class="header3">
            <span>首页<i class="iconfont">&#xe601;</i></span>
            <span>电竞<i class="iconfont">&#xe601;</i></span>
            
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
    .header1,.header3{
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
    .header1 span:first-child{
        border-bottom: 2px solid #e01b1b;
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
        padding: .1rem 0;

    }
    .header3 span:last-child{
        color:#444;
    }
</style>
