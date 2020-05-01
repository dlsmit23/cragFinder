<template>
    <div class='login'>
        <h2>Login Page</h2>
        <input type="email" id="email" v-model="email" placeholder="Enter your email"/><br><br>
        <input type="password" id="password" v-model="password" placeholder="Enter your password"/><br><br>
        <button v-on:click="login()">Login</button><br><br>
        <p>Not yet registed? SignUp instead!</p>
        <button v-on:click="registerPage()">SignUp</button><br><br>
        <p>or Return to our Home Page</p>
        <button v-on:click="jumpHome()">Home Page</button>
        
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async jumpHome(){
            this.$router.push('/');
        },
        async registerPage(){
            this.$router.push('/signup');
        
    },
    
        async login(){
            let response = await ApiService.login(this.email, this.password);
            let token = response.data.token;
            localStorage.setItem('rc-token', token);
            this.$router.push('/profile');
        }
    }
}
</script>

<style scoped>
   h2 {
        margin: 0;
        padding: 0;
    }
    .login {
        height: 100vh;
        width: 100%;
        background-image: url("../img/mountain.jpg");
        background-size: cover;
        background-position: center;
    }
</style>
