<template>
    <div class="contentItem">
        <div class="title">{{data.title}}</div>
        <div class="info">
            <div class="infoLeft">
                <span>{{data.time}}</span>
                <span>{{data.author}}</span>
            </div>
            <div class="infoRight">
                <span class="firstS" v-if="data.dengpao"><i class="iconfont dengpao">&#xe63b;</i>{{data.dengpao}}</span>
                <span v-if="data.message"><i class="iconfont">&#xe60b;</i> {{data.message}}</span>
            </div>
        </div>
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
    .contentItem{
        padding: .15rem .1rem;
        border-bottom: 1px solid #e1e1e1;
    }
    .title{
        font-size: .18rem;
        margin-bottom: .15rem;
    }
    .info{
        display: flex;
        justify-content: space-between;
        font-size: .14rem;
        color: #999;
        align-items: center;
    }
    .dengpao{
        font-size: .2rem;
    }
    .infoRight .firstS{
          margin-right: .08rem;
    }
</style>
