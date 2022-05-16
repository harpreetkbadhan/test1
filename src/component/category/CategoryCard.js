import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Alkoholfreie from './Alkoholfreie.json';

import wine from './wine.json';
import laddo from './laddu.png';
import alochlic from './alochlic.png';
import whisky from './whisky.png';
import naan from './naan.png';
import rice from './rice.png';
import bowls from './bowls.png';
import fish from './fish.png';
import chicken from './chicken.png';
import lamm from './lamm.png';
import salad from './salad.png';
import soup from './soup.png';
import grill from './grill.png';
import offer from './offer.png';
import vegan from './vegan.png';
import veggi from './veggi.png';
import somosa from './somosa.png';
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
  IoRemoveSharp,
} from 'react-icons/io5';
import Lottie from 'react-lottie';
//internal import
import { SidebarContext } from '@context/SidebarContext';
import Loading from '@component/preloader/Loading';
const CategoryCard = ({product, title, icon,id, nested }) => {
  const [show, setShow] = useState(false);
  const { loading ,setloading } = useState(false);
  const showCategory = () => setShow(!show);
  const router = useRouter();
  const { closeCategoryDrawer } = useContext(SidebarContext);

  function test(an)
  {
     
      /*loop: true,
      autoplay: true, 
      animationData: an==="Alkoholfreie Getränke" ? (Alkoholfreie):(wine) &&
       an==="Alkoholische Getränke"? (wine):(Alkoholfreie) &&
       an==="Alkoholische Getränke"? (wine):(Alkoholfreie) &&  an==="ausserhaus"? (wine):(Alkoholfreie),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        


      */
     if(an=="Alkoholfreie Getränke")
     {
        return alochlic;
     }
     else if(an=="Alkoholische Getränke")
     {
       return whisky;
     }
     else if(an=="Beilagen")
     {
       return naan;
     }
     else if(an=="Biryani-Reisspezialitäten")
     {
       return rice;
     }
     else if(an=="Bowls")
     {
       return bowls;
     }
     else if(an=="Desserts")
     {
       return laddo;
     }
     else if(an=="Fisch-Spezialitäten")
     {
       return fish;
     }
     else if(an=="Hähnchen-Spezialitäten")
     {
       return chicken;
     }
     else if(an=="Lamm-Spezialitäten")
     {
       return lamm;
     }
     else if(an=="Salate")
     {
       return salad;
     }
     else if(an=="Suppen")
     {
       return soup;
     }
     else if(an=="Tandoori-Grill-Spezialitäten")
     {
       return grill;
     }
     else if(an=="Unsere Empfehlung")
     {
       return offer;
     }
     else if(an=="Vegane-Spezialitäten")
     {
       return vegan;
     }
     else if(an=="Vegetarische-Spezialitäten")
     {
       return veggi;
     }
     else if(an=="Vorspeisen")
     {
       return somosa;
     }
     
     else
     {
       return laddo;
     }
     
     
     
      
    
  }
  const handleSubCategory = (children) => {
    router.push(
      `/search?category=${children}`

    );
    console.log(router)
    
    closeCategoryDrawer();
  };
  function a()
  {
   
    return bgcolorselect
    
  }
 const [bgcolor,setbgcolor]=useState("p-2 flex items-center rounded-md bg-[white]-500 hover:bg-[#ec3852] w-full hover:text-[white]");
 const [bgcolorselect,setbgcolorselect]=useState("p-2 flex items-center rounded-md bg-[#ec3852] text-[white] hover:bg-[#ec3852] w-full hover:text-[white]");
 const [select,setselect]=useState();
 function get() {
  var a=router.query;
  
  return a.category
}
  return (
    <>
    
      <a
        onClick={() => {
         
          
          console.log("1122"+id)
          handleSubCategory(id)
          
        }
       // onClick={a}
      }
        className={!(get()==id)?(bgcolor):(bgcolorselect)}
        role="button"
      >
        {select}
        <Image
          src={test(title)}
          width={40}
          height={40}
        />
       


        <div className="inline-flex items-center justify-between ml-3 text-lg font-bold w-full hover:text-[#white]">
          {title}
          <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
            {show ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
          </span>
        </div>
      </a>
      {show ? (
        <ul className="pl-6 pb-3 pt-1 -mt-1">
          <h1>{product}</h1>
          <Image
          src="https://i.ibb.co/qNCvxT0/dumbbell.png"
          width={40}
          height={40}
          alt={title}
          aria-hidden="true"
          onClick={() => handleSubCategory(id)}
        />
        
          {/*nested.map((children) => (
            <li key={children}>
              <a
                onClick={() => handleSubCategory(children)}
                className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-green-600 cursor-pointer"
              >
                <span className="text-xs text-gray-500 pr-1">
                  <IoRemoveSharp />
                </span>
                {children}
              </a>
            </li>
          ))*/}
        </ul>
      ) : null}
    </>
  );
};

export default CategoryCard;
