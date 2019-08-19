import React, { Component } from "react";

import TextBuild from "src/assets/images/build.svg";
import TextManage from "src/assets/images/manage.svg";
import Arrow from "src/assets/images/arrow.svg";

import "./style.scss";

export default class HeroBanner extends Component {
  render() {
    return (
      <section className="hero-banner" id="home">
        <div className="container">
          <p className="hero-banner__title">
            <TextBuild className="hero-banner__svg hero-banner__svg--build" />
            <span className="hero-banner__char">&amp;</span>
            <TextManage className="hero-banner__manage hero-banner__svg--manage" />
          </p>
          <p className="hero-banner__sub-title">website for architect</p>

          <div className="hero-banner__more">
            <a
              className="hero-banner__view-demo steenify_btn steenify_btn--white"
              href="#"
              title="VIEW DEMO"
            >
              VIEW DEMO
            </a>
            <p className="hero-banner__desc">
              Set you free from learning how to use a website, and <br />
              tedious website updating work.
            </p>
            <button className="hero-banner__scroll" type="button">
              <Arrow />
            </button>
          </div>
        </div>
      </section>
    );
  }
}
