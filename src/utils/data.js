import {
  // FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
  FiLocation,
} from 'react-icons/fi';
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  {
    title: 'Offer',
    href: '/offer',
    icon: FiGift,
  },
  {
    title: 'Checkout',
    href: '/checkout',
    icon: IoBagCheckOutline,
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: FiHelpCircle,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Terms & Conditions',
    href: '/terms-and-conditions',
    icon: HiOutlineDocumentText,
  },
  {
    title: '404',
    href: '/404',
    icon: FiAlertCircle,
  },
];

const userSidebar = [
  {
    title: 'Dashboard',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'My Orders',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Profile',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  }
 
];

const sliderData = [
  {
    id: 1,
    title: 'The Best Quality Products Guaranteed!',
    info: 'Dramatically facilitate effective total linkage for go forward processes...',
    url: '/search?Category=biscuits--cakes',
    image: '/slider/slider-1.jpg',
  },
  {
    id: 2,
    title: 'Best Different Type of Grocery Store',
    info: 'Quickly aggregate empowered networks after emerging products...',
    url: '/search?Category=fish--meat',
    image: '/slider/slider-2.jpg',
  },
  {
    id: 3,
    title: 'Quality Freshness Guaranteed!',
    info: 'Intrinsicly fashion performance based products rather than accurate benefits...',
    url: '/search?category=fresh-vegetable',
    image: '/slider/slider-3.jpg',
  },
];

const ctaCardData = [
  {
    id: 1,
    title: 'Taste of',
    subTitle: 'Fresh & Natural',
    image: '/cta/cta-bg-1.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    title: 'Taste of',
    subTitle: 'Fish & Meat',
    image: '/cta/cta-bg-2.jpg',
    url: '/search?Category=fish--meat',
  },
  {
    id: 3,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/cta-bg-3.jpg',
    url: '/search?Category=biscuits--cakes',
  },
];

const featurePromo = [
  {
    id: 1,
    title: 'Current delivery and pick-up times',
    info: 'daily 4:00 p.m. - 10:00 p.m',
    icon: FiTruck,
    className: 'bg-red-100',
  },
  {
    id: 2,
    title: 'Schönhauser Allee 142, 10437 Berlin',
    info: '',
    icon: FiMapPin,
    className: 'bg-indigo-100',
  },
  {
    id: 3,
    title: 'info@vedis.berlin',
    info: '',
    icon: FiMail,
    className: 'bg-yellow-100',
  },
  {
    id: 4,
    title: '+49 (0) 30 448 51 72',
    info: '',
    icon: FiPhoneCall,
    className: 'bg-green-100',
  },
];

const contactData = [
  {
    id: 1,
    title: 'Email Us',
    info: '',
    icon: FiMail,
    contact: 'info@vedis.berlin',
    className: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Call Us',
    info: '',
    icon: FiPhoneCall,
    contact: '+49 (0) 30 448 14 71',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Location',
    info: 'Schönhauser Allee 142, 10437 Berlin',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];

export {
  pages,
  userSidebar,
  sliderData,
  ctaCardData,
  featurePromo,
  contactData,
};
