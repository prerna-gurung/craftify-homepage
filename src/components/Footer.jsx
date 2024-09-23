import linkedin_logo from "../assets/icons/linkedin.svg";
import github_logo from "../assets/icons/github.svg";
import logo from "../assets/craftify_logo.png";

import "../styles/footer.css"
function Footer() {
  return (
    <div className="container-fluid px-5 py-1" id="footer">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 px-5 pt-5">
        <div className="col mb-3">
          <a href="/">
            <img src={logo} alt="my logo" id="my_logo" />
          </a>
          <p className="text-body-secondary">© 2024</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Integrations</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Shopify
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Etsy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                eBay
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                PrestaShop
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Wix
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                WooCommerce
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                SquareSpace
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Craftify API
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Discover</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Guides
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Products
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Brands
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Shipping Rates
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Print on Demand
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Mockup Generator
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Craftify</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Craft on Demand
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Crafting Provider
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Become a Partner
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Sitemaps
              </a>
            </li>
          </ul>

          <h5 className="follow">Follow Us</h5>
          <div>
            <a
              href="https://www.linkedin.com/in/prerna-gurung-608a41256/"
              className="social"
              target="blank"
            >
              <img
                src={linkedin_logo}
                alt="LinkedIn logo"
                className="social-icon"
              />
            </a>
            <a
              href="https://github.com/prerna-gurung"
              className="social"
              target="blank"
            >
              <img
                src={github_logo}
                alt="GitHub logo"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
