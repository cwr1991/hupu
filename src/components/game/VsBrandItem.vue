<template>
    <section>
        <img :src="data.img">
        <div class="brandItem">
            <p>{{data.news}}</p>
            <p>{{data.tag}}</p>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        data:Object
    }
}
</script>

<style scoped>
    .brandItem p{
        font-size: .18rem;
    }
    .brandItem p:last-child{
        font-size: .14rem;
        text-align: right;
    }
    .brand section{
        padding: .15rem .15rem;
        display: -webkit-flex;
        border-bottom: 1px solid #e3e4e5;
        background:white;
    }
    .brand section .brandItem{
        padding: 0;
        border: 0;
    }
    .brand section img{
        width: .72rem;
        height: .72rem;
        margin-right: .15rem;
    }
</style>
