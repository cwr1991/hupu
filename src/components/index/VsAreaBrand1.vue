<template>
    <div class="brand">
        <div class="brandTit">
            <h3>{{data.title}}</h3>
        </div>
        <vs-area-brand1-item :key="index" v-for="(item,index) in data.brandItem" :data="item"></vs-area-brand1-item>
        <div class="brandfoot">
            <span>{{data.more}}</span>
            <i class="iconfont">&#xe601;</i>
        </div>
    </div>
</template>
<script>
    import VsAreaBrand1Item from "./VsAreaBrand1Item";
    export default {
        name:"VsAreaBrand1",
        props:{
            data:Object
        },
        components:{
            VsAreaBrand1Item
        }
    }
</script>
<style>

</style>