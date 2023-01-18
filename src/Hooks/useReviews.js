import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://gadget-maker-house-server.onrender.com/reviews")
      .then((data) => setReviews(data.data));
  }, []);

  return [reviews, setReviews];
};

export default useReviews;
