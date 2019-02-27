<template>
    <article>
        <h3>{{data.h3}}</h3>
        <div class="publish">
            <div class="time">{{data.time}} 阅读 {{data.read}}</div>
            <div class="louzhu">只看楼主</div>
        </div>
        <div class="news">
            <div class="headPic">
                <img :src="data.news.authorImg"/>
                <span>{{data.news.author}}</span>
            </div>
            <div class="newsContent">
                <img :src="data.news.newsImg">
                <p :key="i" v-for="(n,i) in data.news.newsP">{{n.p}}</p>
            </div>
            <div class="foot">
                <p>来源：<span>{{data.from}}</span></p>
                <p>相关链接：<span :key="i" v-for="(n,i) in data.pointWord">{{n.word}}&nbsp;</span></p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props:{
        data:Object
    }
}
</script>

<style scoped>
    article h3{
        font-size: .2rem;
        
    }
    article{
        padding: .15rem;    
    }
    .publish{
        font-size: .14rem;
        margin: .1rem 0;
        display: -webkit-flex;
        justify-content: space-between;
    }
    .publish .time{
        color: #999;
    }
    .publish .louzhu{
        color: #005eac;
    }

    .headPic{
        display: flex;
        align-items: center;
        font-size: .14rem;
    }
    .headPic img{
        width: .45rem;
        height: .45rem;
        border-radius: 50%;
        margin-right: .1rem;
    }
    .newsContent img{
        width: 100%;
        margin-top: .1rem;
    }
    .newsContent p{
        font-size: .18rem;
        padding: .1rem 0;
    }
    .foot{
        padding: .2rem 0;
        font-size: .18rem;
    }
    .foot span{
        color: #005eac
    }
</style>
