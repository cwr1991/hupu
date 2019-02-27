<template>
    <div class="brand">
        <div class="brandTit">
            <h3>{{data.title}}</h3>
        </div>
        <vs-area-brand2-item :key="index" v-for="(item,index) in data.brandItem" :data="item"></vs-area-brand2-item>
       
        <div class="brandfoot">
            <span>{{data.more}}</span>
            <i class="iconfont">&#xe601;</i>
        </div>
    </div>
</template>
<script>
    import VsAreaBrand2Item from "./VsAreaBrand2Item";
    export default {
        name:"VsAreaBrand2",
        props:{
            data:Object
        },
        components:{
            VsAreaBrand2Item
        }
    }
</script>
<style>

</style>