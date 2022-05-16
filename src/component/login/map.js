import Link from 'next/link';
import Common from '@component/login/Common2';
import { useTranslation } from 'react-i18next';
const map = ({ onShowRegister, setModalOpen }) => {
  const {t}=useTranslation();
  return (
    <>
      <div className="overflow-hidden bg-white mx-auto">
        <div className="text-center mb-6">
          <Link href="/search?Category=28">
            <a className="text-3xl font-bold font-serif">{t('Check delivery area')}</a>
            
          </Link>
          <h2>{t('Enter address')}</h2>
          <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
            
          </p>
        </div>

        <Common onShowRegister={onShowRegister} setModalOpen={setModalOpen} />
        
        <div className="text-center text-sm text-gray-900 mt-4">
          <div className="text-gray-500 mt-2.5">
            
            <button
              onClick={() => onShowRegister(true)}
              className="text-gray-800 hover:text-[#ec3852] font-bold mx-2"
            >
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default map;
