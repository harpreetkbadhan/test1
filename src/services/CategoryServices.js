import requests from './httpServices';
import React, { useState, useEffect } from "react";
import axios from 'axios';
const category = [
  {
    _id:1,
    parent: 'Sports & Fitness',
    type: 'Sports & Fitness',
    icon: 'https://i.ibb.co/qNCvxT0/dumbbell.png',
    children: ['Sports', 'Fitness'],
  },
  {
    _id:2,
    parent: 'Beauty & Health',
    type: 'Health Care',
    icon: 'https://i.postimg.cc/gjz1P7wx/beauty.png',
    children: [
      'Bath',
      'Cosmetics',
      'Oral Care',
      'Skin Care',
      'Body Care',
      'Shaving Needs',
    ],
  }];



const CategoryServices = {
  getAllCategory() {
   /* axios.get(`https://lms.shop-template.de/wp-json/wc/v3/products/categories?per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
    .then((res) => res.json())
    .then((json) => {
      d=json
     })*/
    return category;
  },
  
};

export default CategoryServices;
