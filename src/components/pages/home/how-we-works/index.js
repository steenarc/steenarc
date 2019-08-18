import React, { Component } from "react";

import "./style.scss";

export default class HowWeWorks extends Component {
  render() {
    return (
      <section className="how-we-works">
        <div className="container">
          <p className="how-we-works__sub-title">
            It's easy to spend less to expand your business
          </p>
          <h3 className="steenify_title text-center">How we works</h3>
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <div className="item__step">1</div>
                <div className="item__caption">
                  <p className="item__title">
                    Send Us <br />
                    Information
                  </p>
                  <div className="item__desc">
                    You send us information base follow this templates.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="item__step">2</div>
                <div className="item__caption">
                  <p className="item__title">Build &amp; Manage everything</p>
                  <div className="item__desc">
                    <p>We will select the best content for your website</p>
                    <p>Deliver the website for you</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="item__step">3</div>
                <div className="item__caption">
                  <p className="item__title">Get Your Website</p>
                  <div className="item__desc">
                    <p>We will select the best content for your website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
