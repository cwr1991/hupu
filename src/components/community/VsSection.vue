<template>
    <section>
        <vs-brand :key="i" v-for="(n,i) in data" :data="n"></vs-brand>
    </section>
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

<style scoped>
    section{
        background: #f3f3f3;
    }
</style>
