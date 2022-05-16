import Cookies from 'js-cookie';
import * as dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from 'react-use-cart';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from 'axios';
import useSWR from 'swr'
//internal import
import useAsync from '@hooks/useAsync';
import { UserContext } from '@context/UserContext';
import OrderServices from '@services/OrderServices';
import CouponServices from '@services/CouponServices';
import { notifyError, notifySuccess } from '@utils/toast';
import test from '@pages/checkout';
var today = new Date();
import {checkout} from '@pages/checkout';
var d;
var addr;
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from '@agney/react-loading';
import postcssConfig from 'postcss.config';
//import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin'
const api = new WooCommerceRestApi({
  url: "https://lms.shop-template.de",
  consumerKey: "ck_82c69d8691908c5dabbbf237555148961208ad71",
  consumerSecret: "cs_30a42538f3ecc9a73b644b26df866eee8964160b",
  version: "wc/v3"
});

const useCheckoutSubmit = (test) => {
  
  const {
    state: { userInfo, shippingAddress },
    dispatch,
  } = useContext(UserContext);
  async function checkCoupons(code) {
    var s = [];
   var dataCode = [];
   var Postcode_check = 0;
   try {
     const response = await fetch(
       "https://lms.shop-template.de/wp-json/wc/v3/coupons?consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71"
     );
     const json = await response.json();
     // console.log(json);

     dataCode = json;
     //console.log(dataCode);
     //console.log(dataPincode);
   } catch (error) {
     console.log(error);
   } finally {
    dataCode.map(function (object, i) {
      //console.log(object.id);
      //console.log(global.cart_List[i]);
      //console.log("test")
      //console.log(dataCode[i].code);
      if (code == dataCode[i].code) {
       // console.log(dataCode[i].amount);
        var newNum = (cartTotal * dataCode[i].amount) / 100;
        //console.log(newNum)
        Postcode_check =dataCode[i].amount
      // return Postcode_check;
        //global.totalPrice = global.totalPrice - newNum;
       // console.log(newNum.toFixed(2));
        //console.log(global.totalPrice.toFixed(2));
        //setprice(global.totalPrice.toFixed(2));
        //var per = dataCode[i].amount;
        //Coupons = dataCode[i].code + " " + per + "%";
        //setcou(Coupons);
       // global.totalPrice=global.totalPrice.toFixed(2);
       // Postcode_check = 1;
       // setCheckcoup(1);
      } else {
       // console.log("not");
      // return 0;
      }
 
    })
  
    return Postcode_check
     //this.setState({ isLoading: false });
   }

   /*datapincode.map(function (object, i) {
     //console.log(object.id);
     //console.log(global.cart_List[i]);
     //console.log("test");

     s[i] = object.code;

     //console.log(s);
   });
   s.map(function (object, i) {
     //console.log(object.id);
     //console.log(global.cart_List[i]);
     //console.log("test")
     //console.log(s);
   });
   console.log(s[2]);
   */
  
  }
   
 var acc;

  //const [acc, setacc] = useState();
  const [error, setError] = useState('');
  const [total, setTotal] = useState('');
  const [couponInfo, setCouponInfo] = useState({});
  const [data1, setdata1] = useState();
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);
  const [address, setaddress] = useState();
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();
  const couponRef = useRef('');
  const pincodeRef = useRef('');
  const  deliveryRef= useRef('');
  const  dlRef= useRef('');
  const liferRef = useRef('');
  const placeid =useRef('');
  const { isEmpty, emptyCart, items, cartTotal } = useCart();

  const { data } = useAsync(CouponServices.getAllCoupons);
  



  async function getAddress(value)
  {
    
   var pincode="";
   var street=""
    try {
      const response = await fetch(
        "https://maps.googleapis.com/maps/api/place/details/json?place_id="+value+"&key=AIzaSyDZ4O-eIuewDgYJWGDw2WZD85b989ezwi8");
  console.log(response)
      const json = await response.json();
      console.log(json);
      //console.log(json.rows);
      var c = json.result;
     
      var cc=c.address_components;
     
      cc.map((item,index)=>{
       //console.log(item.types[0])
        if(item.types[0]=='route')
      {
     console.log("i"+item.long_name)
     pincode=item.long_name;
      }
      if(item.types[0]=='street_number')
      {
     console.log("i"+item.long_name)
     street=item.long_name;
      }
      
      
      })
  
     // console.log(c.address_components)
      //var km = c[0].distance.value;
      //console.log(km);
   //   console.log(km);
      //this.setState({ data2: json });
    } catch (error) {
      //console.log(error);
    } finally {
      //console.log(json);
      //this.setState({ isLoading: false });
      
      pincode=String(pincode+" "+street);
     // console.log(pincode)
      return pincode;
      //return await(pincode)
    }
   
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(router.asPath)
    /*if(cartTotal<=15 || today.getHours()<9 && today.getHours()>22 )
    {
      router.push(`/search?Category=28`);
    }*/
    
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
       params = {},
       match;
     while ((match = regex.exec(router.asPath))) {
       params[match[1]] = match[2];
     }
     console.log(params.paymentId);
     var pid = params.PayerID;
     var payid = params.paymentId;
     var fname=params.fname;
     var lname=params.lname;
     var address=params.address;
     var email=params.email;
     var phone=params.phone;
     var pin=params.pin;
     var fname=params.fname;
     
     
     

     if(pid)
     {
       
      fetch("https://api.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Language": "en_US",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(
              "ARWLCWnwY6EOvmNM1swqY7oXsuxi6smocmEWVcfeM-WgoXTAWYdWdG9V4TTgPIyqBbaWvtFr2sgFp9n0:ENqtDmPu77gMx9UakQDEO79tovEnV44t7hDNgMMeWpSDOfa0QQbsjVOwpWwIAm454Uo3XEmWTapWdoAc"
            ),
        },
        body: "grant_type=client_credentials",
      })
        .then((response) => response.json())
        .then((responseJson) => {
       console.log("res" + responseJson.access_token);
       acc=responseJson.access_token;
       console.log("paypal"+acc)
        
     axios
       .post(
         `https://api.sandbox.paypal.com/v1/payments/payment/${payid}/execute`,
         { payer_id: pid },
         {
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${acc}`,
           },
         }
       )
       .then((response) => {
        console.log(response.status);
        if (response.status=="200") {
            //global.paypaldone=1;
            //this.props.navigation.navigate("placeOrder");
         
            console.log(name)
            var item_cart=[];
            items.map((item,index)=>
            {
              item_cart.push({
                product_id:item.id,
                quantity:item.quantity
              });
            })
          //  address = address.replace('%', ' ')
           console.log(address); 
           var addres="";
           getAddress(address).then(data=>{
            if(data=="not")
            {
              addres=" ";
            }
            else
            {
              addres=data;
            }
            
         console.log("s"+data)
            
          }).then(()=>{


           
            var coupons="";
            if (Cookies.get('couponInfo')) {
            coupons= { 
              coupon_lines: [
                {
                    code:  `${coupons}`
                }
             ],
            }
            }
            else
            {
              coupons= { 
                coupon_lines: [
                  {
                      code:""
                  }
               ],
              }
              
            }
            var a=JSON.parse(Cookies.get('userInfo'));
         //   console.log("at u"+a)
            const data12 = {
              payment_method: "Paypal",
              payment_method_title:"Paypal",
              set_paid: true,
              customer_id:a._id,
              billing: {
                first_name: `${fname} `,
                last_name: `${lname}`,
                address_1: `${addres}`,
                address_2: "",
                city: "Berlin",
                state: "",
                postcode: `${pin}` ,
                email: `${email}`,
                phone: `${phone}`,
              },
              shipping: {
                first_name: `${fname} `,
                last_name: `${lname}`,
                address_1: `${addres}`,
                address_2: "",
                city: "Berlin",
                state: "",
                postcode: `${pin}` ,
               
               
              },
              line_items: item_cart,
              coupons,
              shipping_lines: [
                {
                  method_id: "flat_rate",
                  method_title: "Flat Rate",
                  total: "0.00"
                }
              ],
              meta_data: [
                {'key': "woofood_order_type", 'value': liferRef.current},

                {'key': "is_vat_exempt", 'value': 'no'},
              
              // {'key': keyTime, 'value': deliveryTime},
               //{'key': "PaypalID", 'value': payPalID}
             ]
            };
            //submitHandler(data)
            console.log(data12);
            
            var d = axios.post(`https://lms.shop-template.de/wp-json/wc/v3/orders?&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`,data12)
            .then(res => res.data)
            d.then(data=>{
           console.log(data.id)
           notifySuccess('Your Order Confirmed!');
           router.push(`/order/${data.id}`);
               notifySuccess('Your Order Confirmed!');
               Cookies.remove('couponInfo');
               emptyCart();
              setIsCheckoutSubmit(false);
            })
          })
            
        }
       
       })
       .catch((err) => {
         console.log("test" + err);
         console.log({ ...err });
         notifyError(err ? err.response.data.message : err.message);
         router.push('/checkout')
       });
      })
      }
    if (Cookies.get('couponInfo')) {
      const coupon = JSON.parse(Cookies.get('couponInfo'));
//console.log("at u"+coupon)
      setCouponInfo(coupon);
      setDiscountPercentage(coupon.discountPercentage);
      setMinimumAmount(coupon.minimumAmount);
    }
  }, []);

  //remove coupon if total value less then minimum amount of coupon
  useEffect(() => {
    if (minimumAmount - discountAmount > total || isEmpty) {
      setDiscountPercentage(0);
      Cookies.remove('couponInfo');
    }
  }, [minimumAmount, total]);

  //calculate total and discount value
  useEffect(() => {
   
    let totalValue = '';
    let subTotal = (cartTotal + shippingCost).toFixed(2);
    let discountAmount = subTotal * (discountPercentage / 100);
        console.log(subTotal)
    totalValue = subTotal - discountAmount;
    setDiscountAmount(discountAmount);
    setTotal(totalValue);
  }, [cartTotal, shippingCost, discountPercentage]);

  //if not login then push user to home page
  useEffect(() => {
   /* if (!userInfo) {
      router.push('/');
      console.log(userInfo)
    }
    else
    {*/
      if((Cookies.get('googlemap')) == "true")
      {
        addr=JSON.parse(Cookies.get('addr'));
       // console.log("at u"+addr)
        //addr=addr.address
        console.log(addr)
      }
      else
      {
        addr= data.address_1;
      }
     
   
      if(userInfo)
      {
        var a=JSON.parse(Cookies.get('userInfo'))
       // console.log("at u"+a)
        //console.log(a.address)
        //console.log(userInfo.name)
        setValue('firstName', a.name);
        setValue('address_1',   "");
        setValue('lastName', a.last);
        setValue('address', shippingAddress.address);
        setValue('contact', a.phone);
        setValue('email', a.email);
        setValue('city', "Berlin");
        setValue('country', "Germany");
        setValue('zipCode', a.pincode);
      }
    else
    {  
    setValue('firstName', shippingAddress.firstName);
    setValue('address_1',   Cookies.get('addr'));
    setValue('lastName', shippingAddress.lastName);
    setValue('address', shippingAddress.address);
    setValue('contact', shippingAddress.contact);
    setValue('email', shippingAddress.email);
    setValue('city', "Berlin");
    setValue('country', "Germany");
    setValue('zipCode', shippingAddress.zipCode);
  }
  }
  , []);
