import React, { Component } from "react";

import Step1 from "src/assets/images/step-1.svg";
import Step2 from "src/assets/images/step-2.svg";
import Step3 from "src/assets/images/step-3.svg";
import Ruler from "src/assets/images/ruler.svg";
import Man from "src/assets/images/man.svg";

import "./style.scss";

export default class HowWeWorks extends Component {
  render() {
    return (
      <section className="how-we-works" id="howweworks">
        <div className="container">
          <p className="how-we-works__sub-title">
            It's easy to spend less to expand your business
          </p>
          <div className="steps">
            <div className="step step--first">
              <Ruler />
              <Man className="man" />
            </div>
            <div className="steps__main">
              <div className="step">
                <Step1 className="step__icon" />
                <span className="step__txt">Send.</span>
              </div>
              <div className="step">
                <Step2 className="step__icon" />
                <span className="step__txt">Do.</span>
              </div>
              <div className="step">
                <Step3 className="step__icon" />
                <span className="step__txt">Get.</span>
              </div>
            </div>
          </div>

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
