import Lottie from "lottie-react";
import Myanimation from "../assets/my_animation.json"
import "../styles/hero.css"
function Hero() {
  return (
    <section className="hero-section">
      <div className="container col-xxl-8 px-3 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Lottie animationData={Myanimation} />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Create and sell custom products
            </h1>
            <p className="lead">
              Craftify empowers creators and businesses to design and sell
              personalized products with ease. Choose from a variety of
              high-quality items, customize them with your unique designs, and
              sell through your online store. We handle production and shipping,
              so you can focus on growing your brand.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-md-2 button"
              >
                Start for Free
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4 button"
              >
                How it Works?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
