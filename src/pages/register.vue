<template>
<div>
    <header>手机注册</header>

    <form>
        <label></label><input type="text" placeholder="请输入大陆地区的手机号">
        <p>我已经阅读并同意<span>虎扑用户协议（含隐私政策）</span>，系统将同步为您创建虎扑帐号</p>
        <div><button>注册</button></div>
    </form>
    <div class="info">
        <p>温馨提示：</p>
        <p>帐号注册成功后，您可以方便使用</p>
        <p>虎扑网、手机虎扑网、虎扑App、识货等服务。</p>
    </div>
</div>

    
</template>

<script>
export default {

}
</script>

<style scoped>
    header{
        display: -webkit-flex;
        justify-content: center;
        height: .4rem;
        align-items: center;
        background: #f4f4f4;
        font-size: .16rem;
    }
    form{
        padding:.25rem;
        font-size: .16rem;
       
    }
    form input{
        border: 0;
        outline: none;
        width: 2.56rem;
        border-bottom: 1px solid #e1e1e1;
        font-size: .16rem;
        color: #e1e1e1;
        padding-bottom: .05rem;
        margin-bottom: .1rem;
    }
    form label{
        display: inline-block;
        width:.24rem;
        height: .28rem;
        background: url(https://w1.hoopchina.com.cn/passport/m/2/images/icon-phone.png) 2px 10px no-repeat;
        background-size: 12px 18px;
    }
    form p{
        font-size: .14rem;
        color: #999;
    }
    form p span{
        color: #0c80ff;
    }
    form div{
        text-align: center;
    }
    form button{
        background: #b2b2b2;
        color: white;
        width: 1.23rem;
        height: .32rem;
        line-height: .32rem;
        text-align: center;
        border-radius: .3rem;
        border: 0;
        margin: .2rem 0;
    }

    .info{
        padding:0 .25rem;
        font-size: .14rem;
        color: #666;
    }
    .info p:first-child{
        color: red;
        margin-bottom: .1rem;
    }
</style>
