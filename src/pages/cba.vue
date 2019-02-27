<template>
     <div>
         <vs-header></vs-header>
         <vs-nav></vs-nav>
         <vs-content></vs-content>
         <vs-footer></vs-footer>
         <vs-back-top></vs-back-top>
     </div>
</template>
<script>
    import VsHeader from "../components/CBA/VsHeader"
    import VsFooter from "../components/CBA/VsFooter"
    import VsNav from "../components/CBA/VsNav"
    import VsContent from "../components/CBA/VsContent"
    import VsBackTop from "../components/CBA/VsBackTop"
    export default {
      name:"CBA",
      components:{
          VsHeader,
          VsFooter,
          VsNav,
          VsContent,
          VsBackTop
      }
    }
</script>
<style scoped>

</style>