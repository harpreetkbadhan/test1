import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCart } from 'react-use-cart';
import { IoFlag, IoLanguage, IoSearchOutline } from 'react-icons/io5';
import { FiShoppingCart, FiUser, FiBell } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
//internal import
import NavbarPromo from '@layout/navbar/NavbarPromo';
import { UserContext } from '@context/UserContext';
import LoginModal from '@component/modal/LoginModal';
import CartDrawer from '@component/drawer/CartDrawer';
import { SidebarContext } from '@context/SidebarContext';
import { setLanguage } from 'react-geocode';

const Navbar = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [searchText, setSearchText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();
  const {t,i18n}=useTranslation();
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText('');
    } else {
      router.push(`/search?Category=28 `, null, { scroll: false });
      setSearchText('');
    }
  };

  useEffect(() => {
    if (Cookies.get('userInfo')) {
      const user = JSON.parse(Cookies.get('userInfo'));
      //console.log("at u"+user)

      setImageUrl("https://lms.shop-template.de/wp-content/uploads/2020/11/smiling.png");
    }
    if(i18n.language=="en")
    {
      setLanguage('EN-')
    }
    else
    {
      setLanguage('DE-')
    }
  }, []);
  const [currentLangauge,setLanguage] = useState('de');
function changeLanguage(value)
{
  console.log(i18n.language)
  if(i18n.language=="en")
  {
   i18n.changeLanguage('de')
   setLanguage('EN')
  }
  else
  {
    i18n.changeLanguage('en')
    setLanguage('DE')
  }
}
  return (
    <>
      <CartDrawer />
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      <div className="bg-transparent  top-0 z-20 h-30 " style={{backgroundImage: `url("https://lms.shop-template.de/wp-content/uploads/2020/10/vedis-menu.jpg")`,
   backgroundColor: "#000",
   backgroundPosition: "right bottom",
   backgroundRepeat: "no-repeat"}}>
      <div className="bg-transparent bg-contain  " style={{backgroundImage: `url(" https://lms.shop-template.de/wp-content/uploads/2020/10/side-right-copy.png")`,
   
   backgroundPosition: "right top",
   backgroundRepeat: "no-repeat",
   backgroundSize:"8%"}}>
       <div className="bg-transparent bg-contain " style={{backgroundImage: `url(" https://lms.shop-template.de/wp-content/uploads/2020/10/side-left-copy.png")`,
   
   backgroundPosition: "left top",
   backgroundRepeat: "no-repeat",
   backgroundSize:"8%"}}>
        <div className=" bg-transparent max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className=" bg-transparent top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto pl-9 pr-5">
            <Link href="/search?Category=28">
              <a className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block">
                <Image
                  width={200}
                  height={120}
                  src="/logo/vedi.png"
                  alt="logo"
                />
              </a>
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder={t('Search for products(eg fish ,Chicken)')}
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <IoSearchOutline />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
           <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             <button
                className="pr-5 text-black text-2xl font-bold"
                aria-label="Alert"
                onClick={changeLanguage}
              >
               
               {i18n.language=="de"?(<Image
                  width={30}
                  height={30}
                 // src={imageUrl || userInfo?.image}
                  src="/logo/dbb.png"
                  alt="lang"
                />):(<Image
                  width={30}
                  height={30}
                 // src={imageUrl || userInfo?.image}
                  src="/logo/germany.png"
                  alt="lang"
                />)}
               
                
              </button>
      
              <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative px-6 text-black top-2 text-2xl font-bold"
              >
                <span className="absolute z-10 top-2 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalItems}
                </span>
                <FiShoppingCart className="w-6 h-10 drop-shadow-xl" />
              </button>
              {/* Profile dropdown */}

              <button
                className="pl-5 text-black text-2xl font-bold"
                aria-label="Login"
              >
                {imageUrl || userInfo?.image ? (
                  <Link href="/user/dashboard">
                    <a className="relative top-1 w-6 h-6">
                      <Image
                        width={49}
                        height={49}
                        src={imageUrl || userInfo?.image}
                        alt="user"
                        className="bg-white rounded-full"
                      />
                    </a>
                  </Link>
                ) : userInfo?.name ? (
                  <Link href="/user/dashboard">
                    <a className="leading-none font-bold font-serif block">
                      {userInfo?.name[0]}
                    </a>
                  </Link>
                ) : (
                  <span onClick={() => setModalOpen(!modalOpen)}>
                    <FiUser className="w-6 h-6 drop-shadow-xl" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* second header */}
        <NavbarPromo />
        </div>
        </div>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
