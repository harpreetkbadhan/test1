import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState,useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { IoBagCheckOutline, IoClose, IoBagHandle } from 'react-icons/io5';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
//internal import
import CartItem from '@component/cart/CartItem';
import LoginModal from '@component/modal/LoginModal';
import { UserContext } from '@context/UserContext';
import { SidebarContext } from '@context/SidebarContext';
var today = new Date();
const Cart = ({Distance}) => {
  
  useEffect(() => {
    // Run! Like go get some data from an API.
  
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [amounts, setamounts] = useState(); 
  const router = useRouter();
  const {t}=useTranslation();
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { toggleCartDrawer, closeCartDrawer } = useContext(SidebarContext);

  const handleOpenLogin = () => {
   // if (router.push('/?redirect=/checkout')) {
      toggleCartDrawer();
      setModalOpen(!modalOpen);
    //}
  };


  const { isEmpty, items, cartTotal } = useCart();
  const [time,settime]=useState();

  const checkoutClass = (
    <button
      onClick={closeCartDrawer}
      disabled={cartTotal<=15 || today.getHours()<9 && today.getHours()>22 } 
      className="w-full py-3 px-3 rounded-lg bg-[#ec3852] hover:bg-green-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
    >
      <span className="align-middle font-medium font-serif">
        {t('Proceed To Checkout')}
      </span>
      <span className="rounded-lg font-bold font-serif py-2 px-3 bg-white text-[#ec3852]">
      €{cartTotal.toFixed(2)}
      </span>
    </button>
  );

  return (
    <>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
        <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex items-center">
            <span className="text-xl mr-2 mb-1">
              <IoBagCheckOutline />
            </span>
            {t('Shopping Cart')} 
          </h2>
          <button
            onClick={closeCartDrawer}
            className="inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity hover:text-red-400"
          >
            <IoClose />
            <span className="font-sens text-sm text-gray-500 hover:text-red-400 ml-1">
              {t('Close')}
            </span>
          </button>
        </div>
        <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">

        


{today.getHours()<9 && today.getHours()>22 ? (
          
          <div>
             
           
           <h3 className="font-serif font-semibold text-[#ec3852] text-lg pt-5">
             
           </h3>
           <p className="px-12 text-center font-bold text-ls text-[#ec3852] pt-2">
           
{t('Delivery service is currently unavailable')}.
           </p></div>
        
         ) : (<h1></h1>)}
          {isEmpty && (
            <div className="flex flex-col h-full justify-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-[#ec3852]-100">
                  <span className="text-[#ec3852] text-4xl block">
                    <IoBagHandle />
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-[#ec3852] text-lg pt-5">
                  {t('Your cart is empty')}
                </h3>
                <p className="px-12 text-center text-sm text-[#ec3852] pt-2">
                  {t('No items added in your cart. Please add product to your cart list.')}
                </p>
              </div>
            </div>
          )}
        
        {cartTotal <= amounts ? (
          
          <div>
           <p className="px-0 text-center  text-sm text-[#ec3852] pt-0">
           {t('You must have an order with a minimum of')} €{ amounts}.00  {t('to place your order. Your current order total is')} € {cartTotal}  .
    {/*Delivery service is currently unavailable.*/}
           </p></div>
        
         ) : (<h1></h1>)}
          {items.map((item, i) => (
            <CartItem key={i + 1} item={item} />
          ))}
        </div>
        <div className="mx-5 my-3">
          {items.length <= 0 ? (
            checkoutClass
          ) : (
            <span>
              {!userInfo ? (
                <div onClick={handleOpenLogin}>{checkoutClass}</div>
              ) : (
                <Link href="/checkout">
                  <a>{checkoutClass}</a>
                </Link>
              )}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

export const getServerSideProps = async () => {

  
  var datas = await axios.get(`https://lms.shop-template.de/data.php`, {
    headers: {
      'Access-Control-Allow-Origin':'*', 
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    }})
   .then(res => res.data)
   //console.log(wooFoods)
    datas=JSON.stringify(datas)
    datas=JSON.parse(datas)
    //console.log("at u"+datas)
    const paragraph = datas;

const searchTerm = 'woofood_minimum_delivery_amount";s:';
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
console.log(Distance)
  return {
    props: {
      
      Distance
      

    },
  };
};