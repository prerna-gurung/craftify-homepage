import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import StoreSection from "./components/StoreSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import moneyBag from "./assets/icons/money-bag.svg";
import network from "./assets/icons/connection.svg";
import shopping from "./assets/icons/shopping.svg";
import custom_tshirt from "./assets/images/custom_tshirt.png";
import tags from "./assets/images/price-tag.png";
import file from "./assets/images/file.png";
import "./App.css";

function App() {
  const content1 = [
    {
      heading: "Maximize Your Profits",
      para: "We offer some of the most competitive prices in the industry, as our print providers consistently compete to earn your business.",
    },
    {
      heading: "Seamless Scaling",
      para: "Effortlessly manage busy seasons with our extensive network of partners and automatic order routing, ensuring smooth operations during peak times.",
    },
    {
      heading: "Wide Product Selection",
      para: "Choose from over 900 premium products and leading brands to find the perfect items for your business.",
    },
  ];

   const content2 = [
     {
       heading: "Custom products",
       para: "Effortlessly add your designs to a variety of products using our user-friendly tools.",
     },
     {
       heading: "Sell on your terms",
       para: "You control the products, set the prices, and decide where to sell.",
     },
     {
       heading: "We handle fulfillment",
       para: "Once an order is placed, we take care of all the printing and delivery logistics.",
     },
   ];

  const images1 = [moneyBag, network, shopping];
  const images2 = [custom_tshirt, tags, file];

  return (
    <>
      <Navbar />
      <Hero />
      <Features images={images1} content={content1} />
      <Products />
      <Features images={images2} content={content2} />
      <StoreSection/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
