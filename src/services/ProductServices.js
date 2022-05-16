import requests from './httpServices';
import axios from 'axios';
var s= [
  //baby care- baby accessories
  {
    _id:1,
    name: 'Freshmaker Wipes',
    slug: 'freshmaker-wipes',
    parent: 'Baby Care',
    children: 'Baby Accessories',
    image:
      'https://i.ibb.co/sWBMfVP/Freshmaker-Baby-Wet-Wipes-With-Cover-72pcs.jpg',
    originalPrice: 8,
    price: 8,
    discount: 0,
    unit: '75pcs',
    quantity: 100,
    type: 'Health Care',
    tag: ['baby care', 'baby accessories'],
    description:
      'Baby Products are products intended to be used on infants and children under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.',
  }];

const ProductServices = {

  getAllProducts() {
     return axios.get(`https://lms.shop-template.de/wp-json/wc/v3/products?per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
    .then(res => res.data)

   
  },
  getProductBySlug(slug) {
    return axios.get(`https://lms.shop-template.de/wp-json/wc/v3/products/?category=${slug}&per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
   .then(res => res.data)
  },
  getAllProductsbyId(id) {
    return axios.get(`https://lms.shop-template.de/wp-json/wc/v3/products/?category=${id}&per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
   .then(res => res.data)
 },
   getOrderById(id) {
  return axios.get(`https://lms.shop-template.de/wp-json/wc/v2/orders?customer=${id}&consumer_key=ck_9a323f12e50b7b380f60f32f51cdb62afb2db781&consumer_secret=cs_d2b5326343a21434db21e7ec55ceb0838c45d3df`)
 .then(res => res.data)
},
getCategory() {
  return axios.get(`https://lms.shop-template.de/wp-json/wc/v3/products/categories?per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
 .then(res => res.data)
},
getwooFood()
{
  return axios.get(`https://lms.shop-template.de/data.php`, {
    headers: {
      

      'Access-Control-Allow-Origin':'*', 
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    }})
  .then(res => res.data)
},

};

export default ProductServices;
