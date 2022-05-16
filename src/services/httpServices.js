import axios from 'axios';
import Cookies from 'js-cookie';
const ck = "ck_82c69d8691908c5dabbbf237555148961208ad71";
const cs = "cs_30a42538f3ecc9a73b644b26df866eee8964160b";
const instance = axios.create({
  baseURL: "https://lms.shop-template.de/wp-json/api/v1/token/",
  method: "POST",
  timeout: 500000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let userInfo;
  if (Cookies.get('userInfo')) {
    userInfo = JSON.parse(Cookies.get('userInfo'));
    //console.log("at u"+userInfo)

  }

  return {
    ...config,
    body: JSON.stringify({
      username: "harpreet",
      password: "harpreet_1234"

    }),
  };
});

// console.log(process.env.API_BASE_URL);
const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),

  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody),

  put: (url, body) => instance.put(url, body).then(responseBody),
};

export default requests;
