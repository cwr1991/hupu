<template>
     <li>
        <img :src="data.img">
        <div class="newsTitle">
            <span class="tag">{{data.tag}}</span>{{data.title}}
        </div>
    </li>
</template>
<script>
    export default {
        name:"VsNews",
        props:{
            data:Object 
        }
    }
</script>
<style>

</style>