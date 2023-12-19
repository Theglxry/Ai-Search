import { useState, useEffect } from "react";



const useLoaderLogic = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    return {
      isLoading,
    };
  };


export { useLoaderLogic };
