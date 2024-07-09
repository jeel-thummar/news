<template>
    <div class="bg-cpage">
        <div v-if = "newsdata" class=" mx-7 md:mx-14"> 
          <div v-for="(news, index) in newsdata.articles" :key="index" class="bg-zinc-900 rounded-2xl my-6 flex justify-between flex-col-reverse gap-3 md:gap-8 md:flex-row p-3 md:p-7">
            <div class="flex flex-col justify-between">
                <h4 @click="navigateToNews(news.title)" class="text-xl md:text-2xl text-white font-semibold flex-none cursor-pointer">{{ news.title }}</h4>
                <span class="text-lg md:text-xl text-slate-300 font-medium">{{ formatDate(news.publishedAt) }}</span>
            </div>
            <img v-if=news.urlToImage :src="news.urlToImage"  alt="img" class="md:h-40 md:w-60 rounded-2xl mx-auto md:mx-0"/>
            <img v-else src="/public/business.jpg" class="md:h-40 md:w-60 rounded-2xl mx-auto md:mx-0"/>
          </div>  
        </div>
        <div v-else>
          <Loder/>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { getFromEverything } from "../../utils/apis"
import Loder from '../../components/loder/Loder.vue'
import { format } from 'date-fns';


const newsdata = ref(null)
const router = useRouter();
const route = useRoute()

const newsFetchData = async () => {
    newsdata.value = await getFromEverything(route.path.replace("/" , ""));
};
const navigateToNews = (slug) => {
  const pathname = slug.replace(/\s+/g, "-");
  router.push({ name: 'NewsInfo', params: { id: pathname } });
};

const formatDate = (dateString) => {
    return format(new Date(dateString), 'dd MMM yyyy');
  };
// console.log(route.path.replace("/" , ""));
// console.log(newsdata);

newsFetchData()


</script>
<style lang="">
    
</style>