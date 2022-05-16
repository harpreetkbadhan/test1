import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from 'react-use-cart';

import MainModal from '@component/modal/MainModal';
import Tags from '@component/common/Tags';
import Stock from '@component/common/Stock';
import Price from '@component/common/Price';
import { notifySuccess } from '@utils/toast';
import { useTranslation } from 'react-i18next';
const ProductModal = ({ modalOpen, setModalOpen, product }) => {
  const [item, setItem] = useState(1);
  const { addItem } = useCart();
const {t}=useTranslation();
  const handleAddItem = () => {
    const newItem = {
      ...product,
      id: product.id,
    };
    addItem(newItem, item);
    notifySuccess(`${item} Item Added To Cart!`);
  };
  function UserGreeting(props) {
    var v="";
     product.images.map((item, stepIndex) => ( 
       v = item.src
      
         ));
        
         var r='"';
         //v='"'+v+'"'
         //console.log(v)
         return v;
  }
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden">
          {/*<Link href={`/product/${product.slug}`} passHref> </Link>*/}
            <div
              onClick={() => setModalOpen(false)}
              className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer"
            >
              <Image
               //src={require('./pp.svg')}
               src={!(product.images.length==0) ? UserGreeting():"https://lms.shop-template.de/wp-content/uploads/2020/11/Repeat-Grid-1.png"}
                width={470}
                height={420}
                alt={product.title}
              />
            </div>
         

          <div className="w-full flex flex-col p-5 md:p-8 text-left">
            <div className="mb-2 md:mb-2.5 block -mt-1.5">
             {/* <Link href={`/product/${product.slug}`} passHref>
                
  </Link>*/}
  
  <h1
  onClick={() => setModalOpen(false)}
  className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif hover:text-black cursor-pointer"
>
   <span className="line-clamp-1"  dangerouslySetInnerHTML={{ __html: product.name }}/>
 
</h1>

                 {/* <Stock product={product} />*/}
            </div>
            <p className="text-base leading-6 text-gray-500 md:leading-7 line-clamp-3">
              
              <span className="line-clamp-5"  dangerouslySetInnerHTML={{ __html: product.description }}/>
            </p>
            <div className="flex items-center mt-4">
              <Price product={product} />
            </div>

            <div className="flex items-center mt-4">
              <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                  <button
                    onClick={() => setItem(item - 1)}
                    disabled={item === 1}
                    className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"
                  >
                    <span className="text-dark text-base">
                      <FiMinus />
                    </span>
                  </button>
                  <p className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8  md:w-20 xl:w-24">
                    {item}
                  </p>
                  <button
                    onClick={() => setItem(item + 1)}
                    className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"
                  >
                    <span className="text-dark text-base">
                      <FiPlus />
                    </span>
                  </button>
                </div>
                <button
                  onClick={handleAddItem}
                  disabled={product.quantity < 1 || item === product.quantity}
                  className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-[#ec3852] hover:bg-green-600 w-full h-12"
                >
                  {t('Add To Cart')}
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <span className="font-serif font-semibold py-1 text-sm d-block">
                <span className="text-gray-700">{/*Category:*/}</span>{' '}
                <span className="text-gray-500">{product.children}</span>
              </span>
             {/* <Tags product={product} />*/}
            </div>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default React.memo(ProductModal);
