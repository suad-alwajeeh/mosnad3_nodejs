import axios from "../apis/config";
import {   useNavigate } from 'react-router-dom'

export async function login(values) {
  const res= axios.post(
    'auth/login',values,
    {
      headers: {

       }
    }
    );

    console.log(res)
    return res
} 
 
export async function register(values) {
    const res= axios.post(
      'users/add',values,
      {
        headers: {
  
         }
      }
      );
  
      console.log(res)
      return res
  } 
   
export async function logout(values) {
    localStorage.removeItem("userData")

 
    // return axios.post(
    //   'auth/logout',values,
    //   {
    //     headers: {
    //       'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
    //      }
    //   }
    //   );
  }