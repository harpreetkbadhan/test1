import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import useAsync from '@hooks/useAsync';
import Lottie from 'react-lottie';
import Alkoholfreie from '../category/Alkoholfreie.json';
import laddo from '../category/laddu.png';
import alochlic from '../category/alochlic.png';
import whisky from '../category/whisky.png';
import naan from '../category/naan.png';
import rice from '../category/rice.png';
import bowls from '../category/bowls.png';
import fish from '../category/fish.png';
import chicken from '../category/chicken.png';
import lamm from '../category/lamm.png';
import salad from '../category/salad.png';
import soup from '../category/soup.png';
import grill from '../category/grill.png';
import offer from '../category/offer.png';
import vegan from '../category/vegan.png';
import veggi from '../category/veggi.png';
import somosa from '../category/somosa.png';
import wine from '../category/wine.json';
import { useRouter } from 'next/router';
//internal import
import { sliderData } from '@utils/data';
const MainCarousel = () => {
  const router = useRouter();
  const { data, error } = useAsync();
  function test(an)
{
   
   /* loop: true,
    autoplay: true, 
    animationData: an==="Alkoholfreie Getränke" ? (Alkoholfreie):(wine) &&
     an==="Alkoholische Getränke"? (wine):(Alkoholfreie) &&
     an==="Alkoholische Getränke"? (wine):(Alkoholfreie) ,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }*/
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
  return (
   
    <Carousel
      
      additionalTransfrom={0}
      autoPlay="false"
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      infinite
      itemClass=""
      renderButtonGroupOutside={false}
      renderDotsOutside={true}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 2,
          },
          items: 2,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
        },
      }}
      arrows={false}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      
      {data?.map((item, i) => (
        <div className="h-full relative rounded-lg overflow-hidden" key={i + 1}>
          <div className="text-sm text-gray-600 hover:text-green-dark">
        
          
            <li className="group" key={i + 1}>
              <div
              
                onClick={() =>
                  router.push(
                    `/search?Category=${item.id}`
                  )
                }
                className="border border-gray-100 bg-[#ec3852] rounded-lg p-4 block cursor-pointer transition duration-200 ease-linear transform group-hover:scale-100"
              >
                <div className="flex items-center">
                <Image
          src={test(item.name)}
          width={50}
          height={50}
        />
               
              
                
                <h3 className="pl-3 lg:pl-4 text-sm text-white font-serif font leading-tight">
                    {item.name}
                  </h3>
               </div>   </div>
              
            </li>
              
 
         
          </div>
         
        </div>
      ))}
      
    </Carousel>
  );
};

export default React.memo(MainCarousel);
