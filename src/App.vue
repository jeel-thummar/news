<template>
   <Navbar />
    <div class="flex flex-col hight  md:flex-row mt-12 md:mt-16">
      <Sidebar class="flex-none overflow-x-auto overflow-hidden md:overflow-y-auto  scrollbar-hide md:w-80"/>
      <router-view class="bg-cpage grow overflow-y-auto scrollbar-hide"></router-view>
      <MobileNavbar class=" fixed bottom-0 left-0 w-full md:hidden"/>
      <RightSideBar class="rightsidebar flex-none md:overflow-y-auto md:w-80 scrollbar-hide h-auto"/>
    </div>
   
</template>

<script setup>
    import Navbar from './components/navbar/Navbar.vue';
    import Sidebar from './components/sidebar/Sidebar.vue';
    import RightSideBar from './components/rightSidebar/RightSideBar.vue';
    import MobileNavbar from './components/mobilenavbar/MobileNavbar.vue'
    </script>
  
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
.rhight{
    height: calc(100vh - 60px);
 }
.hight {
    height: calc(100vh - 65px);
 }
 .scrollbar-hide {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}
@media only screen and (max-width: 1385px){
    .rightsidebar{
        display: none;
    }
}
</style>
