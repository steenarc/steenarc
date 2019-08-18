import React, { Component } from "react";

import IconTick from "src/assets/images/tick.svg";

import "./style.scss";

export default class Pricing extends Component {
  render() {
    return (
      <section className="pricing">
        <div className="container">
          <h3 className="steenify_title text-center pricing__title">Pricing</h3>
          <div className="pricing__inner">
            <div className="pricing__details info">
              <div className="info__title">
                <span className="price">
                  <span className="unit">$</span>
                  799
                </span>
                <span className="text">a website</span>
              </div>
              <ul className="info__list">
                <li>
                  <IconTick className="info__icon" />
                  UNLIMITED Bandwidth
                </li>
                <li>
                  <IconTick className="info__icon" />
                  20GB Storage
                </li>
                <li>
                  <IconTick className="info__icon" />
                  Index your website on Google
                </li>
                <li>
                  <IconTick className="info__icon" />
                  Connect Your Domain
                </li>
                <li>
                  <IconTick className="info__icon" />
                  Free Domain for 1 Year
                </li>
                <li>
                  <IconTick className="info__icon" />
                  Google Analytics
                </li>
                <li>
                  <IconTick className="info__icon" />
                  Free https
                </li>
                <li>
                  <IconTick className="info__icon" />
                  24/7 Support
                </li>
              </ul>
              <p className="info__bottom text-center">
                <a
                  className="steenify_btn steenify_btn--border info__btn"
                  title="Start Now"
                  href="#"
                >
                  Start Now
                </a>
              </p>
            </div>
            <div className="pricing__upgrade upgrade text-center">
              <div className="upgrade__inner">
                <h4 className="upgrade__title">Want more?</h4>
                <a
                  className="steenify_btn steenify_btn--border upgrade__btn"
                  title="Let us know"
                  href="#"
                >
                  Let us know
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
