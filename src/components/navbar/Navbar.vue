<template>
    <section class="bg-sidebar nav-bar border-b border-yellow w-full fixed top-0 right-0  z-20">
        <nav class="px-7 md:px-20 flex  justify-between items-center py-2 md:py-3 ">
            <h4 class="text-white font-semibold text-2xl md:text-4xl">News</h4>
            <div class="flex gap-7  items-center">
                <div class="hidden md:block">
                    <ul class=" text-ntextcolor text-2xl font-semibold flex items-center gap-10">
                        <li>
                            <router-link to="/" class="flex items-center gap-2 group">
                                <NwIcon icon="material-symbols:home" class="text-3xl group-hover:text-yellow" />
                                <span class="group-hover:text-yellow">Home</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/video" class="flex items-center gap-2 group">
                                <NwIcon icon="ic:round-slow-motion-video" class="text-3xl group-hover:text-yellow" />
                                <span class="group-hover:text-yellow">Video</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/search" class="flex items-center gap-2 group">
                                <NwIcon icon="material-symbols:search" class="text-3xl group-hover:text-yellow" />
                                <span class="group-hover:text-yellow">Search</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/epaper" class="flex items-center gap-2 group">
                                <NwIcon icon="flowbite:newspaper-outline" class="text-3xl group-hover:text-yellow" />
                                <span class="group-hover:text-yellow">E-paper</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <select id="datatype"
                    className="bg-cpage text-ntextcolor px-2 md:py-1 text-lg md:text-2xl rounded-md outline-none"
                    v-model="selectedCountryId">
                    <option v-for="(country, i) in countries" :key="country.id" :value="country.id">{{ country.cname }}</option>
                </select>
            </div>
        </nav>
    </section>
</template>
<script setup>
import { computed } from 'vue'
import { useCountryStore } from '../../stores/Country';

const countryStore = useCountryStore();
const countries = countryStore.countries;
const selectedCountryId = computed({
    get() {
        return countryStore.selectedCountryId
    },
    set(id) {
        countryStore.setSelectedCountry(id)
    }
});
</script>
<style scoped>
.nav-bar .active-nav {
    color: #f89c1d
}
</style>