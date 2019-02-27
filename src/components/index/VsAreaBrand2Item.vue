<template>
     <section>
        <img :src="data.brandImg">
        <div class="brandItem">
            <p>{{data.brandNews}}</p>
            <p>{{data.brandTag}}</p>
        </div>
    </section>
</template>
<script>
    export default {
        name:"VsAreaBrand2Item",
        props:{
            data:Object
        }
    }
</script>
<style>

</style>