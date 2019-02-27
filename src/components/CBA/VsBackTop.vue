<template>
    <div class="actGotop"><a href="javascript:;" title="返回顶部"></a></div>
</template>

<script>
import $ from "jquery"
export default {
    name:"VsBackTop",
    
    mounted(){
         $(function(){
             $(window).scroll(function() {      
                if($(window).scrollTop() >= 100){
                    $('.actGotop').fadeIn(300); 
                }else{    
                    $('.actGotop').fadeOut(300);    
                }  
            });
            $('.actGotop').click(function(){
                $('html,body').animate({
                    scrollTop: '0px'
                }, 800);
            })
         })
    }
        
       
   
}
</script>

<style scoped>

/* actGotop */

.actGotop{position:fixed;_position:absolute;bottom:100px;right:10px;width:75px;height:98px;display:none;}

.actGotop a,.actGotop a:link{width:75px;height:98px;display:inline-block;background:url(../../assets/img/blog7year_gotop.png) no-repeat center;background-size: 80% 80%;_background:url(../../assets/img/blog7year_gotopd.gif) no-repeat;outline:none;}

.actGotop a:hover{background:url(../../assets/img/blog7year_gotopd.gif) no-repeat center;background-size: 60% 60%;outline:none;}


</style>


