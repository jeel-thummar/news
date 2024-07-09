<template lang="">
  <div class="bg-cpage">
    <div v-if = "article" class=" mx-5 md:mx-14 my-4 md:my-8 w-auto"> 
      <div v-for="(newsinfo, index) in article.articles.slice(0,1)" :key="index" class=" flex flex-col gap-3">
        <h4 class="text-3xl md:text-4xl text-white font-semibold flex-none cursor-pointer">{{ newsinfo.title }}</h4>
        <img v-if=newsinfo.urlToImage :src="newsinfo.urlToImage"  alt="img" class="rounded-2xl w-full"/>
        <img v-else src="/public/business.jpg" class="rounded-2xl"/>
        <span class="text-xl text-slate-300 font-medium text-end -mt-2">{{formatDate(newsinfo.publishedAt)}}</span>
        <p class="text-2xl text-textcolor">{{newsinfo.description}}</p>
        <p class="text-2xl text-textcolor">{{newsinfo.content}}</p>
      </div>  
    </div>
    <div v-else>
      <Loder/>
    </div>
  </div>
</template>
<script setup>

import { ref, onMounted } from 'vue';
import Loder from '../../components/loder/Loder.vue'
import { useRoute } from 'vue-router';
import { searchnewsData } from '../../utils/apis';
import { format } from 'date-fns';

const article = ref(null);
const route = useRoute()

onMounted(async () => {
const id = route.params.id;
article.value = await searchnewsData(id);
});

//date formet
const formatDate = (dateString) => {
return format(new Date(dateString), 'dd MMM yyyy');
};
</script>
<style lang="">


</style>