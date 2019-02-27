<template>

    <div class="match_item">
        <div class="tip">{{data.tag}}</div>
        <div class="team">{{data.team}}</div>
        <div class="result">{{data.result}}</div>
        <div class="status">{{data.status}}</div>
    </div>

</template>
<script>
    export default {
        name:"VsMatch",
        props:{
            data:Object 
        },
        methods:{
            zzz(){
                console.log(this.data +"list2")
            }
            
        }
    }
</script>
<style>

</style>