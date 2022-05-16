import { useEffect, useState,Fragment  } from 'react';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
import { IoBagAddSharp, IoAdd, IoRemove } from 'react-icons/io5';

import Price from '@component/common/Price';
import Discount from '@component/common/Discount';
import ProductModal from '@component/modal/ProductModal';

const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { items, addItem, updateItemQuantity, inCart } = useCart();
  //console.log(product.name)
 function schrf(name)
  {
    var s=product.name;
    var ss;
    for (var i = 0; i < name.length; i++) {
     //console.log(s.charAt(i));
     if(name.charAt(i)=="(")
     {
      // console.log(name);
       return "s";
       break;
     }
     else
     {
       return "n"
     }
  }
  
}
  const generateCartItem = (p) => {
    const newItem = {
      ...p,
      id: p.id,
    };
    addItem(newItem);
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
    <>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={product}
      />

      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative pt-5">
        <div
          onClick={() => setModalOpen(!modalOpen)}
          className="relative flex justify-center w-full cursor-pointer"
        >
          {product.quantity === 0 && (
            <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
              Stock Outs
            </span>
          )}
          {/*<Discount product={product} />*/}
          
          <Image
            src={!(product.images.length==0) ? UserGreeting():"https://lms.shop-template.de/wp-content/uploads/2020/11/Repeat-Grid-1.png"}
           // src={require('./pp.svg')}
            width={210}
            height={180}
            alt={product}
            className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
          />
         
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-bold text-gray-600 font-bold">
            <br></br>
           
            
                
             <span className="line-clamp-1"  dangerouslySetInnerHTML={{ __html: product.name }}/>
             {/* {(schrf(product.name)=="s")?( <Image
            //src={!(product.images.length==0) ? UserGreeting():"https://lms.shop-template.de/wp-content/uploads/2020/11/Repeat-Grid-1.png"}
            src={"https://lms.shop-template.de/wp-content/uploads/2020/11/download.png"}
            width={20}
            height={30}
            alt={product}
            className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
          />):(<p>{schrf(product.name)}</p>)}
             {product.name}*/}
             
              
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price product={product} card={true} />
            {inCart(product.id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product.id && (
                      <div
                        key={item.id}
                        className="h-9 w-full  md:w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-[#ec3852] text-white rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          disabled={product.quantity === item.quantity}
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{' '}
              </div>
            ) : (
              <button
                onClick={() => generateCartItem(product)}
                disabled={product.quantity < 1}
                aria-label="cart"
                className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-[#ec3852] hover:border-[#ec3852] hover:bg-[#ec3852] hover:text-white transition-all"
              >
                {' '}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{' '}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
