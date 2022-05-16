import requests from './httpServices';
import axios from 'axios';
var a="harpreet";
const UserServices = {
  
  
  userLogin(body) {
    //return requests.post('/user/login', body);
    var a="";
    fetch("https://lms.shop-template.de/wp-json/jwt-auth/v1/token", {
      method: "POST",  
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":'*',

       "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Header": "Content-Type, Authorization, X-Requested-With",
     },
     body: JSON.stringify({
       username: "harpreet123",
       password: "@harpreet2",
     }),
   }).then((response) => {
       console.log(response.ok);
       a=response.ok;
     
     });
     return response.ok;
     
 },


  userRegister(body) {
    return requests.post('/user/register', body);
  },

  signUpWithProvider(body) {
    return requests.post('/user/signup', body);
  },

  changePassword(body) {
    return requests.post('/user/change-password', body);
  },

  updateUser(id, body) {
    return requests.put(`/user/${id}`, body);
  },
};

export default UserServices;
