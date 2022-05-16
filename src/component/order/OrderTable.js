import React from 'react';

const OrderTable = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-100 text-serif text-sm">
      {data?.map((item, i) => (
        <tr key={i}>
          <th className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
            {i + 1}{' '}
          </th>
          <td className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
          <span className="line-clamp-1"  dangerouslySetInnerHTML={{ __html: item.name }}/>
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
            {item.quantity}{' '}
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
          {/*€{Math.round((item.price+parseInt(item.total_tax)+parseInt(item.subtotal_tax)) * 100) / 100}*/}
          </td>
          <td className="px-6 py-1 whitespace-nowrap text-right font-bold text-red-500">
        
         €{Math.round((((item.total*100)/100)+(item.total_tax*100)/100))}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderTable;
