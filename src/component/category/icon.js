import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { useCart } from 'react-use-cart';
import animationData from './wine.json';
import Lottie from 'react-lottie';
//internal import
import { SidebarContext } from '@context/SidebarContext';
import { icons } from 'react-icons/lib';

const icon = ({an}) => {
  return (
      <div>
    <Lottie options={animationData}
    height={150}
    width={180}
    />
    <h2>sddd</h2></div>
  );
};

export default icon;
