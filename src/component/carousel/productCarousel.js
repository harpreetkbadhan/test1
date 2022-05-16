import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import useAsync from '@hooks/useAsync';
import Lottie from 'react-lottie';
import Alkoholfreie from '../category/Alkoholfreie.json';
import wine from '../category/wine.json';
import { useRouter } from 'next/router';
//internal import
import { sliderData } from '@utils/data';
const productCarousel = () => {
  const router = useRouter();
  const { data, error } = useAsync(() => CategoryServices.getAllCategory());
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
  return (
   
    <Carousel
       show={3}
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
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      arrows={false}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      
      {sliderData.map((item, i) => (
        <div className="h-full relative rounded-lg overflow-hidden" key={i + 2}>
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
                <Lottie options={test(item.name)}
              height={150}
              width={200}
              />
               
              
                </div>
                <h3 className="pl-3 lg:pl-4 text-sm text-white font-serif font leading-tight">
                    {item.name}
                  </h3>
               </div>   
              
            </li>
              
 
         
          </div>
         
        </div>
      ))}
      
    </Carousel>
  );
};

export default React.memo(productCarousel);
