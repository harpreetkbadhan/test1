import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

//internal import
import { pages } from '@utils/data';
import useAsync from '@hooks/useAsync';
import Loading from '@component/preloader/Loading';
import { SidebarContext } from '@context/SidebarContext';
import CategoryServices from '@services/CategoryServices';
import CategoryCard from '@component/category/CategoryCard';
import ProductServices from "@services/ProductServices";
import axios from 'axios';
const Category = ({categories}) => {
  const { categoryDrawerOpen, closeCategoryDrawer } =
    useContext(SidebarContext);
 //const { data, loading, error } = useAsync();
  const [data,setdata]=useState(categories);
  const [error,seterror]=useState();
  const [loading,setloading]=useState(true);
  if(categories==undefined)
  {
  setdata([])
  }
  
  return (
    <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide rounded-lg ">
      {categoryDrawerOpen && (
        <div className="w-full flex justify-between items-center h-16 px-6 py-4 bg-[#ec3852] text-white border-b border-gray-100">
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex align-center">
            <Link href="/search?Category=28">
              <a className="mr-10">
                <Image
                  width={100}
                  height={38}
                  src="/logo/logo-light.svg"
                  alt="logo"
                />
              </a>
            </Link>
          </h2>
          <button
            onClick={closeCategoryDrawer}
            className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-[#ec3852]"
            aria-label="close"
          >
            <IoClose />
          </button>
        </div>
      )}
      <div className="overflow-y-scroll scrollbar-hide w-full max-h-full">
        {categoryDrawerOpen && (
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
            All Categories
            
          </h2>
        )}
        {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) : data.length === 0 ? (
          <div className="relative grid gap-2 p-6 rounded-lg bg-red">
         
          <Loading loading={loading} />
          </div>
        ) : (
          
          <div className="relative grid gap-2 p-6 rounded-lg bg-red">
            
            {data?.map((category) => (
              
              <CategoryCard
                product={category}
                key={category.id}
                title={category.name}
                id={category.id}
                icon="https://i.ibb.co/qNCvxT0/dumbbell.png"
                nested={category.children}
                
              />
              
              
            ))}
          </div>
        )}

        {categoryDrawerOpen && (
          <div className="relative grid gap-2 mt-5">
            <h3 className="font-semibold font-serif text-lg m-0 text-heading flex align-center border-b px-8 py-3">
              Pages
            </h3>
            <div className="relative grid gap-1 p-6">
              {pages.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="p-2 flex font-serif items-center rounded-md hover:bg-[#ec3852] w-full hover:text-[#ec3852]"
                >
                  <item.icon
                    className="flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <p className="inline-flex items-center justify-between ml-2 text-sm font-bold w-full hover:text-[#ec3852]">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;


