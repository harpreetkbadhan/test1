import React,{useEffect} from 'react';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { consumers } from 'stream';
var d;
const OrderHistory = ({ order }) => {
 
    if(order.length==0)
    {
      order={'billing':{'first_name':"",'email':""},'date_created':"",'payment_method':"",'total':""}
    }
    var orderbilling=order.billing;
   
    if(order.billing.email==a.email)
    {
     d=order;
    }
    else
    {
      d={'billing':{'first_name':""},'date_created':"",'payment_method':"",'total':""}
    }
    console.log(d)
 
  return (
    <>
   
  

      <td className="px-5 py-3 leading-6 whitespace-nowrap">
        <span className="uppercase text-sm font-medium">
          {d.id}
        
          
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">
          {d.date_created}
        </span>
      </td>

      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">{d.payment_method}</span>
      </td>
      {/*<td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
        {order.status === 'Delivered' && (
          <span className="text-[#ec3852]">{order.status}</span>
        )}
        {order.status === 'Pending' && (
          <span className="text-orange-500">{order.status}</span>
        )}
        {order.status === 'Cancel' && (
          <span className="text-red-500">{order.status}</span>
        )}
        {order.status === 'Processing' && (
          <span className="text-indigo-500">{order.status}</span>
        )}
        </td>*/}
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm font-bold">
        €{d.total}
        </span>
      </td>
    </>
  );
};

export default OrderHistory;
