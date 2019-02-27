<template>
    <p>{{data.MainNewsTitle}}</p>
</template>

<script>
export default {
    props:{
        data:Object
    }
}
</script>

<style scoped>
    p{
        font-size: .18rem;
        padding: .16rem .12rem;
        border-bottom: 1px solid #e3e4e5;
        color: #444;
    }
</style>



