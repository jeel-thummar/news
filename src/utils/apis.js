import axios from "axios";
import { useCountryStore } from "../stores/Country";

export const getFromEverything = async (category) => {
  const countryStore = useCountryStore();
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${localStorage.getItem(
        "country"
      )} ${category}&apiKey=e626466ff10e4a069969920b1a76999b`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching match data:", error);
  }
};

export const searchnewsData = async (search) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=e626466ff10e4a069969920b1a76999b`
    );
    return response.data;
    // console.log(response);
    
  } catch (error) {
    console.error("Error fetching match Newsdata:", error);
  }
}