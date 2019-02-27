<template>
    <div class="tagSmallBox">
        <p class="tag">{{data.tag}}</p>
        <p class="tiezi" v-if="data.tiezi">{{data.tiezi}}</p>
    </div>
</template>

<script>
export default {
    props:{
        data:Object
    }
}
</script>

<style scoped>
    .tagSmallBox{
        width: 33.33%;
        margin-bottom: .15rem;
    }
    .tag{
        font-size: .14rem;
        color: #005eac;
        margin-bottom: .03rem;
    }
    .tiezi{
        font-size: .12rem;
        color: #a9a9b2;
    }
</style>
