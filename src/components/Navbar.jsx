import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
    const [isExpandedWorks, setIsExpandedWorks] = useState(false);
    const [isExpandedServices, setIsExpandedServices] = useState(false);
    const [isExpandedHelp, setIsExpandedHelp] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-lg">
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-2 logo" href="#">
            Craftify
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" href="/app/products/">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog/">
                  Blog
                </a>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsExpandedWorks(true)}
                onMouseLeave={() => setIsExpandedWorks(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isExpandedWorks}
                >
                  How it works
                </a>
                <ul
                  className={`dropdown-menu ${isExpandedWorks ? "show" : ""}`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      How Craftify Works
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Craft on Demand
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Craftify Quality Promise
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      What to Sell
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsExpandedServices(true)}
                onMouseLeave={() => setIsExpandedServices(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className={`dropdown-menu ${
                    isExpandedServices ? "show" : ""
                  }`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Craftify Studio
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Express Delivery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Order in Bulk
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Transfer Products
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsExpandedHelp(true)}
                onMouseLeave={() => setIsExpandedHelp(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isExpandedHelp}
                >
                  Need help?
                </a>
                <ul className={`dropdown-menu ${isExpandedHelp ? "show" : ""}`}>
                  <li>
                    <a className="dropdown-item" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Requests
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex ms-auto">
          <button
            className="btn btn-outline-secondary me-2 button"
            type="button"
          >
            Login
          </button>
          <button className="btn btn-success button" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
