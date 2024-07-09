<template>
    <div class="bg-header ">
        <nav class="nav-bar mx-7 md:py-6 md:mx-0 md:pl-14">
            <ul class="flex md:flex-col gap-5 md:gap-3  text-lg md:text-2xl  font-semibold text-textcolor">
                <li>
                    <router-link to="/" class="sideText">
                        <NwIcon icon="noto:fire" class="text-xl md:text-4xl" />
                        <span>TopNews</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/mycity" class="sideText">
                        <NwIcon icon="ic:sharp-location-on" class="text-xl md:text-4xl text-red-600" />
                        <span>MyCity</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/technology" class="sideText">
                        <NwIcon icon="hugeicons:nano-technology" class="text-xl md:text-4xl text-teal-100" />
                        <span>Technology</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/world-cup" class="sideText">
                        <NwIcon icon="emojione:cricket-game" class="text-xl md:text-4xl" />
                        <span>T20WorldCup</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/election" class="sideText">
                        <NwIcon icon="icon-park-outline:index-finger" class="text-xl md:text-4xl text-rose-100" />
                        <span>Election</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/entertainment" class="sideText">
                        <NwIcon icon="fluent:movies-and-tv-16-regular" class="text-xl md:text-4xl text-purple-600" />
                        <span>Entertinment</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/india" class="sideText">
                        <NwIcon icon="hugeicons:india-gate" class="text-xl md:text-4xl text-rose-100" />
                        <span>India</span>
                    </router-link>
                </li>


                <li>
                    <router-link to="/world" class="sideText">
                        <NwIcon icon="noto-v1:globe-showing-europe-africa" class="text-xl md:text-4xl" />
                        <span>World</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/business" class="sideText">
                        <NwIcon icon="material-symbols:currency-rupee-circle" class="text-xl md:text-4xl text-green-600" />
                        <span>Business</span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/sports" class="sideText">
                        <NwIcon icon="material-symbols:sports-handball" class="text-xl md:text-4xl text-teal-600" />
                        <span>Sports</span>
                    </router-link>
                </li>

                
              
            </ul>


        </nav>

    </div>
</template>
<script setup>
const navData = [
    {
        path: "/topnews",
        name: "Top News",
        icon: "noto:fire"
    },
    {
        path: "/mycity",
        name: "My City",
        icon: "ic:sharp-location-on"
    },
    {
        path: "/mygujarat",
        name: "My Gujarat",
        icon: "ic:sharp-location-on"
    },
    {
        path: "/world-cup",
        name: "T-20 World Cup",
        icon: "emojione:cricket-game"
    },
    {
        path: "/election",
        name: "Election",
        icon: "icon-park-outline:index-finger"
    },
    {
        path: "/entertinment",
        name: "Entertinment",
        icon: "fluent:movies-and-tv-16-regular"
    },
    {
        path: "/india",
        name: "India",
        icon: "hugeicons:india-gate"
    },
    {
        path: "/world",
        name: "World",
        icon: "noto-v1:globe-showing-europe-africa"
    },
    {
        path: "/business",
        name: "Business",
        icon: "material-symbols:currency-rupee-circle"
    },
    {
        path: "/sports",
        name: "Sports",
        icon: "material-symbols:sports-handball"
    }

]

</script>

<script setup>

</script>
<style scoped>
 @media only screen and (min-width: 320px) and (max-width: 1000px){
    .nav-bar .active-nav {
        color: #f89c1d
 }}
@media only screen and (min-width: 1000px) and (max-width: 2560px){
    .nav-bar .active-nav {
    border-left: #171615;
    border-left: solid;
    padding-left: 54px;
    margin-left: -56px;
    background-image: linear-gradient(to left ,#242526, #464441);
}}

</style>