import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
  
} from 'react-share';

//internal import
import { UserContext } from '@context/UserContext';
import { FiInstagram, FiYoutube } from 'react-icons/fi';
import { ImFacebook, ImFoursquare, ImGoogle } from 'react-icons/im';

const Footer = () => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <div className="pb-10 lg:pb-0 xl:pb-0 bg-white">
      <div className="mx-auto max-w-screen- px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-20 justify-between">
          <div className="lg:pb-10 sm:pb-0 col-span-full sm:col-span-1 md:col-span-3 lg:col-span-6 lg:pr-20 mb-4 sm:mb-0">
           
           
            <div className="mt-6">
              <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
               
              </span>
              <ul className="text-sm flex">
                <li>
                <Link href="/search?Category=28">
              <a className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer">
                <Image
                  width={110}
                  height={60}
                  src="/logo/vedi.png"
                  alt="logo"
                />
              </a>
            </Link>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.facebook.com/vedis.berlin/">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-[#ec3852] hover:text-white"
                    >
                      <ImFacebook size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  
                  <Link href="https://www.youtube.com/channel/UCEJiaR3VWZx3Qk6-KLYADZw/videos">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto  text-[#ec3852] hover:text-grey"
                    >
                      <FiYoutube size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.instagram.com/vedis.berlin/">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-[#ec3852] hover:text-gray"
                    >
                      <FiInstagram size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://plus.google.com/103823139519337682107">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto  text-[#ec3852] hover:text-grey"
                    >
                      <ImGoogle size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://foursquare.com/v/vedis/55c6487b498e1003b09c900e">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto  text-[#ec3852] hover:text-grey"
                    >
                      <ImFoursquare size={34} round />
                    </a>
                  </Link>
                </li>
               



                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.provenexpert.com/vedis-indisches-restaurant/">
                    <u><a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto  text-[#ec3852] hover:text-grey"
                    >
                      2709 Bewertungen auf ProvenExpert.com
                    </a></u>
                  </Link>
                </li>
              </ul>
             
            </div>
          </div>
         {/* <div className="pb-3.5 sm:pb-0 cols-span-1 md:col-span-4">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              
            </h3>
            <ul className="text-sm flex flex-col space-y-8">
              <li className="flex items-baseline">
                <Link href="/about-us">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/contact-us">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    Contact us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/offer">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/*<divv className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Top Category
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/search?Category=fish--meat">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                  item1
                  </a>
                </Link>
              </li>

              <li className="flex items-baseline">
                <Link href="/search?Category=drinks">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                  item1
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=baby-care">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                  item1
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=beauty--health">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                  item1
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/search?Category=fruits--vegetable">
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    item1
                  </a>
                </Link>
              </li>
            </ul>
  </divv>
          <divv className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              My Account
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/dashboard' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/my-orders' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    My Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/dashboard' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    Recent Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? '/user/update-profile' : '#'}`}
                >
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    Updated Profile
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? '/user/change-password' : '#'}`}
                >
                  <a className="text-gray-600 inline-block w-full hover:text-[#ec3852]">
                    Change Password
                  </a>
                </Link>
              </li>
            </ul>
  </divv>*/}
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex flex-col-reverse md:flex-row text-center items-center md:justify-between py-4">
          <p className="text-sm text-gray-500 eading-6">
          Copyright 2022 © Vedis | Alle Rechte vorbehalten.
            <Link href="https://listandsell.de/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec3852]"
              >
                Wir ❤ Designs
              </a>
            </Link>
            
          </p>
          <ul className="hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
            <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
              <Image
                width={280}
                height={80}
                className="object-cover rounded"
                src={"https://lms.shop-template.de/wp-content/uploads/2020/05/payment-methodNew.png"}
                alt="payment method"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
