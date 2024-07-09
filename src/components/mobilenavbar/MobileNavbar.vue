<template>
    <div class=" bg-sidebar w-full py-1">
        <nav class="">
                <ul class=" text-gray-200 text-lg font-semibold flex justify-evenly items-center gap-10">
                    <li>
                        <router-link to="/" class="flex items-center flex-col group">
                            <NwIcon icon="material-symbols:home" class="text-2xl group-hover:text-yellow" />
                            <span class="group-hover:text-yellow">Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/video" class="flex items-center flex-col group">
                            <NwIcon icon="ic:round-slow-motion-video" class="text-2xl group-hover:text-yellow" />
                            <span class="group-hover:text-yellow">Video</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/search" class="flex items-center flex-col group">
                            <NwIcon icon="material-symbols:search" class="text-2xl group-hover:text-yellow" />
                            <span class="group-hover:text-yellow">Search</span>
                        </router-link>
                    </li>
                </ul>
        </nav>
    </div>
</template>
<script setup>

</script>
<style scoped>
   .nav-bar .active-nav {
    color: #f89c1d
} 
</style>