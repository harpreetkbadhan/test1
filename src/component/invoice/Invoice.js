import dayjs from 'dayjs';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import i18n from 'i18n';
//internal import
import OrderTable from '@component/order/OrderTable';
import { useTranslation } from 'react-i18next';

const Invoice = ({ data, printRef }) => {
  const {t}=useTranslation()
  return (
    <div ref={printRef}>
      <div className="bg-indigo-50 p-8 rounded-t-xl">
        <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50">
          <h1 className="font-bold font-serif text-2xl uppercase">{t('INVOICE')}</h1>
          <div className="lg:text-right text-left">
            <h2 className="text-lg font-serif font-semibold mt-4 lg:mt-0 md:mt-0">
              <Link href="/search?Category=28">
                <a className="">
                  <Image
                    width={110}
                    height={70}
                    src="/logo/vedi.png"
                    alt="logo"
                  />
                </a>
              </Link>
            </h2>
            <p className="text-sm text-gray-500">
              Schoenhauser Allee 142, 10437 Berlin
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
          <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
            <span className="font-bold font-serif text-sm uppercase text-gray-600 block">
              {t('Date')}
            </span>
            <span className="text-sm text-gray-500 block">
              {data !== undefined && (
                <span>{data.date_created}</span>
              )}
            </span>
          </div>
          <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
            <span className="font-bold font-serif text-sm uppercase text-gray-600 block">
              {t('INVOICE')} No.
            </span>
            <span className="text-sm text-gray-500 block">
              #{data?.id !== undefined && data.id}
            </span>
          </div>
          <div className="flex flex-col lg:text-right text-left">
            <span className="font-bold font-serif text-sm uppercase text-gray-600 block">
              {t('INVOICE')} To.
            </span>
            <span className="text-sm text-gray-500 block">
              {data.billing?.first_name}
              
              {data.billing?.last_name}
              <br />
              {data.billing?.address_1}
              <br />
              {data.billing?.city}, {data.billing?.country}, {data.billing?.postcode}
            </span>
          </div>
        </div>
      </div>
      <div className="s">
        <div className="overflow-hidden lg:overflow-visible px-8 my-10">
          <div className="-my-2 overflow-x-auto">
            <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="text-xs bg-gray-100">
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                  >
                    Sr.
                  </th>
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                  >
                    {t('PRODUCT NAME')}
                  </th>
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                  >
                    {t('QUANTITY')}
                  </th>
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                  >
                    
                  </th>
                  <th
                    scope="col"
                    className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-right"
                  >
                    {t('AMOUNT')}
                  </th>
                </tr>
              </thead>
              <OrderTable data={data.line_items} />
            </table>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-gray-100 p-10 bg-green-50">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
          <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
              {t('PAYMENT METHOD')}
            </span>
            <span className="text-sm text-gray-500 font-semibold font-serif block">
              {data.payment_method}
            </span>
          </div>
          <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
            {t('SHIPPING COST')}
            </span>
            <span className="text-sm text-gray-500 font-semibold font-serif block">
            €{Math.round(data.shipping_total)}.00
            </span>
          </div>
          <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
            
            </span>
            <span className="text-sm text-gray-500 font-semibold font-serif block">
            
            </span>
          </div>
          <div className="flex flex-col sm:flex-wrap">
            <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">
            {t('TOTAL AMOUNT')}
            </span>
            <span className="text-2xl font-serif font-bold text-red-500 block">
            €{Math.round(data.total*100)/100}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
