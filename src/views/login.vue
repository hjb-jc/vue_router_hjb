<template>
	<div class="login">
		<h3>这是一个登陆页面</h3>
		用户名：<input type="text" v-model="username" /><br/>
		密码：<input type="text" v-model="pwd"  /><br/>
		<input type="submit" value="login" />
		<br/>
		<router-link to="/reg">点击进入注册页面</router-link>
	</div>
	
</template>

<script>
	export default {
		data(){
			return{
				username:'',
				pwd:''
			}
		},
		name:'login',
		components:{
			//About
		}
	}
</script>

<style>
	.login{
		margin: 1em;
		padding: 1em;
		border-color: yellow;
	}
</style>