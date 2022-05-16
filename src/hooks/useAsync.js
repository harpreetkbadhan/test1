import axios from 'axios';
import { useEffect, useState } from 'react';

import CategoryServices from '@services/CategoryServices';
const useAsync = (asyncFunction) => {
  const [data, setData] = useState([] || {});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const category = [
    {
      id:28,
      name: 'Sports & Fitness',
      type: 'Sports & Fitness',
      icon: 'https://i.ibb.co/qNCvxT0/dumbbell.png',
      children: ['Sports', 'Fitness'],
    },
    {
      id:2,
      name: 'Beauty & Health',
      type: 'Health Care',
      icon: 'https://i.postimg.cc/gjz1P7wx/beauty.png',
      children: [
        'Bath',
        'Cosmetics',
        'Oral Care',
        'Skin Care',
        'Body Care',
        'Shaving Needs',
      ],
    }];
  useEffect(() => {
   /*axios.get(`https://lms.shop-template.de/wp-json/wc/v3/products/categories?per_page=100&consumer_key=ck_82c69d8691908c5dabbbf237555148961208ad71&consumer_secret=cs_30a42538f3ecc9a73b644b26df866eee8964160b`)
    .then((res) => {
        setData(res.data);
          setError('');
          setLoading(false);
     })
  */   
   /* let unmounted = false;
    let source = axios.CancelToken.source();

    asyncFunction({ cancelToken: source.token })
      .then((res) => {
        if (!unmounted) {
          setData(category);
          setError('');
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!unmounted) {
          console.log(err.message);
          setError(err.message);
          if (axios.isCancel(err)) {
            setError(err.message);
            setLoading(false);
            setData({});
          } else {
            // console.log('another error happened:' + err.message);
            setError(err.message);
            setLoading(false);
            setData({});
          }
        }
      });

    return () => {
      (unmounted = true), source.cancel('Cancelled in cleanup');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useAsync;
