import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { CardElement } from '@stripe/react-stripe-js';
import Link from 'next/link';
import useSWR from "swr";  
import { useRouter } from 'next/router';
import {
  IoReturnUpBackOutline,
  IoArrowForward,
  IoBagHandle,
  IoWalletSharp,
  IoChatbox,
} from 'react-icons/io5';
import { ImCheckboxChecked, ImCheckboxUnchecked, ImCreditCard, ImPaypal } from 'react-icons/im';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Geocode from "react-geocode";
//internal import
import Layout from '@layout/Layout';
import Label from '@component/form/Label';
import Error from '@component/form/Error';
import CartItem from '@component/cart/CartItem';
import InputArea from '@component/form/InputArea';
import InputShipping from '@component/form/InputShipping';
import InputPayment from '@component/form/InputPayment';
import useCheckoutSubmit from '@hooks/useCheckoutSubmit';
import { notifyError, notifySuccess } from '@utils/toast';
import Loading from '@component/preloader/Loading';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { LoaderProvider, useLoading, BallTriangle } from '@agney/react-loading';
export var a="jj";

var today = new Date();
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { get } from 'react-hook-form';
import { isConstructorDeclaration } from 'typescript';
import e from 'cors';
const Checkout = () => {


 var  Amount=0;
  var startTime=14;
    var  endTime=20;
     var globalpincode=12349;
     var globaldelivery=true;
  const router = useRouter();
  const {t}=useTranslation();
  const [value, setValue] = useState(null);
  var regex = /[?&]([^=#]+)=([^&#]*)/g,
       params = {},
       match;
     while ((match = regex.exec(router.asPath))) {
       params[match[1]] = match[2];
     }
     console.log(params.paymentId);
     var pid = params.PayerID;

   
     
     


  const {
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
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    isCheckoutSubmit,
  } = useCheckoutSubmit();
  
  const [lifer, setlifer] = useState('Lieferung');
  const [delivery, setdelivery] = useState(false);
  const [amounts, setamounts] = useState();
  const [time, settime] = useState();
  Cookies.set('googlemap','false');

 useEffect(() => {
  // Run! Like go get some data from an API.

 
}, []);
/*async function getAddress(value)
{
  const a =await(value.value)
  a=a.place_id;
  placeid.current=a;
  console.log("pp"+placeid.current);
 var pincode="";
  try {
    const response = await fetch(
      "https://maps.googleapis.com/maps/api/place/details/json?place_id="+a+"&key=AIzaSyDZ4O-eIuewDgYJWGDw2WZD85b989ezwi8", {
        headers: {
          'Access-Control-Allow-Origin':'*', 
          "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
          'Access-Control-Allow-Credentials': 'true'
        }});

    const json = await response.json();
   // console.log(json);
    //console.log(json.rows);
    var c = json.result;
    //console.log(c.address_components[0])
    var cc=c.address_components;
    cc.map((item,index)=>{
     //console.log(item.types[0])
      if(item.types[0]=='postal_code')
    {
   //console.log(item.long_name)
   pincode=item.long_name;
    }
    else
    {
     pincode="not"
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
    
    pincode=String(pincode);
   // console.log(pincode)
    return pincode;
    //return await(pincode)
  }
 
}*/
/*async function test1(l,ln)
{
    //console.log(l + " test "+ln );
   
  try {
      const response = await fetch(
        "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=" +
        l  +
          "%2C" +
          ln +
          "+&origins=52.54208%2C13.41142&key=AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk", {
            headers: {
              'Access-Control-Allow-Origin':'http://localhost:3000/', 
              "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
              'Access-Control-Allow-Credentials': 'true'
            }});
      const json = await response.json();
     // console.log(json);
      //console.log(json.rows);
      var c = json.rows[0].elements;
      var km = c[0].distance.value;
      //console.log(km);
      if (km >= Distance) {
        global.delposible = 1;
        //console.log("Unfortunately, delivery to your address is currently not possible")
        setdelivery(false)
        deliveryRef.current=false
       notifyError("Unfortunately, delivery to your address is currently not possible")
        
      } else {
        global.delposible = 1;
      //  console.log("possible")
        setdelivery(true)
        deliveryRef.current=true
        //notifySuccess("poosible");
      }
   //   console.log(km);
      //this.setState({ data2: json });
    } catch (error) {
      //console.log(error);
    } finally {
      //console.log(json);
      //this.setState({ isLoading: false });
    }
}*/
/*if(globaldelivery)
{
  
 global.delposible = 1;

 console.log("Unfortunately, delivery to your address is currently not possible")
 setdelivery(false)
 deliveryRef.current=false
notifyError("Unfortunately, delivery to your address is currently not possible")

}
else
{
console.log("no")
 global.delposible = 1;
  console.log("possible")
globaldelivery=true
setdelivery(true)
  deliveryRef.current=true
 notifySuccess("poosible");
}*/

if(value)
{
  console.log(value)
  getplaceid(value).then(placeid=>{
  if(router.query.query==placeid)
  {
    if(globalpincode)
    {
      pincodeRef.current=globalpincode;
      handleAddress()
      console.log("--------------------globalpincode----------------------------")
       console.log(globalpincode)
   console.log(globalpincode)
   //router.push(`/checkout`, null, { scroll: true });
   globalpincode=null
   if(globaldelivery)
   {
   global.delposible = 1;
  console.log("possible")
   setdelivery(true)
  deliveryRef.current=true
   }
   else
   {
    global.delposible = 1;
    setdelivery(false)
    deliveryRef.current=false
   notifyError("Unfortunately, delivery to your address is currently not possible")
   }
    }
  }
  else
  {
    
       //  router.push(`/checkout?query=${placeid}&lat=${l}&lng=${ln}`, null, { scroll: true });
      // router.push(`/checkout?query=${placeid}`, null, { scroll: true });
       var l;
       var ln;
       var a=value.value
       var aa=a.terms;
       if(typeof(aa[1])=="undefined")
       {
        notifyError("please enter Correct addtress")
       }
       else
     {
       Cookies.set('addr',aa[1].value );
       Cookies.set('googlemap','true');
       console.log(aa[1].value)
     }
      
       Geocode.setApiKey("AIzaSyDZ4O-eIuewDgYJWGDw2WZD85b989ezwi8");  
       Geocode.fromAddress(value.label).then(
           (response) => {
             const { lat, lng } = response.results[0].geometry.location;
             l=lat;
             ln=lng;
             
             router.push(`/checkout?query=${placeid}&lat=${l}&lng=${ln}`, null, { scroll: true });
           },
           (error) => {
             console.error(error);
           }
         ) 
         
  }
  })
 


}

  async function Lieferung()
  {
   
    var datas = fetch(`https://lms.shop-template.de/data.php`,{ mode: 'no-cors'})
     .then(res => res.data)
  console.log(datas);


    console.log(startTime+ " iII " +endTime)
    deliveryRef.current=false;
    setlifer("Lieferung")
    dlRef.current=false;
    liferRef.current="delivery"
    settime(false)
      var today = new Date();
      if(9<startTime || 9>endTime)
      {
       settime(false)
       }
      else
      {
        settime(false)
      //  console.log("taxxx "+today.getHours()+"<"+data+ "&&"+today.getHours()+">"+data1 );
      }
      
  
  }
 function Abholung()
 {
  if(9<startTime || 9>endTime)
  {
  settime(true)
  setdelivery(true)
  deliveryRef.current=true;
  dlRef.current=true;
  liferRef.current="pickup";
  setlifer("Abholung")
  }
  else
  {
    settime(false)
    setdelivery(true)
    deliveryRef.current=true;
    dlRef.current=true;
    liferRef.current="pickup";
    setlifer("Abholung")
  }
 }
 function coupon()
 {
   console.log("try");
 }

async function getplaceid(value)
{ var s="";
  var a =await(value.value)
  a=a.place_id;
  placeid.current=a;
  console.log("pp"+placeid.current);
  s=String(a)
  return s;
  
}
/*if(value==0)
{ 
  
  var l;
    var ln;
  //  console.log(value.value?.place_id)
    //placeid.current=value.value?.place_id
    getplaceid(value)
    


   /* getAddress(value).then(data=>{
      if(data=="not")
      {
        pincodeRef.current=" ";
      }
      else
      {
        pincodeRef.current=data;
      }
      

      console.log("pincode="+pincodeRef.current)
      handleAddress()
    })*/
   
    
   /* var a=value.value
    var aa=a.terms;
    console.log()
    if(typeof(aa[1])=="undefined")
    {
     notifyError("please enter Correct addtress")
    }
    else
  {
    Cookies.set('addr',aa[1].value );
    Cookies.set('googlemap','true');
    console.log(aa[1].value)
  }
    
    Geocode.setApiKey("AIzaSyDZ4O-eIuewDgYJWGDw2WZD85b989ezwi8");  
    Geocode.fromAddress(value.label).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
         // console.log(lat, lng);
          l=lat;
          ln=lng;
          /*router.push(
            `/checkout?placeid=${l}`
      
          );*/
       
       /* },
        (error) => {
          console.error(error);
        }
      ) 
      
    
  
  //setModalVisible(false);
  

  
    //console.log("jss");
//console.log(value.label)
}*/
var dd=true;
  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
      {pid?(<Loading loading={true}/>):(
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0 md:col-span-2">
       
             
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-group">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      01. {t('Personal Details')}
                    </h2>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={t("First Name")}
                          name="firstName"
                          type="text"
                          placeholder="John"
                        />
                        <Error errorName={errors.firstName} />
                      </div>
                  
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={t("Last name")}
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                        />
                        <Error errorName={errors.lastName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={t("Email address")}
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                        />
                        <Error errorName={errors.email} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label={t("Phone number")}
                          name="contact"
                          
                          type="tel"
                          placeholder="+49162-6532956"
                        />

                        <Error errorName={errors.contact} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                    
                    </h2>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6">
                  <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      02. {t('Shipping Details')}
                    </h2>
                    Straße 
                       <GooglePlacesAutocomplete
                         autocompletionRequest={{
                          bounds: [
                            { lat: 52.54208, lng: 13.41142 }
                            
                          ],
                          componentRestrictions: {
                          country: ['de'],
                          }
                        }}
                     
                     apiKey="AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk"
                     apiOptions={{ language: 'de', region: 'de' }}
                     
                     selectProps={{
                       innerProps:{
                         
                       },
                     value,
                    onChange:setValue,
                    
                      }}
                    />
                      
                             <Error errorName={errors.address_1} />
        <br></br>
      
                       {(!value)? (<InputArea
                          register={register}
                          label=""
                          address={dd}
                          name="address_1"
                          type="text"
                          placeholder={t("Please select/fill the address")}
                        />):(<div></div>)}
                        
                      </div>
                     
                      {/*<div className="col-span-6">
                      <InputArea
                          register={register}
                          label="Zimmer/Wohung Number"
                          
                          name="address"
                          type="text"
                          placeholder="12a "
                        />
                        <Error errorName={errors.address} />
                       </div>*/}

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <InputArea
                         
                          register={register}
                        
                          label={t("City")}
                         
                           name="city"
                          type="text"
                          placeholder="Berlin"
                        />
                        <Error errorName={errors.city} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          label={t("Country")}
                          name="country"
                          type="text"
                          placeholder="DE"
                        />
                        <Error errorName={errors.country} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          label={t("Postal")}
                          name="zipCode"
                          type="text"
                          placeholder="2345"
                        />
                        <Error errorName={errors.zipCode} />
                      </div>
                    </div>

                   {/* <Label label="Shipping method" />
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value="FedEx"
                          time="Today"
                          cost={60}
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value="UPS"
                          time="7 Days"
                          cost={20}
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>
  </div>*/}
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      03. {t('Payment Details')}
                    </h2>
                  
                    {showCard && (
                      <div className="mb-3">
                        <CardElement />{' '}
                        <p className="text-red-400 text-sm mt-1">{error}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name={t("Cash On Delivery")}
                          value="COD"
                          Icon={IoWalletSharp}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name={t("Credit Card")}
                          value="Card"
                          Icon={ImCreditCard}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <InputPayment
                          setShowCard={setShowCard}
                          register={register}
                          name="Paypal"
                          value="paypal"
                          Icon={ImPaypal}
                        />
                        <Error errorName={errors.paymentMethod} />
                      </div>

                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                    <div className="col-span-6 sm:col-span-3">
                      <Link href="/search?Category=28">
                        <a className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full">
                          <span className="text-xl mr-2">
                            <IoReturnUpBackOutline />
                          </span>
                          {t('Continue Shopping')}
                        </a>
                      </Link>
                      
                    </div>
                    
                   
                    <div className="col-span-6 sm:col-span-3">
                  
    
                  
                      <button
                        type="submit"
                        disabled={isEmpty || !stripe || isCheckoutSubmit || cartTotal<=Amount || time  }
                        className="bg-[#ec3852] hover:bg-green-600 border border-[#ec3852] transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                      >
                          {t('Confirm Order')}{' '}
                        <span className="text-xl ml-2">
                          {' '}
                          <IoArrowForward />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
           {/* lifer option 
           <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
             
            </div>
            {/*Lifer option end */}


            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
           
            <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <h2 className="font-semibold font-serif text-lg pb-4">
                  
                </h2>
                <div class="flex justify-center space-x-7">
                
  <div class="form-check form-check-inline ">
  
  <button
     onClick={Lieferung}
      
      className="w-full py-3 px-3 rounded-lg bg-[#ec3852] hover:bg-green-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
    >
       
      <span className="rounded-lg font-bold font-serif py-2 pl-2 px-4 bg-white text-[#ec3852]">
      {lifer=="Lieferung"?( <ImCheckboxChecked/>):( <ImCheckboxUnchecked/>)}
      </span>
      <span className="align-middle font-medium font-serif pr-2 pl-6">
     {t('Delivery')}
      </span>
    </button>
  </div>
  
  <div class="form-check form-check-inline">
  <button
     onClick={Abholung}
      
      className="w-full py-3 px-3 rounded-lg bg-[#ec3852] hover:bg-green-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
    >
     
      <span className="rounded-lg font-bold font-serif py-2 px-4 bg-white text-[#ec3852] ">
      {lifer=="Abholung"?( <ImCheckboxChecked/>):( <ImCheckboxUnchecked/>)}
      </span>
      <span className="align-middle font-medium font-serif pr-2 pl-6">
      {t('Pickup')}
      </span>
    </button>
  </div>
  
</div>

               
               
              
                
              
              </div>
                <br></br>
                <br></br>











              <div className="border p-5 mt-6 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <br></br>
                {time ? (
          
          <div class="form-check form-check-inline ">
           <p className="px-0 text-center bg-white text-ls text-[#ec3852] pt-0">
          
          {t('Delivery service is currently unavailable.')}
           </p></div>
        
         ) : (<h1></h1>)}
            {cartTotal<Amount ? (
          
          <div class="form-check form-check-inline ">
           <p className="px-0 text-center bg-white text-ls text-[#ec3852] pt-0">
          
          {t('You must have an order with a minimum of')} €{Amount} {t('to place your order. Your current order total is')} €{cartTotal.toFixed(2)}
          
           </p></div>
        
         ) : (<h1></h1>)}
                <h2 className="font-semibold font-serif text-lg pb-4">
                  {t('Order Summary')}
                </h2>

                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}

                  {isEmpty && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-[#ec3852] font-semibold text-5xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">
                        {t('No Item Added Yet!')}
                      </h2>
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                  <form className="w-full">
                    {couponInfo.couponCode ? (
                      <span className="bg-green-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between">
                        {' '}
                        <p className="text-green-600">{t('Coupon Applied')} </p>{' '}
                        <span className="text-red-500 text-right">
                          {couponInfo.couponCode}
                        </span>
                      </span>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input
                          ref={couponRef}
                          type="text"
                          placeholder={t("Input Your Coupon code")}
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-[#ec3852] placeholder-gray-500 placeholder-opacity-75"
                        />
                        <button
                          onClick={handleCouponCode}
                          className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-[#ec3852] h-12 text-sm lg:text-base w-full sm:w-auto"
                        >
                         {t('Apply')}
                        </button>
                      </div>
                    )}
                  </form>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {t('Subtotal')}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                  €{cartTotal.toFixed(2)}
                  </span>
                </div>
                {/*<div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {t('Shipping Cost')}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                  €{shippingCost.toFixed(2)}
                  </span>
                    </div>*/}
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {t('Discount')}
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                  €{discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="border-t mt-4">
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                    {t('Total cost')}
                    <span className="font-serif font-extrabold text-lg">
                      {' '}
                      €{Math.round(total)}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
