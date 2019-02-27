<template>
    <div class="brand">
        <div class="brandTit">
            <h3>{{data.brandTitle}}</h3>
        </div>

        <vs-hot-item :key="index" v-for="(item,index) in data.brandNews" :data="item"></vs-hot-item>
       
        <div class="brandfoot">
            更多<i class="iconfont">&#xe601;</i>
        </div>
    </div>
</template>
<script>
    import VsHotItem from "./VsHotItem";
    export default {
        name:"VsBrand",
        props:{
            data:Object
        },
        components:{
            VsHotItem
        }
    }
</script>
<style scoped>
    .brandTit h3{
        height: 18px;
        padding-left: 6px;
        font-weight: 100;
        line-height: 18px;
        border-left: 4px solid #c80c00;
        font-size: 16px;
        color: #999;
    }
    .brandTit{
        background: white;
       
        padding: .08rem .15rem;
        border-bottom: 1px solid #e3e4e5;
    }
    .brand{
        background-color: #f3f3f3;;
        padding: .1rem 0;
        margin-bottom: 0;
    }
    .brandfoot{
        display: -webkit-flex;
        justify-content: center;
        align-items: baseline;
        height: .4rem;
        line-height: .4rem;
        background: white;
        font-size: .14rem;
        padding: 0 .15rem;
        color: #005eac;
    }
    .brandfoot .iconfont{
        font-size: .12rem;
    }
</style>