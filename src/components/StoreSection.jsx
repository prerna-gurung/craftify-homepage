import "../styles/store.css";
import shopifyLogo from "../assets/icons/shopify.svg"; 
import wixLogo from "../assets/icons/wix.svg";
import etsyLogo from "../assets/icons/etsy.svg";
import squarespaceLogo from "../assets/icons/squarespace.svg";
import wooLogo from "../assets/icons/woo.svg";
import apiLogo from "../assets/icons/api.svg";
import ebayLogo from "../assets/icons/ebay.svg";
import prestashopLogo from "../assets/icons/prestashop.svg";
import moreLogo from "../assets/icons/more.svg";
import craftifyLogo from "../assets/craftify_logo.png"

function StoreSection()  {
  return (
    <section className="store-section">
        <h2>Connect your store</h2>
        <p>
          Craftify easily integrates with major e-commerce platforms and
          marketplaces.
        </p>
        <div className="store-container">
          <a href="/shopify/">
            <img
              src={shopifyLogo}
              alt="Shopify"
              className="store-item shopify"
            />
          </a>
          <a href="/wix/">
            <img src={wixLogo} alt="Wix" className="store-item wix" />
          </a>
          <a href="/etsy/">
            <img src={etsyLogo} alt="Etsy" className="store-item etsy" />
          </a>
          <a href="/squarespace/">
            <img
              src={squarespaceLogo}
              alt="Squarespace"
              className="store-item squarespace"
            />
          </a>
          <a href="/">
            <img
              src={craftifyLogo}
              alt="craftify logo"
              className="store-item craftify"
            />
          </a>
          <a href="/woocommerce/">
            <img src={wooLogo} alt="WooCommerce" className="store-item woo" />
          </a>
          <a href="/craftify-api/">
            <img src={apiLogo} alt="API" className="store-item api" />
          </a>
          <a href="/ebay/">
            <img src={ebayLogo} alt="ebay" className="store-item ebay" />
          </a>
          <a href="/prestashop/">
            <img
              src={prestashopLogo}
              alt="PrestaShop"
              className="store-item prestashop"
            />
          </a>
          <a href="/integrations/">
            <img src={moreLogo} alt="And more" className="store-item more" />
          </a>
        </div>
      
    </section>
  );
};

export default StoreSection;
