<template>
    <div>
        <header>
            <img src="https://passport.hupu.com/m/2/images/logo.png">
        </header>
		
		<form>
			<div class="text"><i class="iconfont">&#xe655;</i><input type="text" placeholder="登录名/手机号/邮箱"></div>
			<div class="password"><i class="iconfont">&#xe60c;</i><input type="text" placeholder="密码"></div>
			<div class="btn">
				<input type="button" value="注册"/>
				<input type="button" value="登录"/>
			</div>
		</form>
		
		<div class="thirdLogin">
            <span></span>
            <div class="loginBox">
                <div class="qq"></div>
                <p>QQ登录</p>
            </div>
            <span></span>
            <div class="loginBox">
                <div class="phone"></div>
                <p>手机登录</p>
            </div>
            <span></span>
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
}
header img{
	width: .82rem;
	height: .2rem;
}
form{
	padding:.25rem;
}
form .iconfont{
	font-size: .2rem;
	line-height: .32rem;
	margin-right:.1rem ;
}
form input{
	border: 0;
}
.password,.text,.btn{
	display: flex;
	justify-content: center;
	margin-bottom: .2rem;
}
.text>input,.password>input{
	width: 2.56rem;
	border-bottom: 1px solid #e1e1e1;
}
.btn input{
	width: .75rem;
	height: .34rem;
	line-height: .34rem;
	text-align: center;
	border-radius: .16rem;
	font-size: .16rem;
}
.btn input:first-child{
	color: #999;
	background-color: #fff;
	border: 1px solid #b7b7b7;
	margin-right: .3rem;
}
.btn input:last-child{
	background-color: #d8544c;
	color: white;
}


.thirdLogin{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: .3rem;
}
.thirdLogin span{
	width: .7rem;
	height:1px;
	background-color: #e1e1e1;;
}
.loginBox{
	padding: .16rem .08rem 0;
	text-align: center;
}
.loginBox p{
	font-size: .14rem;
	color: #999;
}
.qq,.phone{
	width: .54rem;
	height: .54rem;
	margin-bottom: .1rem;
	border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
}
.qq{
	background-color: #73c5ff;
	background-size: 16px 18px;
    background-image: url(https://w1.hoopchina.com.cn/passport/m/2/images/qq.png);
}
.phone{
	background-color: #48d58e;
    background-image: url(https://w1.hoopchina.com.cn/passport/m/2/images/icon-phone-new.png);
    background-size: 12px 18px;
    
    
}
</style>
