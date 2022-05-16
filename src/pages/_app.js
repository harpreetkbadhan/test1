import '@styles/custom.css';
import 'react-multi-carousel/lib/styles.css';
import { CartProvider } from 'react-use-cart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NextCors from 'nextjs-cors';
//internal import
import { UserProvider } from '@context/UserContext';
import { SidebarProvider } from '@context/SidebarContext';
import DefaultSeo from '@component/common/DefaultSeo';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || null);

function MyApp({ Component, pageProps }) {
   const cors = require("cors");

  return (
    <>
      <UserProvider>
        <SidebarProvider>
          <Elements stripe={stripePromise}>
            <CartProvider>
              <DefaultSeo />
              <Component {...pageProps} />
            </CartProvider>
          </Elements>
        </SidebarProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
