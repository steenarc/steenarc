import React, { Component } from "react";

import TextGets from "src/assets/images/gets.svg";
import "./style.scss";

export default class YouWillGets extends Component {
  render() {
    return (
      <section className="gets">
        <div className="container">
          <h3 className="steenify_title text-center gets__title">
            What you will <TextGets />
          </h3>
          <div className="demos">
            <div className="item">
              <img src="img/ad9.jpg" alt="ad9" />
              <p className="text-center mb-0">
                <a
                  href="#"
                  title="VIEW DEMO"
                  className="steenify_btn steenify_btn--red item__view"
                >
                  VIEW DEMO
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
