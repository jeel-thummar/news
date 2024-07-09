<template>
  <section class="px-6 py-3 md:py-6 md:px-9">
    <div class="animate__animated animate__fadeInDown relative">
        <div class="flex items-center gap-3 md:gap-10 border-b-2 border-textcolor">
            <NwIcon icon="material-symbols:search" class="text-6xl font-bold  text-textcolor"/>
            <input type="text" v-model="news" placeholder="Categories and News search here" class="outline-none text-xl md:text-2xl text-white font-semibold px-3 py-3 bg-cpage w-full"/>
            <button @click="newsButtonClick" class="text-white text-xl rounded-lg border-2 border-yellow md:h-10 px-3 md:px-4 py-1 hover:bg-header hover:border-zinc-300">{{ buttonText }}</button>
        </div>
        <ul class="flex flex-wrap gap-2 md:gap-4 justify-center ">
            <li v-for="(btn , i) in searchData" class="mt-7">
                <router-link :to="btn.path">
                    <span class="text-xl md:text-2xl px-4 py-2 border border-textcolor rounded-full md:font-medium text-white hover:border-yellow hover:text-yellow">{{ btn.name }}</span>
                </router-link>
            </li>
        </ul>
        <div v-if="searchNews" class="w-full bg-header p-5 mt-5 absolute top-11 flex flex-col gap-5"> 
            <div v-if="searchNews.articles.length > 0" v-for="(searchData , index) in searchNews.articles" :key="index" @click="navigateToNews(searchData.title)" class="flex gap-4 items-center bg-cpage rounded-xl p-2 cursor-pointer">
                <img v-if="searchData.urlToImage" :src="searchData.urlToImage" class="h-32 w-36 rounded-xl" alt="">
                <img v-else src="/public/business.jpg" class="h-32 w-36 rounded-xl"/>

                <div>
                    <p class="text-xl text-white">{{ searchData.title }}</p>
                    <span class="text-textcolor text-lg pt-2 hidden md:block">{{ searchData.description }}</span>
                </div>
            </div>
            <div v-else className="flex justify-center">
                <img className=" w-60" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
            </div>
        </div>
    </div>
  </section> 
</template>
<script setup>
  import 'animate.css';
  import { searchnewsData } from "../../utils/apis"
  import { ref,computed } from 'vue';
  import { useRouter } from 'vue-router';
 
  const searchData = [
    {
        path: "/",
        name: "Top News",
    },
    {
        path: "/mycity",
        name: "My City",
    },
    {
        path: "/technology",
        name: "Technology"
    },
    {
        path: "/world-cup",
        name: "T-20 World Cup"
    },
    {
        path: "/election",
        name: "Election"
    },
    {
        path: "/entertainment",
        name: "Entertainment"
    },
    {
        path: "/india",
        name: "India"
    },
    {
        path: "/world",
        name: "World"
    },
    {
        path: "/business",
        name: "Business"
    },
    {
        path: "/sports",
        name: "Sports"
    }

]
// console.log(news);
const searchNews = ref(null);
const news = ref("")
const router = useRouter();
const buttonText = computed(() => {
    return news.value === "" ? "Clear" : "Search";
});
const newsFetchData = async () => {
    searchNews.value = await searchnewsData(news.value);
    console.log("search news", searchNews);
};
const newsButtonClick = () => {
    if (news.value === "search") {
        // news.value = "";
        searchNews.value = null;
    } else {
        newsFetchData();
        news.value= ""
    }
};
const navigateToNews = (slug) => {
  const pathname = slug.replace(/\s+/g, "-");
  router.push({ name: 'SearchNews', params: { id: pathname } });
};
// watch(news, () => {
//     newsFetchData();
//   });
</script>
<style lang="">
    
</style>