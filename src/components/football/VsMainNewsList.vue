<template>
    <div>
        <vs-main-news :key="i" v-for="(n,i) in data" :data="n"></vs-main-news>
    </div>
    
</template>

<script>
import VsMainNews from "./VsMainNews"
export default {
    props:{
        data:Array
    },
    components:{
        VsMainNews
    }
}
</script>

<style>

</style>
