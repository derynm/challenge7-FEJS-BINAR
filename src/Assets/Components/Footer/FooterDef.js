import React from "react";
import "./footer.css";
import facebook from '../../Img/icon_facebook.png';
import instagram from '../../Img/icon_instagram.png';
import twitter from '../../Img/icon_twitter.png';
import twitch from '../../Img/icon_twitch.png';
import mail from '../../Img/icon_mail.png';

export const FooterDef = () => {
    return (
        <div className="container-xl">
          <div className="footer pt-5 pb-5">
            <div className="row pb-5">
              <div className="col col-lg-4 col-sm-12 col-12 pt-2 pb-2">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>
              <div className="col col-lg-2 col-sm-12 col-12 pt-2 pb-2">
                <a href="#section-2">
                  <p>
                    <strong>Our services</strong>
                  </p>
                </a>
                <a href="#section-3">
                  <p>
                    <strong>Why Us</strong>
                  </p>
                </a>
                <a href="#section-4">
                  <p>
                    <strong>Testimonial</strong>
                  </p>
                </a>
                <a href="#section-6">
                  <p>
                    <strong>FAQ</strong>
                  </p>
                </a>
              </div>
              <div className="col col-lg-3 col-sm-12 col-12 pt-2 pb-2">
                <p>Connect with us</p>
                <div className="row">
                  <div className="col col-lg-9  d-flex justify-content-lg-between media-social">
                    <a href="https://www.facebook.com/">
                      <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://twitter.com/">
                      <img src={twitter} alt="" />
                    </a>
                    <a href="https://mail.google.com/mail">
                      <img src={mail} alt="" />
                    </a>
                    <a href="https://www.twitch.tv/">
                      <img src={twitch} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-sm-12 col-12 pt-2 pb-2">
                <p>Copyright Binar 2022</p>
                <h3>LOGO</h3>
              </div>
            </div>
          </div>
        </div>
      );
}
