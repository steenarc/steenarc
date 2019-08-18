import React, { Component } from "react";

import FaQItem from "../faq-item";

import "./style.scss";

export default class FAQs extends Component {
  render() {
    return (
      <section className="faqs">
        <div className="container">
          <FaQItem title="1. How long will you deliver the website?">
            <p>
              It will take from 3 - 7 days depends on the mount of content you
              send us.
            </p>
          </FaQItem>
        </div>
      </section>
    );
  }
}
