<template>
    <!-- 比赛信息 -->
    <div class="match">
        <vs-match :key="index" :data="match" v-for="(match,index) in data"></vs-match>
        <!-- <div class="match_item">
            <div class="tip">NBA</div>
            <div class="team">鹈鹕vs快船</div>
            <div class="result">121 - 117</div>
            <div class="status">已结束</div>
        </div>
        <div class="match_item">
            <div class="tip">NBA</div>
            <div class="team">开拓者vs国王</div>
            <div class="result">107 - 115</div>
            <div class="status">已结束</div>
        </div>
        <div class="match_item">
            <div class="tip">NBA</div>
            <div class="team">活塞vs爵士</div>
            <div class="result">94 - 100</div>
            <div class="status">已结束</div>
        </div> -->
    </div>
</template>

<script>
    import VsMatch from "./VsMatch"
    export default {
        name:"VsMatchList",
        props:{
            data:Array 
        },
        components:{
            VsMatch
        },
        mounted(){
           
        }
    }
</script>

<style scoped>

</style>
