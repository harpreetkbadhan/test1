import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

//internal import
import Navbar from '@layout/navbar/Navbar';
import Footer from '@layout/footer/Footer';
import FooterTop from '@layout/footer/FooterTop';
import MobileFooter from '@layout/footer/MobileFooter';

const Layout = ({ title, description, children,categories }) => {

  return (
    <>
      <ToastContainer />
      <div className="font-sans" >
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>
            {title
              ? `VEDIS | ${title}`
              : 'VEDIS - Indian Food Delivery'}
          </title>
          {description && <meta name="description" content={description} />}
          
        </Head>
        <Navbar />

        <div class="bg-fixed..."  style={{backgroundImage: `url("https://lms.shop-template.de/wp-content/uploads/2020/10/vedis-menu.jpg")`}}>
          {children}
        </div>
        {categories===undefined?(<MobileFooter />):(<MobileFooter categories={categories} />)}
        
        <div className="w-full">
          <FooterTop />
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
