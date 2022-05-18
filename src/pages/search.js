import React, { useState, useEffect,useRef } from "react";
import Image from "next/image";
import axios from 'axios';
import Loading from "@component/preloader/Loading";
//internal import
import Layout from "@layout/Layout";
import useFilter from "@hooks/useFilter";
import Category from "@component/category/Category";
import ProductServices from "@services/ProductServices";
import ProductCard from "@component/product/ProductCard";
import StickyCart from "@component/cart/StickyCart";
import FeatureCard from "@component/feature-card/FeatureCard";
import MapModal from "@component/modal/MapModal";
import i18next  from "i18next";
import '../../i18n';
import { useTranslation } from 'react-i18next';
const Search = ({data}) => {
  const { t,i18n } = useTranslation();
  const [visibleProduct, setVisibleProduct] = useState(15);
  const { productData, setSortedField } = useState(products);
  const { loading, setloading } = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [productNew, setProductNew] = useState([]);
  var y = { name: "gshsd" };
  //console.log(products)
  var text=['w','o','o','f','o','o','d','_','max','_','delivery','_','distance']
  var p;
  var today = new Date();
  console.log("tax "+Distance)
  var products=[];
  var Distance=0;
  var categories=[];
  var loadings = true;
  async function get()
  {
    var data = await ProductServices.getAllProductsbyId(28);
    categories= await ProductServices.getCategory();
    setProductNew(data);
   // products=JSON.parse(products)
    console.log(products)
    //console.log(categories)
  }
  useEffect(() => {
   if(data)
   {
     setProductNew(data)
   }
  }), [];
  products.map((product, i) => {
    var pp = product.categories;
    pp.map((categ, i) => {
      //console.log(categ.name)
      p = categ.name;
    });
  });
  console.log(p);
  return (
    <Layout title="Search" description="This is search page" categories={categories}>
      <MapModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <StickyCart />
        <br></br>
       
        <FeatureCard />
        <div className="flex py-10 lg:py-12">
          <div className="flex w-full">
            <div className="flex-shrink-0  pr-4 xl:pr-6 hidden lg:block w-3/12">
              <div className="sticky top-32">
                <h2 className="font-serif text-lg pb-2 font-medium">
               
                </h2>
                <Category categories={categories} />
              </div>
            </div>
            <div className="w-full">
              {productNew.length === 0 ? (
                <div className="text-center align-middle mx-auto p-5 my-5">
                  <Image
                    className="my-4"
                    src="/no-result.svg"
                    alt="no-result"
                    width={400}
                    height={380}
                  />
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                    Sorry, we can not find this 
                  </h2>
                </div>
              ) : (
                <div className="flex justify-between pb-3">
                  <h2 className="text-lg font-serif font-bold">{p}</h2>
                  <h2 className="text-sm font-serif font-bold">
                    {t('Total')} <span className="font-bold">{products.length}</span>{" "}
                    {t('items Found')}
              
                  </h2>
                  {/*<span className="text-sm font-serif">
                    <select
                      onChange={(e) => setSortedField(e.target.value)}
                      className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                    >
                      <option className="px-3" value="All" defaultValue hidden>
                        Sort By Price
                      </option>
                      <option className="px-3" value="Low">
                        Low to High
                      </option>
                      <option className="px-3" value="High">
                        High to Low
                      </option>
                    </select>
              </span>*/}
                </div>
              )}
              {!productNew.length === 0 ? (
                <Loading loading={loading} />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-3">
                  {productNew?.slice(0, visibleProduct).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              )}
              {productNew.length > visibleProduct && (
                <button
                  onClick={() => setVisibleProduct((pre) => pre + 10)}
                  className="w-auto mx-auto md:text-sm leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-green-600 h-12 mt-6 text-sm lg:text-sm"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-lg font-serif font-bold pl-20">Allergene:</h2>
        <div className="flex py-10 lg:py-12 pr-11 pl-20">
          <h2 className="text-sm font-serif font-medium ">
            <b>A</b> {t('contains cereals containing gluten (wheat, rye, barley, oats, spelt, etc.).')} <br />
            <b>B</b> {t('contains crustaceans or crustacean products')}
            <br />
            <b>C</b> {t('contains eggs or egg products.')}
            <br />
            <b>D</b> {t('contains fish or fish products.')}
            <br />
            <b>E</b> {t('contains peanuts or peanut products.')}
            <br />
            <b>F</b> {t('contains soy or soy products.')}
            <br />
            <b>G</b> {t('contains milk or milk products (lactose).')}
            <br />
            <b>H</b> {t('contains nuts or their products (almonds, hazelnuts, walnuts, cashew nuts, pecan nuts, Brazil nuts, pistachio nuts, macadamia nuts, Quenland nuts).')}'
            <br />
            <b>I</b> {t('contains celery or celery products.')}
            <br />
            <b>J</b> {t('contains mustard or mustard products.')}
            <br />
            <b>K</b> {t('contains sesame seeds or sesame seed products.')}
            <br />
            <b>L</b> {t('contains sulfur dioxide and sulphites.')}
            <br />
            <b>M</b> {t('contains lupine or products thereof.')}
            <br />
            <b>N</b> {t('contains mollusks or products made from them.')}
            <br />
            <br />
          </h2>
          <h2 className="text-sm font-serif font-medium">
            1 {t('flavor enhancer, with coloring, pixelio.delkm')}
            <br />
            2 {t('caffeine-based,')}
            <br />
            3 {t('quinine-based,')}
            <br />
            5 {t('with antioxidants,')}
            <br />
            6 {t('with sweeteners (contains a source of phenylalanine),')}
            <br />
            13 {t('acidulants,')}
            <br />
            15 {t('stabilizers,')}
            <br />
          </h2>
        </div>

        {/*<divv className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center pl-20">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
              Indisch Lieferservice – Jetzt Indisch bestellen!
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p>
                Die Indische Küche gehört zu den beliebtesten und wohlschmeckendsten Küchen der Welt. Das ist kein Wunder: Schließlich verzaubert indisches Essen seit jeher alle Sinne. Die indische Gastfreundschaft ist dabei weltweit bekannt und berühmt.<br/><br/> Es erwarten Sie zarte und saftige Fleischgerichte mit Hähnchen, Lamm oder Fisch sowie würzige Currys. Wunderschön und farbenfroh angerichtet und frisch und heiß für Sie gekoch </p>
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                Indisch bestellen Berlin – Gerichte aus dem Tandoori-Ofen und viel mehr!
                </h3>
                <p>
                Eine ganz besondere Spezialität sind leckere Gerichte aus dem Tandoori-Ofen:
                Tandoori Chicken wird dabei in einer speziellen Joghurtmarinade eingelegt und danach in einem Keramikofen saftig und schmackhaft gegrillt. Wenn Sie indisch online bestellen, ist Tandoori Chicken ein Klassiker, der zu jeder Bestellung dazu gehört. Dazu bietet die indische Küche wunderbare vegetarische Kreationen mit hausgemachtem Rahmkäse, Blumenkohl, Kartoffeln, Auberginen, Linsen, Kichererbsen oder Spinat.<br/><br/>

                Eine riesige Auswahl exotischer Gewürze wie Ingwer, Kurkuma, Koriander, Kreuzkümmel oder Kardamom sorgt dabei für den besonderen Kick. In der Hauptstadt Berlin hat die indische Esskultur bereits seit Jahrzehnten einen festen Platz im Herzen aller Feinschmecker.
                </p>
                

                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                Indisch online bestellen – so funktioniert es
                </h3>
                <p>
                Wenn auch Sie indisches Essen bestellen möchten, sollten Sie sich das Angebot von Vedis Restaurant Berlin-Prenzlauer Berg nicht entgehen lassen.
                <br/>
                Gerade jetzt in der kühlen Jahreszeit ist ein Indisch Lieferservice Berlin die perfekte Art und Weise, an leckeres, frisch und heiß gekochtes indisches Essen zu gelangen, ohne die eigenen warmen vier Wände verlassen zu müssen.</p>
                

                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                Sie möchten indisches Essen bestellen in der Nähe? 
                </h3>
                <p>
                Schauen Sie auf unserer Webseite vorbei und suchen Sie sich direkt Ihr Lieblingsgericht aus. Wir beliefern Haushalte im Umkreis von 4 Kilometern rund um unser Restaurant in der Schönhauser Allee 142, gegenüber U-Bhf. Eberswalder Straße in Berlin-Prenzlauer Berg.</p>
                









              </div>




              Indisch online bestellen – so funktioniert es
            </div>
              </divv>*/}
      </div>
    </Layout>
  );
};

export default Search;
export async function getStaticProps(context) {
  var data = await ProductServices.getAllProductsbyId(28);
  console.log(data)
  return {
    props: {data}, // will be passed to the page component as props
  }
}



/*
export const getServerSideProps  = async (context) => {
  const { query } = context.query;
  const { Category } = context.query;
  const { category } = context.query;
  var data = await ProductServices.getAllProductsbyId(category);

  function UserGreeting(product) {
    var v = "";
    product.categories.map((item, stepIndex) => (v = item.slug));

    var r = '"';
    //v='"'+v+'"'
    console.log(v);
    return v;
  }
  //service filter with parent category
  if (Category) {
    data = await ProductServices.getAllProductsbyId(Category);
    
  }
  //service filter with child category
  if (category) {
    data = await ProductServices.getAllProductsbyId(category);
  }
  let products = data;

  var loadings = true;
  var wooFoods =102;
  console.log(category);
  //search result
  if (query) {
    data = await ProductServices.getAllProducts();

    products = data.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }
  var categories=await ProductServices.getCategory();

  var datas = await axios.get(`https://lms.shop-template.de/data2.php`)
   .then(res => res.data)
   //console.log(wooFoods)
    datas=JSON.stringify(datas)
    datas=JSON.parse(datas)
    //console.log("at u"+datas)

    const paragraph = datas;
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var today = new Date();
    var dayName = days[today.getDay()];
    
const searchTerm = 'woofood_delivery_hours_'+dayName+'_start";s:';
console.log("tax "+searchTerm);
const indexOfFirst = datas.indexOf(searchTerm);
const lengths=indexOfFirst+(searchTerm.length)+4;
console.log(indexOfFirst +" "+lengths)
var Distance="";
for(var i=indexOfFirst;i<=lengths;i++)
{
Distance=Distance+datas[i];
}
console.log("tax "+Distance)
Distance = Distance.slice(-5);
Distance=Distance.split('"')[1]


  return {
    props: {
      products,
      Distance,
      loadings,
      categories,

    },
  };
};
*/
