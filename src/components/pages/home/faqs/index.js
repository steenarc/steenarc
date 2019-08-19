import React, { Component } from "react";

import FaQItem from "../faq-item";

import "./style.scss";

export default class FAQs extends Component {
  render() {
    return (
      <section className="faqs" id="faqs">
        <div className="container">
          <h3 className="steenify_title text-center faqs__title">FAQs</h3>
          <FaQItem title="1. How long will you deliver the website?">
            <p>
              It will take from 3 - 7 days depends on the mount of content you
              send us.
            </p>
          </FaQItem>
          <FaQItem title="2. Can I change template?">
            <p>
              Yes, there will be more template with more functionalities in the
              future. For now, there is just one template.
            </p>
          </FaQItem>
          <FaQItem title="3. How much will it cost to change template?">
            <p>It is free</p>
          </FaQItem>
        </div>
      </section>
    );
  }
}
