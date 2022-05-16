import React, { useState,useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { ImFacebook, ImGoogle } from 'react-icons/im';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Error from '@component/form/Error';
import InputArea from '@component/form/InputArea';
import useLoginSubmit from '@hooks/useLoginSubmit';
import Geocode from "react-geocode";
import axios  from 'axios';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';
import useSWR from 'swr'
const fetcher = (url) => axios.get(url).then(res => res.data)
const COMMENTS_URL = 'https://lms.shop-template.de/data.php'

const Common = ({ onShowRegister, setModalOpen,globaldelivery,globalpincode }) => {
 
  
  const { data, error } = useSWR(COMMENTS_URL, fetcher);
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);
  const {t}=useTranslation();
  const [value, setValue] = useState(null);
  const [delivery, setdelivery] = useState(null);
  const {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    GoogleLogin,
    register,
    errors,
  } = useLoginSubmit(setModalOpen);
  async function getplaceid(value)
{ var s="";
  var a =await(value.value)
  a=a.place_id;
  s=String(a)
  return s;
  
}
  
  useEffect(() => {
    console.log("------------e-e--e-e-e----------")
    console.log(error)
    console.log(data);   
if(value)
{ 
 console.log(error)
  console.log(data); 
   var l;
    var ln;
    console.log(value.label)
    Geocode.setApiKey("AIzaSyDZ4O-eIuewDgYJWGDw2WZD85b989ezwi8");  
    Geocode.fromAddress(value.label).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          l=lat;
          ln=lng;
          test1(l,ln);
        },
        (error) => {
          console.error(error);
        }
      ) 
      
    
  
  //setModalVisible(false);
  

  
    console.log("jss");
console.log(value.label)
}
async function test1(l,ln)
{
  var datas=[];
  axios.get('https://lms.shop-template.de/data.php')
  .then(response => { 
    console.log(response)
    datas=response.data;
    datas=JSON.stringify(datas)
   datas=JSON.parse(datas)
   const paragraph = datas;

const searchTerm = 'woofood_max_delivery_distance";s:';
const indexOfFirst = datas.indexOf(searchTerm);
const lengths=indexOfFirst+(searchTerm.length)+5
console.log(indexOfFirst +" "+lengths)
var Distance="";
for(var i=indexOfFirst;i<=lengths;i++)
{
Distance=Distance+datas[i];
}
Distance = Distance.slice(-5);
Distance=Distance.split('"')[1]
Distance=Distance*1000
console.log(Distance)
    console.log(l + " test "+ln );
    


  /*try {
      const response = await fetch(
        "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=" +
        l  +
          "%2C" +
          ln +
          "+&origins=52.54208%2C13.41142&key=AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk"
      );
      const json = await response.json();
      console.log(json);
      //console.log(json.rows);
      var c = json.rows[0].elements;
      var km = c[0].distance.value;
      console.log(km);
      if (km >= Distance) {
        global.delposible = 1;
        console.log("Unfortunately, delivery to your address is currently not possible")
        setdelivery("Unfortunately, delivery to your address is currently not possible")
      } else {
        global.delposible = 1;
        console.log("possible")
        setdelivery("Delivery to your address is possible")
      }
      console.log(km);
      //this.setState({ data2: json });
    } catch (error) {
      //console.log(error);
    } finally {
      //console.log(json);
      //this.setState({ isLoading: false });
    }*/

  })
  .catch(error => {
      console.log(error.response)
  });
  
  axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?destinations=' + l  +'%2C' + ln + '+&origins=52.54208%2C13.41142&key=AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk')
  .then(response => { 
    console.log(response)

  })
  .catch(error => {
      console.log(error.response)
  });
  /*var datas = await axios.get('https://lms.shop-template.de/data.php', {
    headers: {
      'Access-Control-Allow-Origin':'*', 
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    }})
 .then(res => res.data)
console.log(datas)
  datas=JSON.stringify(datas)
  datas=JSON.parse(datas)
 // console.log("at u"+datas)
  const paragraph = datas;

const searchTerm = 'woofood_max_delivery_distance";s:';
const indexOfFirst = datas.indexOf(searchTerm);
const lengths=indexOfFirst+(searchTerm.length)+5
console.log(indexOfFirst +" "+lengths)
var Distance="";
for(var i=indexOfFirst;i<=lengths;i++)
{
Distance=Distance+datas[i];
}
Distance = Distance.slice(-5);
Distance=Distance.split('"')[1]
Distance=Distance*1000
console.log(Distance)
    console.log(l + " test "+ln );
  try {
      const response = await fetch(
        "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=" +
        l  +
          "%2C" +
          ln +
          "+&origins=52.54208%2C13.41142&key=AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk"
      );
      const json = await response.json();
      console.log(json);
      //console.log(json.rows);
      var c = json.rows[0].elements;
      var km = c[0].distance.value;
      console.log(km);
      if (km >= Distance) {
        global.delposible = 1;
        console.log("Unfortunately, delivery to your address is currently not possible")
        setdelivery("Unfortunately, delivery to your address is currently not possible")
      } else {
        global.delposible = 1;
        console.log("possible")
        setdelivery("Delivery to your address is possible")
      }
      console.log(km);
      //this.setState({ data2: json });
    } catch (error) {
      //console.log(error);
    } finally {
      //console.log(json);
      //this.setState({ isLoading: false });
    }*/
}
  }, [value]); 
