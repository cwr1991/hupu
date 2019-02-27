<template>
    <div class="brand">
        <div class="brandTit">
            <h3>{{data.brandTit}}</h3>
        </div>
        <vs-brand-item :key="index" v-for="(item,index) in data.brandItem" :data="item"></vs-brand-item>
       
        <div class="brandfoot">
            {{data.brandFoot}}<i class="iconfont">&#xe601;</i>
        </div>
    </div>
</template>

<script>
import VsBrandItem from "./VsBrandItem";
export default {
    props:{
        data:Object
    },
    components:{
        VsBrandItem
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
        padding: 0;
        padding-bottom: .15rem;
        margin-bottom: 0;
    }
    .brandfoot{
        display: -webkit-flex;
        justify-content: space-between;
        align-items: baseline;
        height: .4rem;
        line-height: .4rem;
        background: white;
        font-size: .18rem;
        padding: 0 .15rem;
        color: #c80c00;
    }
    .brandfoot .iconfont{
        font-size: .12rem;
    }
</style>
