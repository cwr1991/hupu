<template>
    <div class="brandRow">
        <div class="brandRowTit">{{data.brandRowTitle}}</div>
        <div class="tagBigBox">
            <vs-brand-row-tag :key="i" v-for="(n,i) in data.brandRowTag" :data="n"></vs-brand-row-tag>
        </div>
    </div>
</template>

<script>
import VsBrandRowTag from "./VsBrandRowTag"
export default {
    props:{
        data:Object
    },
    components:{
        VsBrandRowTag
    }
}
</script>

<style scoped>
    
    .tagBigBox{
        padding-top: .1rem;
        display: -webkit-flex;
        flex-wrap: wrap;
    }
    .brandRowTit{
        font-size: .14rem;
        color: #a9a9b2;
        border-bottom: 1px solid#e1e1e1;
        padding-bottom:.06rem; 
    }
</style>
