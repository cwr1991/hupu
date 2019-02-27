<template>
    <div class="vsbrand">
        <div class="brandTitle" @click="hideOrShow"><i class="iconfont" :id="isShow==false?'rotate':''">&#xe601;</i>{{data.brandTitle}}</div>
        <vs-brand-row v-show="isShow" :key="i" v-for="(n,i) in data.brandRow" :data="n"></vs-brand-row>
    </div>
</template>

<script>
import VsBrandRow from "./VsBrandRow"
export default {
    props:{
        data:Object
    },
    data(){
        return{
            isShow:'true'
        }
    },
    components:{
        VsBrandRow
    },
    methods:{
        hideOrShow(){
            this.isShow=!this.isShow
        }
    }
}
</script>

<style scoped>
    .vsbrand{
        padding: .1rem;
        background: white;
        margin-bottom: .06rem;
        
    }
    .brandTitle{
        color: red;
        font-size: .14rem;
        margin-bottom: .1rem;
    }
    .brandTitle .iconfont{
        font-size: .1rem;
        color: #005eac;
        margin-right: .05rem;
        transform: rotate(135deg);
        transition: all 0.2s;
    }
    /* #rotate{
        font-size: .1rem;
        color: #005eac;
        margin-right: .05rem;
        transform: rotate(-135deg);
    } */
</style>
