import { createRouter, createWebHistory } from "vue-router";
import Video from "./pages/video/Video.vue";
import Search from "./pages/search/Search.vue";
import Epaper from "./pages/e-paper/E-paper.vue";


// SIDEBAR
import TopNews from './pages/topNews/TopNews.vue';
import MyCity from './pages/mycity/MyCity.vue';
import WorldCup from "./pages/world-cup/WorldCup.vue";
import Election from './pages/election/Election.vue';
import Entertinment from './pages/entertinment/Entertinment.vue';
import India from './pages/india/India.vue';
import World from './pages/worldnew/World.vue';
import Business from './pages/business/Business.vue'
import Sports from "./pages/sports/Sports.vue";
import NewsInfo from "./components/newsInfo/NewsInfo.vue";
import Technology from "./pages/technology/Technology.vue"
import SearchNews from "./components/searchNews/SearchNews.vue";

const routes = [
  {
    path: "/",
    name: "TopNews",
    component:TopNews,
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/epaper",
    name: "Epaper",
    component: Epaper,
  },
  {
    path: "/",
    name: "TopNews",
    component: TopNews,
  },
  {
    path: "/mycity",
    name: "MyCity",
    component: MyCity,
  },
  {
    path: "/technology",
    name: "Technology",
    component: Technology,
  },
  {
    path: "/world-cup",
    name: "WorldCup",
    component: WorldCup,
  },
  {
    path: "/election",
    name: "Election",
    component: Election,
  },
  {
    path: "/entertainment",
    name: "Entertinment",
    component: Entertinment,
  },
  {
    path: "/india",
    name: "India",
    component: India,
  },
  {
    path: "/world",
    name: "World",
    component: World,
  },
  {
    path: "/business",
    name: "Business",
    component: Business,
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports,
  },
  {
    path: "/news/:id",
    name: "NewsInfo",
    component: NewsInfo,
  },
  {
    path: "/searchnews/:id",
    name: "SearchNews",
    component: SearchNews,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass : "active-nav"
});

export default router; 
