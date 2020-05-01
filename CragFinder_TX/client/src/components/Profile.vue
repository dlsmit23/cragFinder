<template>
    <div class = 'profile'>
        <h2>Profile Page</h2>
        <p>Email: {{email}}</p>
        <label>Climb Rating: </label> <!-- setting the option to select and change climb rating-->
         <select v-model="climbRating" name="climb-rating" @change="change">
            <option value="0">(not rated)</option>
            <option value="1">VB - V3</option>
            <option value="2">V4 - V6</option>
            <option value="3">V7 - V9</option>
            <option value="4">V10+</option>
        </select><br><br>
         <label>Desired Location: </label> <!-- setting the option to select and change desired location-->
         <select v-model="location" name="location" @change="change">
            <option value="0">(no preference)</option>
            <option value="1">Hueco Tanks - El Paso</option>
            <option value="2">Enchanted Rock - Fredericksburg</option>
            <option value="3">Reimers Ranch - Dripping Springs</option>
            <option value="4">McKinney Falls - Austin</option>
            <option value="5">Pace Bend - Austin</option>
        </select><br><br>
         <label>Desired Trip Date: </label> <!-- setting the option to select and change trip time-->
         <select v-model="tripTime" name="trip-time" @change="change">
            <option value="0">(no preference)</option>
            <option value="1">Summer 2020</option>
            <option value="2">Fall 2020</option>
            <option value="3">Winter 2020/2021</option>
            <option value="4">Spring 2021</option>
            <option value="5">(further future)</option>
        </select><br><br>
        <p><b>Any changes made to the profile will automatically save!</b></p>
        <button v-on:click="logoutProfile()">Logout</button><br><br>
        <button v-on:click="Delete()">Delete Profile</button><br><br>
        <button v-on:click="jumpHome()">Return to Home Page</button>
    </div>
</template>

<script> 
import ApiService from '@/services/ApiService'; 
export default {
    name: 'profile',
    data() {
        return {
            email: '',
            climbRating: '',
            location: '',
            tripTime: ''
        }
    },
    mounted() {
        this.fetchProfile()
    },
    methods: {

       async Delete(){
            let response = await ApiService.deleteProfile();
            localStorage.removeItem("rc-auth-token");
            this.$router.push('/login')
            
        },

        async jumpHome(){
            this.$router.push('/');
        },

        
        async logoutProfile(){
            localStorage.removeItem("rc-auth-token");
            this.$router.push('/login');
        },

        async fetchProfile() { //pulling profile info
            try{
                let response = await ApiService.profile();
                console.log(response.data);
                if (response && response.data) {
                this.updateState(response.data);
            }
            }catch(error){
                localStorage.removeItem("rc-auth-token");
                this.$router.push('/login');
            }
            
        },
        async change() { //admin the changes when user selects dif option
            let profile = {
                climbRating : this.climbRating,
                location : this.location,
                tripTime : this.tripTime
                
            };
            let response = await ApiService.updateProfile(profile);
            if (response && response.data) {
                this.updateState(response.data);
            }
        },
        updateState(profile) { //admin the changes when user selects dif option
            this.email = profile.email;
            this.climbRating = profile.climbRating;
            this.location = profile.location;
            this.tripTime= profile.tripTime;
        }
    }
}
</script>

<!-- styling of background & text -->
<style scoped>
    h2 {
        margin: 0;
        padding: 0;
    }
    .profile {
        height: 100vh;
        width: 100%;
        background-image: url("../img/mountain.jpg");
        background-size: cover;
        background-position: center;
    }
</style>