<template>
     <div class="brandItem">
        <p>{{data.news}}</p>
        <p>{{data.tag}}</p>
    </div>
</template>
<script>
    export default {
        name:"VsHotItem",
        props:{
            data:Object
        }
    }
</script>
<style scoped>
    .brandItem{
        padding: .15rem .15rem;
        border-bottom: 1px solid #e3e4e5;
        background: white;
    }
    .brandItem p:first-child{
        font-size: .18rem;
    }
    .brandItem p:last-child{
        font-size: .14rem;
        color: #999;
        margin-top: .1rem;
    }
</style>