//paypal
  const submitHandler = async (data) => {
    
    console.log("tezzzzdlref"+dlRef.current)
    console.log("tezzzzdelref"+deliveryRef.current)
  if(dlRef.current==false && deliveryRef.current==false  )
  {
      console.log("tezzzzref"+deliveryRef.current)
      console.log("tezzzz1")
      notifyError("Unfortunately, delivery to your address is currently not possible")
      //alert("Unfortunately, delivery to your address is currently not possible");
   
    
  }
    //else if(dlRef.current==true && deliveryRef.current==false || dlRef.current==false && deliveryRef.current==true   )
    else
    {
      
    var g="yy";
    //const addr = JSON.parse(Cookies.get('addr'));
    //console.log("123456")
     console.log("123456"+Cookies.get('addr'))

    dispatch({ type: 'SAVE_SHIPPING_ADDRESS', payload: data });
    d=data;
    
    
    //console.log (data)
    setIsCheckoutSubmit(true);
    //console.log( "jjjj"+Cookies.get('googlemap'))
    //console.log(data)
    
    /*let orderInfo = {
      name: `${data.firstName} ${data.lastName}`,
      address: addr,
      contact: data.contact,
      email: data.email,
      city: data.city,
      country: data.country,
      zipCode: data.zipCode,
      shippingOption: data.shippingOption,
      paymentMethod: data.paymentMethod,
      status: 'Pending',
      cart: items,
      subTotal: cartTotal,
      shippingCost: shippingCost,
      discount: discountAmount,
      total: total,
    };*/
    var item_cart=[];
    items.map((item,index)=>
    {
      item_cart.push({
        product_id:item.id,
        quantity:item.quantity,
        tax_class:"reduzierter-preis",
       
      });
    })
   
    if((Cookies.get('googlemap')) == "true")
    {
      addr=Cookies.get('addr');
      console.log(addr)
      
      
    }
    else
    {
      addr= data.address_1;
    }



        var addres="";
        
           getAddress(placeid.current).then(data=>{
            if(data=="not")
            {
              addres=" ";
            }
            else
            {
              addres=data;
              console.log(addres)

            }
            if(liferRef.current=="")
            {
              console.log("cc"+liferRef.current)
             liferRef.current="delivery"
          }
                       
          }).then(()=>{
            var coupons="";
            if (Cookies.get('couponInfo')) {
            coupons= { 
              coupon_lines: [
                {
                    code:  `${coupons}`
                }
             ],
            }
            }
            else
            {
              coupons= { 
                coupon_lines: [
                  {
                      code:""
                  }
               ],
              }
              
            }
            var a=JSON.parse(Cookies.get('userInfo'));
           // console.log("at u"+a)
          console.log(data)
            const data123 = {
              payment_method: data.paymentMethod,
              payment_method_title:data.paymentMethod,
              set_paid: true,
              customer_id:a._id,
              billing: {
                first_name: `${data.firstName} `,
                last_name: `${data.lastName}`,
                address_1: addres,
                address_2: "",
                city: data.city,
                state: "",
                postcode: data.zipCode,
                
                email: data.email,
                phone: data.contact,
              },
              shipping: {
                first_name: `${data.firstName} `,
                last_name: `${data.lastName}`,
                address_1: addres,
                address_2: "",
                city: data.city,
                state: "",
                postcode: data.zipCode,
                
               
              },
              line_items: item_cart,
              coupons,
              shipping_lines: [
                {
                  method_id: "flat_rate",
                  method_title: "Flat Rate",
                  total: "0.00"
                }
              ],
              
              meta_data: [
                {'key': "woofood_order_type", 'value': liferRef.current},
                {'key': "is_vat_exempt", 'value': 'no'},
               //{'key': "PaypalID", 'value': payPalID}
             ]
        
            };
            console.log(data.paymentMethod)
            if (data.paymentMethod === 'COD') {
    
       
      
              //console.warn(items);
             var d = axios.post(`https://lms.shop-template.de/wp-json/wc/v3/orders?&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`,data123)
              .then(res => res.data)
              d.then(data=>{
             console.log(data.id)
             notifySuccess('Your Order Confirmed!');
             router.push(`/order/${data.id}`);
                 notifySuccess('Your Order Confirmed!');
                 Cookies.remove('couponInfo');
                 emptyCart();
                setIsCheckoutSubmit(false);
              }).catch((err) => {
                console.log("test" + err);
                console.log({ ...err });
                notifyError(err ? err.response.data.message : err.message);
                router.push('/checkout')
              });
             
             
              
          //  OrderServices.addOrder(orderInfo)
            /*.then((res) => {
                router.push(`/order/${res.id}`);
                
                Cookies.remove('couponInfo');
                emptyCart();
                setIsCheckoutSubmit(false);
              })
              .catch((err) => {
                notifyError(err.message);
                setIsCheckoutSubmit(false);
              });*/
          }
          setdata1(JSON.stringify(data));
   // console.log("json "+data1)


    if (data.paymentMethod === 'Card') {
      if (!stripe) {
        return;
      }
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } =(async()=> await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      }));

      if (error && !paymentMethod) {
        setError(error.message);
      } else {
        setError('');
        const orderData = {
          ...data123,
          cardInfo: paymentMethod,
        };
        console.log(paymentMethod)

       /* OrderServices.addOrder(orderData)
          .then((res) => {
            router.push(`/order/${res._id}`);
            notifySuccess('Your Order Confirmed!');
            Cookies.remove('couponInfo');
            emptyCart();
            setIsCheckoutSubmit(false);
          })
          .catch((err) => {
            notifyError(err.message);
            setIsCheckoutSubmit(false);
          });*/
          var d = axios.post(`https://lms.shop-template.de/wp-json/wc/v3/orders?&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`,data123)
          .then(res => res.data)
              d.then(data=>{
             console.log(data.id)
             notifySuccess('Your Order Confirmed!');
             router.push(`/order/${data.id}`);
                 notifySuccess('Your Order Confirmed!');
                 Cookies.remove('couponInfo');
                 emptyCart();
                setIsCheckoutSubmit(false);
              })

      }
    }




    if (data.paymentMethod === 'paypal') 
    
    
    {
     

      console.log(data123)
      //setdata1(JSON.stringify(data123));
    console.log(d)

      console.log("paypal");

      let currency = "1 EUR";
   currency.replace(" EUR", "");


// Replacing " " (space) to "" empty space

if((Cookies.get('googlemap')) == "true")
{
  addr=Cookies.get('addr');
 // addr=addr.address
  console.log(addr)
}
else
{
  addr= data.address_1;
}
addr = addr.replace(/ /g, '%')
console.log(addr); // BJ721JL
   var dataDetail = {
     intent: "sale",
     payer: {
       payment_method: "paypal",
     },
     transactions: [
       {
         amount: {
           total: 100,
           currency: "EUR",
           details: {
             subtotal: 100,
             tax: "0",
             shipping: "0",
             handling_fee: "0",
             shipping_discount: "0",
             insurance: "0",
           },
         },
       },
     ],
     redirect_urls: {
       return_url: "http://localhost:3000/checkout?fname="+`${data.firstName}`+"&lname="+`${data.lastName}`+"&address="+`${placeid.current}`+"&email="+`${data.email}`+"&phone="+`${data.contact}`+"&pin="+`${data.zipCode}`,
       cancel_url: "http://localhost:3000/checkout",
     },
   };
   console.log("http://localhost:3000/checkout?fname="+`${data.firstName}`+"&lname="+`${data.lastName}`+"&address="+`${addr}`+"&email="+`${data.email}`+"&phone="+`${data.contact}`+"&pin="+`${data.zipCode}`)
   const s=JSON.stringify(dataDetail);
   console.log("res1" + s);
   fetch("https://api.sandbox.paypal.com/v1/oauth2/token", {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Accept-Language": "en_US",
       "Content-Type": "application/x-www-form-urlencoded",
       Authorization:
         "Basic " +
         btoa(
           "ARWLCWnwY6EOvmNM1swqY7oXsuxi6smocmEWVcfeM-WgoXTAWYdWdG9V4TTgPIyqBbaWvtFr2sgFp9n0:ENqtDmPu77gMx9UakQDEO79tovEnV44t7hDNgMMeWpSDOfa0QQbsjVOwpWwIAm454Uo3XEmWTapWdoAc"
         ),
     },
     body: "grant_type=client_credentials",
   })
     .then((response) => response.json())
     .then((responseJson) => {
    console.log("res" + responseJson.access_token);
    acc=responseJson.access_token;
    console.log(acc)
       axios
         .post(
           "https://api.sandbox.paypal.com/v1/payments/payment",
            s,
           {
             
             headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${acc}`,
             },
           }
         )
         .then((response) => {
           console.log(response);
           const { id, links } = response.data;
           const approvalUrl = links.find(
             (data) => data.rel == "approval_url"
           );

           console.log(approvalUrl)
           router.push(approvalUrl.href)
           /*let newWindow = open(approvalUrl.href, 'example', 'width=300,height=300')
           newWindow.focus();
           
           alert(newWindow.location.href); // (*) about:blank, loading hasn't started yet
           
           newWindow.onload = function() {
             let html = `<div style="font-size:30px">Welcome!</div>`;
             newWindow.document.body.insertAdjacentHTML('afterbegin', html);
           };*/
          })
         .catch((err) => {
           console.log("test" + err);
           console.log({ ...err });
         });
     })
     .catch((err) => {
       console.log({ ...err });
     });
  
     
    }







   
  
          })
    



    














    












        
      }
   
  };
  const handleAddress = (e) => {
    console.log("pincodee="+pincodeRef.current)
    setValue('zipCode', pincodeRef.current);
    
   }

 

  const handleShippingCost = (value) => {
    setShippingCost(value);
  };

  const handleCouponCode = (e) => {
    e.preventDefault();
  
    if (!couponRef.current.value) {
      notifyError('Please Input a Coupon Code!');
      return;
    }
    else
    {
     
      checkCoupons(couponRef.current.value).then(data=>{
       
                   console.log(data)
                   if(!data==0)
                   {
                     var couponInfo={"discountPercentage":data,"minimumAmount":0};
                    notifySuccess('Coupon is Applied!');
                    setDiscountPercentage(data);
                    setMinimumAmount(0);
                    dispatch({ type: 'SAVE_COUPON', payload: couponInfo });
                    console.log(couponInfo)
                     Cookies.set('couponInfo', JSON.stringify(couponInfo));
                     
                   }
      })
    }
    /*const result = data.filter(
      (coupon) => coupon.couponCode === couponRef.current.value
    );

    if (result.length < 1) {
      notifyError('Please Input a Valid Coupon!');
      return;
    }

    if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
      notifyError('This coupon is not valid!');
      return;
    }

    if (total < result[0]?.minimumAmount) {
      notifyError(
        `Minimum ${result[0].minimumAmount} USD required for Apply this coupon!`
      );
      return;
    } else {
      notifySuccess('Coupon is Applied!');
      setDiscountPercentage(result[0].discountPercentage);
      setMinimumAmount(result[0]?.minimumAmount);
      dispatch({ type: 'SAVE_COUPON', payload: result[0] });
      Cookies.set('couponInfo', JSON.stringify(result[0]));
    }*/
  };

  return {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    stripe,
    couponInfo,
    couponRef,
    pincodeRef,
    deliveryRef,
    dlRef,
    liferRef,
    placeid,
    handleCouponCode,
    handleAddress,
    discountPercentage,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    isCheckoutSubmit,
  };
};

export default useCheckoutSubmit;
