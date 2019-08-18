import { Link } from "gatsby";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Logo from "src/assets/images/logo.svg";

import "./style.scss";

class Header extends PureComponent {
  state = {
    isOpenMenu: false
  };

  handleToggleMenu = () => {
    this.setState(oldState => ({
      isOpenMenu: !oldState.isOpenMenu
    }));
  };

  render() {
    const { isOpenMenu } = this.state;
    const { siteTitle } = this.props;
    return (
      <header
        id="main_header"
        className="header header--steenify transition-fade"
      >
        <div className="container">
          <nav className="header__nav">
            <Link className="header__logo" to="/">
              <Logo />
            </Link>

            <ul className="header__menu menu">
              <li className="menu__item active">
                <a className="menu__link" href="#" title="Home">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#" title="How it works">
                  How it works
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#" title="Pricing">
                  Pricing
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#" title="FAQs">
                  FAQs
                </a>
              </li>
            </ul>

            <a className="header__contact" href="#" title="Contact us">
              Contact us
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
