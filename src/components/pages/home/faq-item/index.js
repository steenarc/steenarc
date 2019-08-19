import React, { Component } from "react";
import { Collapse } from "reactstrap";

import "./style.scss";

class FaQItem extends Component {
  constructor() {
    super();
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    const { title, children } = this.props;
    const { collapse } = this.state;
    return (
      <div className={`item-faq ${collapse && "opened"}`}>
        <div className="item-faq__header">
          <button
            onClick={this.toggle}
            className="item-faq__title"
            type="button"
          >
            <span>{title}</span>
            <svg
              className="item-faq__icon"
              aria-hidden="true"
              height={20}
              width={20}
              title="icon__plus"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon__plus"
              />
            </svg>
          </button>
        </div>

        <Collapse isOpen={collapse}>
          <div className="item-faq__content">{children}</div>
        </Collapse>
      </div>
    );
  }
}
FaQItem.defaultProps = {
  title: ""
};
export default FaQItem;
