<template>
    <!-- <div class="flex flex-col w-full">       
        <div v-for="(profile , i) in pName" class=" flex items-center gap-5 bg-slate-400 w-full mx-5 my-5 px-5 py-5">
            <img src="../../assets/Images/person-1.jpg" alt="" class="rounded-full size-40">
            <div>
              <h3>{{ profile.name }}</h3>
            </div>
        </div>
    </div> -->
    <h1>my city</h1>
     
</template>
<script setup>
  const pName  = [
    {
        name : "Jeel Thummar",
        bod : "7-jun-2004",
        deginatiojn : "intern"
    },
    {
        name : "Bhavin Panchal",
        bod : "2-feb-2000",
        deginatiojn : "Full Time"
    },
    {
        name : "Hitali",
        bod : "8-March-2001",
        deginatiojn : "intern"
    }
  ]
</script>
<style>
    
</style>