/*
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
    console.log("Unfortunately, delivery to your address is currently not possible")
    setdelivery("Unfortunately, delivery to your address is currently not possible")
   }
   else
   {
    global.delposible = 1;
    console.log("possible")
    setdelivery("Delivery to your address is possible")
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
             
             router.push(`/search?Category=${router.query.Category}&querys=${placeid}&lat=${l}&lng=${ln}`, null, { scroll: true });
           },
           (error) => {
             console.error(error);
           }
         ) 
         
  }
  })
 


}
*/
  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >   <div style={{ height: 300 }}>
           <div style={{ width: "100%" }}><GooglePlacesAutocomplete
           
           apiKey="AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk"
             selectProps={{
           value,
         onChange: setValue,
        }}
         />
         </div> </div>
         <div><h1>{t(delivery)}</h1></div>
        {/*<divv className="grid grid-cols-1 gap-5">
          {!onShowRegister && (
            <div className="form-group">
              <InputArea
                register={register}
                label="Name"
                name="name"
                type="text"
                placeholder="Full Name"
                Icon={FiUser}
              />

              <Error errorName={errors.name} />
            </div>
          )}

          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="justin@gmail.com"
              label="Address"
              name="email"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={errors.email} />
          </div>

          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="12345678"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={errors.password} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
            <div className="flex ms-auto">
              <button
                type="button"
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-[#ec3852] text-white hover:bg-green-600 transition-all focus:outline-none my-1"
          >
            {onShowRegister ? <span>Login</span> : <span>Register</span>}
          </button>
          <button
            type="handleGoogleSignIn"
            className="w-full text-center py-3 rounded bg-[#ec3852] text-white hover:bg-green-600 transition-all focus:outline-none my-1"
          >
          <span>Guest</span>
          </button>
          
        </divv>*/}
      </form>
      <div className="my-8 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">
        
      </div>

     {/* <divv className="flex justify-between flex-col lg:flex-row">
        <button className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2">
          <ImFacebook /> <span className="ml-2">Login With Facebook</span>
        </button>

        <GoogleLogin
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
          render={(renderProps) => (
            <button
              className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm md:px-2 my-1 sm:my-1 md:my-1 lg:my-0 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <ImGoogle /> <span className="ml-2">Login With Google</span>
            </button>
          )}
          onSuccess={handleGoogleSignIn}
          onFailure={handleGoogleSignIn}
          cookiePolicy={'single_host_origin'}
        />
          </divv>*/}
    </>
  );
};

export default Common;
/*
export const getServerSideProps = async (context) => {

  const {querys}=context.query;
  const {lat}=context.query;
  const {lng}=context.query;
  var globalpincode="";
  var globaldelivery=""
    if(querys)
  {
    const a=querys
   var pincode="";
    try {
      const response = await fetch(
        "https://maps.googleapis.com/maps/api/place/details/json?place_id="+a+"&key=AIzaSyDZ4O-eIuewDgYJWGDw2WZD85b989ezwi8");
  
      const json = await response.json();
      var c = json.result;
      var cc=c.address_components;
      cc.map((item,index)=>{
        if(item.types[0]=='postal_code')
      {
     pincode=item.long_name;
      }
      else
      {
       pincode="Invaild"
      }
      })
    } catch (error) {
   
    } finally {
      
      
      pincode=String(pincode);
      globalpincode=pincode;
    }
  
  }
  
  
  ////Distance
  
  var datasdistance = await axios.get(`https://lms.shop-template.de/data.php`, {
    headers: {
      'Access-Control-Allow-Origin':'*', 
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    }})
  .then(res => res.data)
  //console.log(wooFoods)
  datasdistance=JSON.stringify(datasdistance)
  datasdistance=JSON.parse(datasdistance)
  // console.log("at u"+datasdistance)
  
  
  
  const searchTerm3 = 'woofood_max_delivery_distance";s:';
  const indexOfFirst3 = datasdistance.indexOf(searchTerm3);
  const lengths3=indexOfFirst3+(searchTerm3.length)+5
  console.log(indexOfFirst3+" "+lengths3)
  var Distance="";
  for(var i=indexOfFirst3;i<=lengths3;i++)
  {
  Distance=Distance+datasdistance[i];
  }
  Distance = Distance.slice(-5);
  Distance=Distance.split('"')[1]
  Distance=Distance*1000
  
  
  if(lat)
  {
  
    try {
        const response = await fetch(
          "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=" +
          lat  +
            "%2C" +
            lng +
            "+&origins=52.54208%2C13.41142&key=AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk");
        const json = await response.json();
        var c = json.rows[0].elements;
        var km = c[0].distance.value;
        if (km >= Distance) {
          
          globaldelivery=false
      
        } else {
      
        globaldelivery=true
        
        }
  
      } catch (error) {
       
      } finally {
       
      }
  }
  
    return {
      props: {
        globaldelivery,
       globalpincode
  
      },
    };
  };*/