import axios from "axios";
import { API_URL, TOKEN } from "../constants";

function useFetch() {
  const getDataFromBackend = async (url) => {
    let backEndData;
    try {
      const response = await axios.get(`${API_URL}/${url}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN ? `${TOKEN}` : ""}`,
        },
      });

      backEndData = response.data;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
    return backEndData;
  };

  const postDataIntoBackend = async (url, data) => {
    let backEndData;
    try {
      const response = await axios.post(`${API_URL}/${url}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      backEndData = response;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
    return backEndData;
  };

  return {
    getDataFromBackend,
    postDataIntoBackend,
  };
}

export default useFetch;
