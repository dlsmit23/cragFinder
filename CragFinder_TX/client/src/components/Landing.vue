<template>
    <div class="landing">
        <h1>Welcome to CragFinder Texas!</h1>
        <h2>Let us schedule your next climbing adventure!</h2><br>
        <button v-on:click="loginProfile()">Login or Access Profile</button>
        <button v-on:click="registerPage()">Create a Profile</button>
        <h3>Hueco Tanks State Park - El Paso</h3>
        <p>
            Hueco Tanks is widely regarded as one of the best areas <br>
            in the world for bouldering, because of its rock type and <br>
            the concentration and quality of the climbing. In February <br>
            an outdoor bouldering competition known as the Hueco <br>
            Rock Rodeo is held which attracts many professional <br>
            climbers every year. <br><br>

            <u>Route Ratings at Hueco</u><br><br>
            VB thru V3 - 102 routes<br>
            V4 thru V5 - 119 routes<br>
            V6 thru V7 - 94 routes<br>
            V8 thru V9 - 76 routes<br>
            V10+ - 47 routes<br>

            <br><u>Best Months to Climb at Hueco</u><br><br>
            Fall (late October + November)<br>
            Winter (December, January, February)<br>
            Spring (March + early April)<br><br>
        
      
        <img src="../img/hueco.jpg" height="350" >
        </p>

        <br><h3>Enchanted Rock State Natural Area - Fredericksburg</h3>
        <p>
            The scenery, rock formations and legends are magical. <br>
            1,643-acre Enchanted Rock State Natural Area draws <br>
            thousands of visitors to its 500-foot-high dome of pink <br>
            granite, the second largest formation in North America. <br>
            For experienced rock climbers, the park's 1,000 foot long <br>
            Enchanted Rock Fissure -- one of the largest known granite <br>
            caves -- promises is a challenge on its steep and slippery <br>
            surfaces. You can find a list of many rock climbing routes <br>
            available at the park headquarters.<br><br>

            <u>Route Ratings at Enchanted Rock</u><br><br>
            VB thru V3 - 31 routes<br>
            V4 thru V5 - 18 routes<br>
            V6 thru V7 - 5 routes<br>
            V8 thru V9 - 1 route<br>
            V10+ - 0 routes<br>

            <br><u>Best Months to Climb at Enchanted Rock</u><br><br>
            Fall (late October + November)<br>
            Winter (December, January, February)<br>
            Spring (March, April, early May)<br><br>

        
        <img src="../img/enchRock.jpg" height="350" >
        </p>

        <br><h3>Reimers Ranch - Dripping Springs</h3>
        <p>
            Located 30 miles southwest of Austin, Reimer's Ranch provides <br>
            an excellent selection of pocketed limestone climbs that are a <br>
            bit more on the tough side. The majority of the walls overlook <br>
             the Pedernales river a short distance away which provides an <br>
             excellent post-climb cool down in the summer. At nearly 2,500 <br>
             acres of land - there is sure to be a route for you here!<br><br>

            <u>Route Ratings at Reimers Ranch</u><br><br>
            VB thru V3 - 18 routes<br>
            V4 thru V5 - 20 routes<br>
            V6 thru V7 - 24 routes<br>
            V8 thru V9 - 15 route<br>
            V10+ - 8 routes<br>

            <br><u>Best Months to Climb at Reimers Ranch</u><br><br>
            Fall (late October + November)<br>
            Winter (December, January, February)<br>
            Spring (March + early April) <br><br>

        
        <img src="../img/reimers.jpg" height="350" >
        </p>

        <br><h3>McKinney Falls State Park - Austin</h3>
        <p>
            McKinney falls holds a high concentration of some of Austin's <br>
            hardest boulder problems. It is known for short, powerful moves <br>
            on small pockets. If this is one of your first times climbing, <br>
            then McKinney is probably not the place for you. The climbing is <br>
            unique and the grades are tough with burley moves and thin pockets.<br>
            An all bouldering friendly location, you'll be sure to find a route <br>
            that can really challenge you, and come out a better climber!<br><br>


            <u>Route Ratings at McKinney Falls</u><br><br>
            VB thru V3 - 16 routes<br>
            V4 thru V5 - 25 routes<br>
            V6 thru V7 - 22 routes<br>
            V8 thru V9 - 19 route<br>
            V10+ - 12 routes<br>

            <br><u>Best Months to Climb at McKinney Falls</u><br><br>
            Fall (September, October, November)<br>
            Winter (December, January, February)<br>
            Spring (March, April, May) <br>
            Summer (June, July, August) <br><br>

        
        <img src="../img/mckinney.jpg" height="350" >

        </p>
           <br><h3>Pace Bend - Austin</h3>
        <p>
            Pace Bend you will experience fun deep water soloing or water bouldering <br>
            on solid limestone. You will not need a boat to reach these areas. Be <br>
            careful as the water levels of Lake Travis can vary dramatically, so make <br>
            sure the water isn't too low before falling in and bottoming out. Being <br>
            right along Lake Travis, this is a hot spot during the cooler months <br>
            and attracts a myriad of different ages and levels of climbers. So, <br>
            come out to Pace Bend and have some fun clibs, as long as you don't <br>
            mind your climbing gear getting wet! <br><br>

            <u>Route Ratings at Pace Bend</u><br><br>
            VB thru V3 - 5 routes<br>
            V4 thru V5 - 8 routes<br>
            V6 thru V7 - 7 routes<br>
            V8 thru V9 - 4 route<br>
            V10+ - 2 routes<br>

            <br><u>Best Months to Climb at Pace Bend</u><br><br>
            Fall (late September, October, November)<br>
            Winter (December, January, February)<br>
            Spring (March + early April) <br><br>

        <img src="../img/pacebend.jpg" height="350" >
        <br><br><br><br>
        </p>
    </div>
</template>

<script>
export default {
    name: 'landing',
    methods: {
        async loginProfile(){
            this.$router.push('/profile');
        },
        async registerPage(){
            this.$router.push('/signup');
        }

    }
}
</script>

<style scoped>
    
    h2 {
        margin: 0;
        padding: 0;
    }
    .landing {
        height: 100%;
        width: 100%;
        background-image: url("../img/wavy.jpeg");
        background-size: cover;
        background-position: center;
    }
</style>

