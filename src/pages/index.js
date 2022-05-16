//internal import
import Link from 'next/link';



import React, { useState,useEffect } from 'react';
import Layout from '@layout/Layout';
import useFilter from '@hooks/useFilter';
import Card from '@component/cta-card/Card';
import OfferCard from '@component/offer/OfferCard';
import StickyCart from '@component/cart/StickyCart';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';
import MainCarousel from '@component/carousel/MainCarousel';
import FeatureCategory from '@component/category/FeatureCategory';
import FeatureCard from '@component/feature-card/FeatureCard';
import composite from 'sharp/lib/composite';
import productCarousel from '@component/carousel/productCarousel';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import MapModal from '@component/modal/MapModal';

import '../../i18n';
var today = new Date();
import { useRouter } from 'next/router';
const Home = ({ products }) => {
 

  const { productData } = useFilter(products);
  const [modalOpen, setModalOpen] = useState(true);
  const [value, setValue] = useState(null);

 
 const router = useRouter();
 //
 useEffect(() => {
  router.push(`/search?Category=28`);
});
  return (
    <>
     {/* <Layout>
        <div className="min-h-screen pb-14">
          <StickyCart />
          <MapModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        
         {/* <GooglePlacesAutocomplete
          apiKey="AIzaSyCmwyv5RK77UHqrzc6oxvTVemEMvlcv2wk"
      selectProps={{
    styles: {
      input: (provided) => ({
        ...provided,
        color: 'blue',
      }),
      option: (provided) => ({
        ...provided,
        color: 'blue',
      }),
      singleValue: (provided) => ({
        ...provided,
        color: 'blue',
      }),
    },
  }}
/>*/}
          {/*<div >
            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-5/5">
                  
                  <FeatureCard />
                  <br></br>
                  <div className="text-center w-full lg:w-5/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                  Featured Categories
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    Choose your feature categories.
                    
                  </p>
                  <br></br>
                </div>
                  <MainCarousel/>
                </div>
                {/*<div className="w-full hidden lg:flex">
                  {<OfferCard />}
                 
  </div>*/}
             {/* </div>
            </div>
           {/* <div className="hidden relative lg:block mx-auto max-w-screen-2xl px-3 sm:px-10">
           
            <productCarousel />
</div>*/}
         {/* </div>

          {/* feature category's
          <div className="bg-white lg:py-10 pb-100  pt-5" style={{backgroundImage: `url("https://lms.shop-template.de/wp-content/uploads/2020/10/vedis-menu.jpg")`}} >
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                   
                  </p>
                </div>
              </div>
             
              
            </div>
            <div className="mt-6">
              <ul className="text-sm flex">
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      
                    </a>
              
                </li>
                 </ul>
                </div>
          </div>
          

          {/* popular products 
          <div className="bg-gray-50 lg:py-20 py-10 mx-auto max-w-screen-2xl rounded-3xl px-3 sm:px-10 pb-8">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                  Popular Products
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                 
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {products?.slice(0, 18).map((product, i) => (
                    <ProductCard key={i + 1} product={product}/>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* promotional banner card 
          <div className="block">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="grid gap-3 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                <Card />
              </div>
            </div>
          </div>
*/
          /* discounted products 
          <div className="bg-gray-50 lg:py-20 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                  Latest Discounted Products
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See Our latest discounted products below. Choose your daily
                  needs from here and get a special discount with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {productData?.slice(0, 18).map((product, i) => (
                    <ProductCard key={i + 1} product={product}  />
                  ))}
                </div>
              </div>
            </div>
          </div>
          *
        </div>
      </Layout>*/}
    </>
  );
};

export const getStaticProps = async () => {
 

  const products = await ProductServices.getAllProducts();
  //console.log(products)
  //const result = Object.keys(products).map(key => ({[key]: products[key]}));
 
  return {
    props: {
      products: products.slice(0, 120),
    },
    revalidate: 20,
  };
};

// export const getServerSideProps = async () => {
//   const products = await ProductServices.getAllProducts();

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default Home;
