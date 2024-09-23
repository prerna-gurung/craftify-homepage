import "../styles/testimonials.css"
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="container-lg">
        <h2 id="testimonial-heading">Our Testimonials</h2>
        <div className="container testimonial-cards">
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={person1}
                  className="card-img-top person-img"
                  alt="Customer 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Rex Hunter</h5>
                  <p className="card-text">
                    <a href="#">Store link</a>
                  </p>
                  <p className="card-text">
                    Craftify has been an amazing partner to work with as we grow
                    our business...
                  </p>
                  <div className="star-rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={person2}
                  className="card-img-top person-img"
                  alt="Customer 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Jessica</h5>
                  <p className="card-text">
                    <a href="#">Store link</a>
                  </p>
                  <p className="card-text">
                    Using Craftify has been a great experience. Customer service
                    is always quick...
                  </p>
                  <div className="star-rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={person3}
                  className="card-img-top  person-img"
                  alt="Customer 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Zoe Parker</h5>
                  <p className="card-text">
                    <a href="#">Store link</a>
                  </p>
                  <p className="card-text">
                    Craftify has helped us tremendously in scaling our
                    business...
                  </p>
                  <div className="star-rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
