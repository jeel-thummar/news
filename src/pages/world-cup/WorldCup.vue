<template>
    <div class="">
      <div class="pt-4 flex gap-4 mx-7 md:mx-14">
        <div @click="showSchedule" class="flex items-center gap-1 md:gap-4 text-green-950 text-lg md:text-3xl font-semibold bg-green-100 px-2 py-1 md:px-5 md:py-2 rounded-lg cursor-pointer">
          <NwIcon icon="healthicons:i-schedule-school-date-time" class=" text-3xl md:text-4xl text-green-900"/>
          <button>Schedule</button>
        </div>
        <div @click="showPointsTable" class="flex items-center gap-1 md:gap-4 text-yellow text-lg md:text-3xl font-semibold bg-amber-100 px-2 py-1 md:px-5 md:py-2 rounded-lg cursor-pointer">
          <NwIcon icon="twemoji:trophy" class=" text-xl md:text-4xl text-green-900"/>
          <button>Points Table</button>
        </div>
      </div>
  
      <div v-if="showing === 'schedule'">
        <div v-if="matchData" class="mx-7 md:mx-14">
          <div v-for="(item, index) in matchData.data" :key="index" class="bg-zinc-900 rounded-2xl p-3 md:p-5 my-6">
            <p class="text-white text-base md:text-xl">{{ item.dateTimeGMT }}</p>
            <div class="flex justify-between items-center">
              <div class="flex flex-col">
                <div v-for="(match, i) in item.teamInfo" :key="i" class="flex items-center gap-2 md:gap-4 pt-1 md:pt-2">
                  <img :src="match.img" class="size-8 md:size-11"/>
                  <p class="text-xl md:text-3xl text-white">{{ match.shortname }}</p>
                </div>
              </div>
              <div class="flex flex-col gap-2 md:gap-4">
                <p v-for="(score, ind) in item.score" :key="ind" class="text-xl md:text-3xl text-white">{{ score.r }} - {{ score.w }} <span class="text-base md:text-xl text-white">({{ score.o }})</span></p>
              </div>
            </div>
            <p class="text-white text-lg md:text-2xl p-1 md:pt-2">{{ item.status }}</p>
          </div>
        </div>
        <div v-else>
          <Loder/>
        </div>
      </div>
  
      <div v-if="showing === 'pointsTable'">
        <div v-if="pointsTableData">
          <div v-for="(team, index) in pointsTableData.data" :key="index" class="border border-gray-200 px-4 py-2 mx-4 my-4 rounded-lg">
            <p class="text-white text-xl">{{ team.teamName }}</p>
            <p class="text-white text-xl">Points: {{ team.points }}</p>
            <p class="text-white text-xl">Matches: {{ team.matches }}</p>
          </div>
        </div>
        <div v-else>
          <Loder/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import Loder from '../../components/loder/Loder.vue'
  
  const matchData = ref(null);
  const pointsTableData = ref(null);
  const showing = ref('schedule');
  
  const fetchMatchData = async () => {
    try {
      const response = await axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=37f97cb1-2603-492b-9b0e-580b94701ea4&offset=4`);
      matchData.value = response.data;
    } catch (error) {
      console.error('Error fetching match data:', error);
    }
  };
  
  const fetchPointsTableData = async () => {
    try {
      const response = await axios.get(`https://api.cricapi.com/v1/pointsTable?apikey=37f97cb1-2603-492b-9b0e-580b94701ea4&offset=4`);
      pointsTableData.value = response.data;
    } catch (error) {
      console.error('Error fetching points table data:', error);
    }
  };
  
  const showSchedule = () => {
    showing.value = 'schedule';
    fetchMatchData();
  };
  
  const showPointsTable = () => {
    showing.value = 'pointsTable';
    fetchPointsTableData();
  };
  
  showSchedule();
  </script>
  
  <style lang="">
  </style>
  