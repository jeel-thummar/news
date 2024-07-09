import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

export const useCountryStore = defineStore("country", () => {
  const countries = reactive([
    {
      id: 1,
      cname: "Global",
    },
    {
      id: 2,
      cname: "India",
    },
    {
      id: 3,
      cname: "USA",
    },
    {
      id: 4,
      cname: "NZ",
    },
    {
      id: 5,
      cname: "Australia",
    },
  ]);

  const getPreselectedId = () => {
    let localCountry = localStorage.getItem("country");
    if (localStorage.getItem("country")) {
      return countries.find((country) => country.cname === localCountry);
    } else return 1;
  };
  let selectedCountryId = ref(getPreselectedId().id || 1);

  const selectedCountry = computed(() => {
    return countries.find((country) => country.id === selectedCountryId.value);
  });

  const setSelectedCountry = (id) => {
    selectedCountryId.value = id;
    localStorage.setItem("country", selectedCountry.value.cname);
    location.reload();
  };
  return {
    countries,
    selectedCountry,
    setSelectedCountry,
    selectedCountryId,
  };
});
