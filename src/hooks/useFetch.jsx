import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIspending(true);
      try {
        const req = await fetch(url);
        const text = await req.text(); 
        console.log("Serverdan qaytgan ma'lumot:", text);

        // JSON formatligini tekshiramiz
        const data = JSON.parse(text);
        setData(data);
        setIspending(false);
      } catch (error) {
        console.error("Fetch xatosi:", error);
        setError(error);
        setIspending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
}
