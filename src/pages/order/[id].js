import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import ReactToPrint from 'react-to-print';
import React, { useContext, useEffect, useRef,useState } from 'react';
import { CSVLink } from 'react-csv';
import { IoCloudDownloadOutline, IoPrintOutline } from 'react-icons/io5';

//internal import
import Layout from '@layout/Layout';
import useAsync from '@hooks/useAsync';
import Invoice from '@component/invoice/Invoice';
import Loading from '@component/preloader/Loading';
import OrderServices from '@services/OrderServices';
import { UserContext } from '@context/UserContext';
var s;
import i18n from 'i18n';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Order =  ({ params }) => {
 const {t} =useTranslation();
  const [data, setdata] = useState([]);
  const componentRef = useRef();
  const orderId = params.id;
  
  const router = useRouter();
  console.log("test"+router.paymentId)
  const {
    state: { userInfo },
  } = useContext(UserContext);

 
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    
    var payerID=router.query;
    console.log("s"+payerID.id)
    var d = axios.get(`https://lms.shop-template.de/wp-json/wc/v3/orders/${payerID.id}?&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
    .then(res => res.data)
   
   
   d.then(data=>{
   console.log("test"+data)
   setdata(data)

    })
   
    if (!userInfo) {
      router.push('/');
    }
    console.log("test"+data.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={t("Invoice")} description="order confirmation page">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
          <div className="bg-green-100 rounded-md mb-5 px-4 py-3">
            <label>
              <span className="font-bold text-green-600">{t('Thank you ! Your order have been received !') }</span>
            </label>
          </div>
          <div className="bg-white rounded-lg shadow-sm">
           <Invoice data={data} printRef={componentRef} />
            <div className="bg-white p-8 rounded-b-xl">
              <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between">
               {/* <CSVLink data={data.cart} filename={'invoice.csv'}>
                  <button className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-[#ec3852] hover:bg-green-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md">
                    Download Invoice
                    <span className="ml-2 text-base">
                      <IoCloudDownloadOutline />
                    </span>
                  </button>
      </CSVLink>*/}
                  {/* <button className="flex items-center justify-center bg-[#ec3852] hover:bg-green-600 text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md">
               <ReactToPrint
                    trigger={() => <p>Print Invoice</p>}
                    content={() => componentRef.current}
                 />
                  <span className="ml-2 text-base">
                    <IoPrintOutline />
                  </span>
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps = ({ params }) => {
  return {
    props: { params },
  };
};

export default dynamic(() => Promise.resolve(Order), { ssr: false });
