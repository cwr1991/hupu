<template>
    <!-- 板块专区 -->
    <div class="area">
        <vs-area-brand1 :key="index" v-for="(n,index) in data.brandOne" :data="n"></vs-area-brand1>
        <vs-area-brand2 :key="i" v-for="(n,i) in data.brandTwo" :data="n"></vs-area-brand2>
    </div>
</template>

<script>
    import VsAreaBrand1 from "./VsAreaBrand1"
    import VsAreaBrand2 from "./VsAreaBrand2"

    export default {
        name:"VsArea",
        props:{
            data:Object
        },
        components:{
            VsAreaBrand1,
            VsAreaBrand2
        }
    }
</script>

<style scoped>
    .area{
        padding-top: .1rem;
        background: #f3f3f3;
    }
</style>
