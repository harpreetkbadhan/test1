import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import Alkoholfreie from './Alkoholfreie.json';
import wine from './wine.json';
//internal import
import useAsync from '@hooks/useAsync';
import CategoryServices from '@services/CategoryServices';

const FeatureCategory = () => {
  const router = useRouter();
  const { data, error } = useAsync(() => CategoryServices.getAllCategory());
  console.log(data);
function test(an)
{
   return  {
    loop: true,
    autoplay: true, 
    animationData: an==="Alkoholfreie Getränke" ? (Alkoholfreie):(wine) &&
     an==="Alkoholische Getränke"? (wine):(Alkoholfreie) &&
     an==="Alkoholische Getränke"? (wine):(Alkoholfreie) ,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
}
  function UserGreeting(props) {
    var v="";
    console.log(data)
     data.categories.map((item, stepIndex) => ( 
       v = item.slug
      
         ));
        
         var r='"';
         //v='"'+v+'"'
         console.log(v)
         return v;
  }
  

  return (
    <>
      {error ? (
        <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
          <span> {error}</span>
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-6">
          {data?.map((item, i) => (
            <li className="group" key={i + 1}>
              <div
                 onClick={() => console.log(item)}
                onClick={() =>
                  router.push(
                    `/search?Category=${item.id}`
                  )
                }
                className="border border-gray-100 bg-[#ec3852] rounded-lg p-4 block cursor-pointer transition duration-200 ease-linear transform group-hover:scale-100"
              >
                <div className="flex items-center">
                <Lottie options={test(item.name)}
              height={150}
              width={180}
              />
               
              
                </div>
                <h3 className="pl-3 lg:pl-4 text-sm text-white font-serif font leading-tight">
                    {item.name}
                  </h3>
               </div>   
              
            </li>
              ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
