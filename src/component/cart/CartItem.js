import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useCart } from 'react-use-cart';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
//internal import
import { SidebarContext } from '@context/SidebarContext';

const CartItem = ({ item }) => {
  const { updateItemQuantity, removeItem, cartTotal } = useCart();
  const { closeCartDrawer } = useContext(SidebarContext);
  const [amounts, setamounts] = useState();
  const { t } = useTranslation();
  async function get() {
    var datas = await axios.get(`https://lms.shop-template.de/data.php`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      }
    })
      .then(res => res.data)
    console.log(datas)
    datas = JSON.stringify(datas)
    datas = JSON.parse(datas)
    // console.log("at u"+datas)


    var searchTerm = 'woofood_minimum_delivery_amount";s:';
    var indexOfFirst = datas.indexOf(searchTerm);
    var lengths = indexOfFirst + (searchTerm.length) + 5
    console.log(indexOfFirst + " " + lengths)
    var Distance = "";
    for (var i = indexOfFirst; i <= lengths; i++) {
      Distance = Distance + datas[i];
    }
    Distance = Distance.slice(-5);
    Distance = Distance.split('"')[1]

    return Distance
  }
  useEffect(() => {
    // Run! Like go get some data from an API.

  }, []);
  return (
    <>

      <div className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0">

        <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4">
          <Image
            key={item.id}
            src={"https://lms.shop-template.de/wp-content/uploads/2020/11/Repeat-Grid-1.png"}
            width={40}
            height={40}
            alt={item.title}
          />
        </div>
        <div className="flex flex-col w-full overflow-hidden">

          <span className="text-xs text-gray-400 mb-1">
            {t('Item Price')} €{item.price}
          </span>
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm md:text-base text-heading leading-5">
              <span>€{(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                <span className="text-dark text-base">
                  <FiMinus />
                </span>
              </button>
              <p className="text-sm font-semibold text-dark px-1">
                {item.quantity}
              </p>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                <span className="text-dark text-base">
                  <FiPlus />
                </span>
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
