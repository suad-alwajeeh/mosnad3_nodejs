import axios from "axios";

export default axios.create({

  baseURL: "https://dummyjson.com/",
 
});

export async function postRequest(url, values) {
    return axios.post(url, values, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authToken"),
       },
    });
  }