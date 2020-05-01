<template>
    <div class = "signup">
        <h2>Registration Page</h2><br><br>
        <input type="email" id="email" v-model="email" placeholder="Enter your email"/><br><br>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" /><br><br>
        <button v-on:click="signup()">Register</button><br><br>
         <p>Already have an Account? Login or access your profile instead!</p>
        <button v-on:click="loginProfile()">Login or Access Profile</button><br><br>
        <p>or Return to our Home Page</p>
        <button v-on:click="jumpHome()">Home Page</button>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
export default {
    name: 'signup',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async signup(){
            let response = await ApiService.signup(this.email, this.password);
            this.$router.push('/profile');
        },
        async jumpHome(){
            this.$router.push('/');
        },
        
        async loginProfile(){
            this.$router.push('/profile');
        },
    }
}
</script>

<style scoped>
    h2 {
        margin: 0;
        padding: 0;
    }
    .signup {
        height: 100vh;
        width: 100%;
        background-image: url("../img/mountain.jpg");
        background-size: cover;
        background-position: center;
    }
</style>