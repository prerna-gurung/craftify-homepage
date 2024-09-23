import products from "../assets/images/products.png"
import arrow from "../assets/icons/arrow.svg"
import plus from "../assets/icons/plus.svg"
import "../styles/products.css"
function Products(){
    return (
      <section className="products-section">
          <div className="item" id="products-container">
            <img src={products} alt="" className="products-image" />

            <ul className="products">
              <li className="product" id="mug">
                <a href="/products/mug">
                  <img src={plus} alt="" className="add-item" />
                </a>
              </li>
              <li className="product" id="phonecase">
                <a href="/products/phonecase">
                  <img src={plus} alt="" className="add-item" />
                </a>
              </li>
              <li className="product" id="cap">
                <a href="/products/cap">
                  <img src={plus} alt="" className="add-item" />
                </a>
              </li>
              <li className="product" id="tshirt">
                <a href="/products/tshirt">
                  <img src={plus} alt="" className="add-item" />
                </a>
              </li>
            </ul>
          </div>
          <div className="item" id="text-section">
            <h2>Personalize with Ease</h2>
            <p>
              With our easy-to-use design tools, you can effortlessly customize
              a wide variety of products like t-shirts, mugs, phone cases, and
              more. Whether you’re creating for personal use or your business,
              you’ll have endless options to add your designs to hundreds of
              products.
            </p>
            <a href="/app/products/" id="products-link">
              All products
              <img src={arrow} alt="arrow icon" id="arrow" />
            </a>
          </div>
      </section>
    );
}

export default Products;