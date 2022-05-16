import React from 'react';
import Image from 'next/image';

//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';
import i18next  from "i18next";
import '../../i18n';
import { useTranslation } from 'react-i18next';
const AboutUs = () => {
  const { t,i18n } = useTranslation();
  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader title={t('About Us')} />

      <div className="bg-transpernt">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
              {t('Indian delivery service - order Indian now !')}
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p>
                Indian cuisine is one of the most popular and tastiest cuisines in the world.  It's no wonder: after all, Indian food has always enchanted all the senses. The Indian hospitality is known and famous all over the world.

You can expect tender and juicy meat dishes with chicken, lamb or fish as well as spicy curries. Beautifully and colorfully presented and cooked fresh and hot for you.
                </p>
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                Order Indian Berlin - dishes from the tandoori oven and much more!
                </h3>
                <p>
                A very special specialty are delicious dishes from the tandoori oven : Tandoori chicken is marinated in a special yogurt marinade and then grilled juicy and tasty in a ceramic oven . When you order Indian online , Tandoori Chicken is a classic that goes with every order. Indian cuisine also offers wonderful vegetarian creations with homemade cream cheese, cauliflower, potatoes, aubergines, lentils, chickpeas or spinach.

A huge selection of exotic spices such as ginger, turmeric, coriander, cumin or cardamom provide that special kick. In the capital Berlin , Indian food culture has had a firm place in the hearts of all gourmets for decades.

Order Indian online - this is how it works
                </p>
              </div>
              {/*<divs className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                    
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                   
                  </p>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                  
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                  
                  </p>
                </div>
  </divs>*/}
            </div>
            <div className="mt-10 lg:mt-0">
              <Image width={920} height={750} src="https://vedis.berlin/wp-content/uploads/2020/02/vedis-2.jpg" alt="logo" />
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">Order Indian online - this is how it works</h3>
If you want to order Indian food too, you should not miss the offer at Vedis Restaurant Berlin-Prenzlauer Berg.

Especially now in the cool season, an Indian delivery service Berlin is the perfect way to get delicious, fresh and hot cooked Indian food without having to leave your own warm four walls.
            </p>

            <p>
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold"> Would you like to order Indian food nearby ? </h3>
Take a look at our website and choose your favorite dish straight away. We deliver to households within a radius of 4 kilometers from our restaurant at Schönhauser Allee 142, across from the U-Bahn station. Eberswalder Strasse in Berlin-Prenzlauer Berg .
            </p>


            <p>
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">Indian delivery service Prenzlauer Berg - 5 easy steps </h3>
            1.Go to the digital menu .<br/>
            2.Choose your favorite dish and add it to the shopping cart<br/>
            3.Submit your order <br/>
            4.Our delivery service will immediately be on its way to your home<br/>
            5.Your Indian food arrives fresh and hot. Enjoy your meal! <br/>  </p>



            <p>
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold"> Indian delivery service Berlin - Vedis offers a lot more! </h3>
            At Vedis Indian Restaurant you can not only order food online, but also use other services for authentic Indian enjoyment from the comfort of your home on your PC or smartphone.

How about a reservation in our restaurant?  Or would you like to surprise friends and family with a voucher for a delicious Indian dinner? No problem, all of this is possible on our website - but there is more: try it out and order Indian in Prenzlauer-Berg!</p>



            <p>
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold"> Order Indian food - try it now! </h3>
            At Vedis delivery service Berlin-Prenzlauer Berg you can of course also order healthy and fresh salads or hot soups .

For example the Vedis Master-Mix Salad, a large Indian salad with grilled and marinated chicken strips, king prawns and cream cheese from the original Indian clay oven. Or the vegetarian Dal Soup - a tasty lentil soup, refined with spices and fresh herbs. Of course, you can also order the well-known and popular Indian drinks from us .

How about a delicious, fruity or creamy cocktail with a spicy meal? Or a refreshing mango lassi?       </p>


            <p>
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold"> 3, 2, 1 enjoyment - order Indian now !</h3>We want you to be full, satisfied and happy .

With our Prenzlauer Berg delivery service, we therefore attach great importance to fresh dishes that are steaming on your table in no time at all and are delivered directly to your door by our friendly Indian delivery service .

If you have any further questions about our delivery service, please do not hesitate to contact us personally at any time. We look forward to your order. Ordering food Berlin made easy!

Enjoy your meal! </p>



            
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            {/*<Image
              width={1920}
              height={570}
              src="/about-banner.jpg"
              alt="logo"
              className="block rounded-lg"
            />*/}
          </div>
        </div>
        {/*<divs className="bg-gray-50 lg:py-20 py-10">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div className="max-w-2xl">
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                  Our Founder
                </h3>
                <p className="mt-2 md:mt-3 font-normal block text-base">
                  We’re impartial and independent, and every day we create
                  distinctive, world-class reintermediate backend supply
                  programmes.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-1.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Niamh Shea
                  </h5>
                  <span className="opacity-75 text-sm">
                    Co-founder & Executive
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-2.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Orla Dwyer
                  </h5>
                  <span className="opacity-75 text-sm">Chief Executive</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-3.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Danien James
                  </h5>
                  <span className="opacity-75 text-sm">
                    Co-founder, Chairman
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-4.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Dara Frazier
                  </h5>
                  <span className="opacity-75 text-sm">
                    Chief Strategy Officer
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-5.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Glenda Arvidson
                  </h5>
                  <span className="opacity-75 text-sm">HR Officer</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-6.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Melvin Davis
                  </h5>
                  <span className="opacity-75 text-sm">Lead Developer</span>
                </div>
              </div>
            </div>
          </div>
          </divs>*/}
      </div>
    </Layout>
  );
};

export default AboutUs;
