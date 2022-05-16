import React from 'react';

import { featurePromo } from '@utils/data';
import { useTranslation } from 'react-i18next';
const FeatureCard = () => {
  const { t,i18n } = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
      {featurePromo.map((promo) => (
        <div
          key={promo.id}
          className={`rounded-lg p-6 flex items-center transition duration-200 ease-linear transform group-hover:scale-105 ${
            promo.className ? promo.className : 'bg-white-100'
          }`}
        >
          <div className="mr-3 lg:mr-5">
            <promo.icon
              className="flex-shrink-0 h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <span className="block font-serif text-sm font-semibold leading-8">
              {t(promo.title)}
            </span>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
