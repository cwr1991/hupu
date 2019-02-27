<template>
    <div>
        <vs-header></vs-header>
        <vs-slide></vs-slide>
        <vs-match-list :data="indexInfo.matchList"></vs-match-list>
        <vs-news-list :data="indexInfo.newsList"></vs-news-list>
        <vs-area :data="indexInfo.area"></vs-area>
        <vs-footer></vs-footer>
        <vs-back-top></vs-back-top>
    </div>
</template>

<script>
    import VsHeader from "../components/index/VsHeader"
    import VsSlide from "../components/index/VsSlide"
    import VsMatchList from "../components/index/VsMatchList"
    import VsNewsList from "../components/index/VsNewsList"
    import VsArea from "../components/index/VsArea"
    import VsFooter from "../components/index/VsFooter"
    import VsBackTop from "../components/CBA/VsBackTop"

    import indexApis from "../apis/indexApis"

    export default {
        name:"index",
        data(){
            return{
                indexInfo:{}
            }
        },

        components: {
            VsHeader,
            VsSlide,
            VsMatchList,
            VsNewsList,
            VsArea,
            VsFooter,
            VsBackTop
        },
        beforeCreate(){
            indexApis.getIndexData(data=>{
                this.indexInfo=data;
            })
        },
        watch:{
            indexInfo:{
                handler(n,o){
                    //console.log(n)
                },
                deep:true
            }
        },
        methods:{
            // 初始化页面
            _initData(){
                indexApis.getIndexData(data=>{
                    console.log(data)
                    this.indexInfo=data;
                })
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../assets/css/index.css";
</style>
