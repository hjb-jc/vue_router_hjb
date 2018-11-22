<template>
	<div name="reg">
		<h3>这是一个注册页面</h3>
		用户名：<input type="text" v-model="username" /><br/>
		密码：<input type="text" v-model="pwd"  /><br/>
		<input type="submit" value="reg" />
		<h4>
			<router-link to="/">点击进入登陆页面</router-link>
		</h4>
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
		name:'reg',
		components:{
			
		}
	}
</script>

<style>
	.reg{
		margin: 1em;
		padding: 1em;
		border-color: yellow;
	}
	input{
		margin-bottom: auto;
		padding-bottom: 10px;
	}
</style>