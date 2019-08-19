import React from "react";
import "./style.scss";

const Footer = () => (
  <footer id="main__footer" className="footer footer--steenify transition-fade">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 newsletter">
          <h4 className="footer__title">Subscribe to our Newsletter</h4>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter your email address"
            />
            <button type="button" className="form-btn">
              Subscribe
            </button>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center contact">
          <div className="footer__inner">
            <h4 className="footer__title">Contact</h4>
            <p className="footer__desc">steenarc@steenify.com</p>
          </div>
        </div>
        <div className="col-lg-4">
          <h4 className="footer__title">Address</h4>
          <p className="footer__desc">
            289 Dinh Bo Linh, Ward 26, Binh Thanh District, Ho Chi Minh City,
            Viet Nam
          </p>
        </div>
      </div>
      <p className="footer__copy text-center">
        A product of Steenify © 2019 All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
