<template>
    <div class="bg-header py-14  px-3 hidden md:block">
      <video autoplay muted loop width="640" height="480">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div>
        
      </div>
      <div class="bg-slate-700 px-20 py-32 mt-7">
        <h1>Stock Data</h1>
        
        <button @click="fetchStockData">Get Stock Data</button>
        <div v-if="stockData">
          <h2 v-for="(item , index) in stockData.results" :key="index">{{ item }}</h2>
         </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const stockData = ref();
  const symbol = ref('');
  


const fetchStockData = async () => {
  try {
    // const apiKey = 'KXDDS6NFAGU1IVJA';
    const response = await axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=37f97cb1-2603-492b-9b0e-580b94701ea4&offset=4`);
    stockData.value = response.data
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
};
  </script>
  
  <style scoped>
  .nav-bar .active-nav {
    background-color: #4d5054;
    padding: 10px 0px 10px 10px;
    border-radius: 10px 0px 0px 10px;
  }
  </style>
  