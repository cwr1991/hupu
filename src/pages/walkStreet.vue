<template>
    <div>
        <vs-header></vs-header>
        <vs-content></vs-content>
        <vs-footer></vs-footer>
        <vs-back-top></vs-back-top>
    </div>
</template>

<script>
import VsHeader from "../components/walkStreet/VsHeader"
import VsFooter from "../components/index/VsFooter"
import VsContent from "../components/walkStreet/VsContent"
import VsBackTop from "../components/CBA/VsBackTop"
export default {
    components:{
        VsHeader,
        VsFooter,
        VsContent,
        VsBackTop
    }
    
}
</script>

<style>

</style>
