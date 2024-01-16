import { useState, useEffect } from "react";
import axios from "axios";

const useFeaturedArticles = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;
        const apiUrl = `https://newsapi.org/v2/everything?q=Evolution%20AI%20OR%20ChatGPT&apiKey=${apiKey}&pageSize=2`;
        // const apiUrl = `https://newsapi.org/v2/everything?q=AI&apiKey=${apiKey}&pageSize=2`;

        const res = await axios.get(apiUrl);
        if (res.data.articles) {
          console.log(res.data.articles);
          setFeaturedItems(res.data.articles);
        }
        setIsLoading(false); //stop loading when fetched.
      } catch (error) {
        console.error("Error fetching request", error);
      }
    };

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    fetchArticles();

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return {
    featuredItems,
    isLoading,
  };
};

// const useSpotLight = () => {};

export { useFeaturedArticles };
