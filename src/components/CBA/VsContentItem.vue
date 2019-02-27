<template>
        <div class="news">
            <div class="imgs" :style="{backgroundImage:'url('+data.imgurl+')'}"></div>
            <div class="newsRight">
                <h3>{{data.title}}</h3>
                <p>
                    <span>{{data.span1}}</span>
                    <span>{{data.span2}}</span>                
                </p>
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
    .news{
        display: -webkit-flex;
        padding: .1rem;
        border-bottom: 1px solid #e3e4e5
    }
    .news .imgs{
        width: .72rem;
        height: .72rem;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        
    }
    .newsRight{
        margin-left: .1rem;
        width: 75%;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .newsRight h3{
        font-size: .16rem;
        font-weight: 100;
      
    }
    .newsRight p{
        font-size: .12rem;
    }
    .newsRight p span{
        margin-right: .08rem;
        color: #999;
    }
</style>
