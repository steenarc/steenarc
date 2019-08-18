import React, { Component } from "react";

import TextGets from "src/assets/images/gets.svg";

import "./style.scss";

export default class YouWillGets extends Component {
  render() {
    return (
      <section className="gets">
        <div className="container">
          <h3 className="steenify_title text-center">
            What you will <TextGets />
          </h3>
          <a
            href="#"
            title="VIEW DEMO"
            className="steenify_btn steenify_btn--red"
          >
            VIEW DEMO
          </a>
        </div>
      </section>
    );
  }
}
