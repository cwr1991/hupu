<template>
    <div>
        <vs-brand :key="index" v-for="(brand,index) in data" :data="brand"></vs-brand>
    </div>
</template>

<script>
import VsBrand from "./VsBrand"
export default {
    props:{
        data:Array
    },
    components:{
        VsBrand
    }
}
</script>

<style>

</style>
