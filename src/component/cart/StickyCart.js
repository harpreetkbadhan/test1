import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
//internal import
import { SidebarContext } from '@context/SidebarContext';
import { transform } from '@babel/core';

const StickyCart = () => {
  const { totalItems, cartTotal } = useCart();
  const { toggleCartDrawer } = useContext(SidebarContext);
  const {t}=useTranslation();
  return (
    <button aria-label="Cart" onClick={toggleCartDrawer} className="absolute">
      <div className="right-0 w-40 float-right fixed top-2/4  align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
        <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
          <span className="text-2xl mb-1 text-[#ec3852]">
            <IoBagHandleOutline />
          </span>
          <span className="px-2 text-sm font-serif font-medium">
            {totalItems} {t('Items')}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#ec3852] p-2 text-white text-base font-serif font-medium rounded-bl-lg mx-auto">
        €{cartTotal.toFixed(2)}
        </div>
      </div>
    </button>
  );
};

export default dynamic(() => Promise.resolve(StickyCart), { ssr: false });
