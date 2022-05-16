import requests from './httpServices';
import axios from 'axios';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
  url: "https://lms.shop-template.de",
  consumerKey: "ck_82c69d8691908c5dabbbf237555148961208ad71",
  consumerSecret: "cs_30a42538f3ecc9a73b644b26df866eee8964160b",
  version: "wc/v3"
});
const data = {
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
  set_paid: true,
  billing: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US",
    email: "john.doe@example.com",
    phone: "(555) 555-5555"
  },
  shipping: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US"
  },
  line_items: [
    {
      product_id: 93,
      quantity: 2
    },
    {
      product_id: 22,
      variation_id: 23,
      quantity: 1
    }
  ],
  shipping_lines: [
    {
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "10.00"
    }
  ]
};

const OrderServices = {


  addOrder(body, headers) {
    console.log(body);
    console.log("jfjf");
    /*api.post("orders", data)
.then((response) => {
  console.log(response.data);
  return response.data;
})
.catch((error) => {
  console.log(error.response);
  return error.response;
});
return body;
//return requests.post('/order/add', body, headers);*/
return body;
  },
  getOrderByUser(body) {
    //return requests.get('/order', body);
    return axios.get(`https://lms.shop-template.de/wp-json/wc/v3/orders/9876/?&per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
   .then(res => res.data)
  },
  getOrderById(id, body) {
    //return requests.get(`/order/${id}`, body);
    return axios.get(`https://lms.shop-template.de/wp-json/wc/v3/orders/9876/?&per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
    .then(res => res.data)
    
  },
};

export default OrderServices;
