import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
//internal import
import UserServices from '@services/UserServices';
import { UserContext } from '@context/UserContext';
import { notifyError, notifySuccess } from '@utils/toast';
import { object } from 'sharp/lib/is';
var u=[];
const useLoginSubmit = (setModalOpen) => {
  
 



  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   async function getdata(email)
     {
       
       const a = await axios.get(`https://lms.shop-template.de/wp-json/wc/v3/customers?per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
      .then(res => res.data)
     // console.log(res.status(200).json(a))
       var aa=await(a)
       await(a).map(function(object,i)
        { 

          if(object.username == email)
          {
            var billing=object.billing;
            var postcode=object.shipping
            console.log(object.email)
             u.push({
              _id:object.id,
              name:object.first_name,
              last:object.last_name,
              email:object.email,
              address:billing.address_1,
              phone:billing.phone,
              pincode:postcode.postcode,
             })
             
              
          }
        })
        return u;
         
        
        
      
     }
  const submitHandler = ({ fname, lname,uname,email, password }) => {

    if (fname) {
      const data12 = {
        
          email: email,
          first_name: fname,
          last_name:lname,
          username: uname,
          password:password
        
      };
      //submitHandler(data)
    
      
      var d = axios.post(`https://lms.shop-template.de/wp-json/wc/v3/customers/?consumer_key=ck_9a323f12e50b7b380f60f32f51cdb62afb2db781&consumer_secret=cs_d2b5326343a21434db21e7ec55ceb0838c45d3df`,data12)
      .then(res => res.data)
      d.then(data=>{
        
        console.log(data)
        u.push({
          _id:data.id,
          name:data.first_name,
          last:data.last_name,
          email:email,
          address:"",
          phone:"",
          pincode:"",
         })
         

        
         
         
     }).then(data=>{
      Cookies.set('userInfo', JSON.stringify(u[0]));
      console.log(u);
     
    dispatch({type: 'USER_LOGIN',payload: email});
    
    
  // router.push(redirect || '/');
   setModalOpen(false);
   notifySuccess("Register Sucessfully");



     }).catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    } 
    
    else {
      axios.post('https://lms.shop-template.de/wp-json/jwt-auth/v1/token', {
     body: JSON.stringify({
       username: email,
       password: password,
     }),
   }).then(response => { 
        console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });
      const fetchData = async () => {
        const response = await fetch("https://lms.shop-template.de/wp-json/jwt-auth/v1/token", {
          method: "POST",  
         
         body: JSON.stringify({
           username: email,
           password: password,
         }),
       });
      const data = await response.json();
        console.log(data)
   }
   fetchData()

      fetch("https://lms.shop-template.de/wp-json/jwt-auth/v1/token", {
      method: "POST",  
      mode: 'cors',
     headers: {
       Accept: "application/json",
    "Content-Type": "application/json",
       "Access-Control-Allow-Origin":'*',

       "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Header": "Content-Type, Authorization, X-Requested-With",
     },
     body: JSON.stringify({
       username: email,
       password: password,
     }),
   }).then((response) => {
       console.log(response);
    //   var s=response.status(200).json(data)
    //   console.log(s);
       if(String(response.ok)=="true")
       {
      
        var data;
       getdata(email).then(()=>{
        notifySuccess("Login Sucessfully");
      
        dispatch({ type: 'USER_LOGIN', payload: email });
        Cookies.set('userInfo', JSON.stringify(u[0]));
        console.log(u[0])
         router.push(redirect || '/checkout');
       
        setModalOpen(false);
       })
     
        //console.log(getdata());
        /*dispatch({ type: 'USER_LOGIN', payload: email });
        Cookies.set('userInfo', JSON.stringify(u));
        // router.push(redirect || '/');
       
        setModalOpen(false);*/
  }
       else
       {
        notifyError("Invaild  Username/Password");
       }
     
     });
      
     /*const a= UserServices.userLogin({
        email,
        password,
      })  /*.then((res) => {
          if (res) {*/
          //  dispatch({ type: 'USER_LOGIN', payload: "harpreetb" });
            //Cookies.set('userInfo', JSON.stringify(u));
           // router.push(redirect || '/');
           // notifySuccess(a);
           // setModalOpen(false);
          /*}
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });*/
    }
  };

  const handleGoogleSignIn = (user) => {
    
            //dispatch({ type: 'USER_LOGIN', payload: "harpreetb" });
            //Cookies.set('userInfo', JSON.stringify(u));
            router.push(redirect || '/checkout');
            //notifySuccess('Login Success!');
            //dispatch({ type: 'USER_LOGIN', payload: 'Guest' });
            setModalOpen(false);
  };

  return {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    register,
    errors,
    GoogleLogin,
  };
};

export default useLoginSubmit;
