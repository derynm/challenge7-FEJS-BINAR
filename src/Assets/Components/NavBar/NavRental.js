import React from 'react'
import "./NavBar.css";

export const NavRental = (props) => {
    return (
        <div className="nav-edit">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-xl navbar-padding-top">
              <a className="navbar-brand" href="#" onClick={props.toPageOne}>
                LOGO
              </a>
              <div className="nav-custom">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse nav-custom"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Our Service
                      </a>
                    </li>
                    <div className="nav-item">
                      <a className="nav-link" href="#">
                        Why Us
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="#">
                        Testimoni
                      </a>
                    </div>
                    <div className="nav-item">
                      <a className="nav-link" href="#">
                        FAQ
                      </a>
                    </div>

                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
}
