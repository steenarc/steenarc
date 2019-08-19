import { Link } from "gatsby";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Logo from "src/assets/images/logo.svg";

import "./style.scss";

class Header extends PureComponent {
  state = {
    isOpenMenu: false,
    active: "home"
  };

  handleToggleMenu = () => {
    this.setState(oldState => ({
      isOpenMenu: !oldState.isOpenMenu
    }));
  };

  handleClickMenu = slug => {
    this.setState(() => ({
      isOpenMenu: false,
      active: slug
    }));
  };

  render() {
    const { isOpenMenu, active } = this.state;
    const { siteTitle } = this.props;
    return (
      <header
        id="main_header"
        className="header header--steenify transition-fade"
      >
        <div className="container">
          <nav className="header__nav">
            <Link className="header__logo" to="#home">
              <Logo />
            </Link>

            <div className={`header__menu ${isOpenMenu && "is-opened"}`}>
              <ul className="menu">
                <li className={`menu__item ${active === "home" && "active"}`}>
                  <Link
                    to="#home"
                    className="menu__link"
                    onClick={() => this.handleClickMenu("home")}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`menu__item ${active === "howweworks" &&
                    "active"}`}
                >
                  <Link
                    to="/#howweworks"
                    className="menu__link"
                    onClick={() => this.handleClickMenu("howweworks")}
                  >
                    How it works
                  </Link>
                </li>
                <li
                  className={`menu__item ${active === "pricing" && "active"}`}
                >
                  <Link
                    to="#pricing"
                    className="menu__link"
                    onClick={() => this.handleClickMenu("pricing")}
                  >
                    Pricing
                  </Link>
                </li>
                <li className={`menu__item ${active === "faqs" && "active"}`}>
                  <Link
                    to="/#faqs"
                    className="menu__link"
                    onClick={() => this.handleClickMenu("faqs")}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <a className="header__contact" href="#" title="Contact us">
              Contact us
            </a>

            <div
              className={`hamburger hamburger--slider d-block d-lg-none ${isOpenMenu &&
                "is-active"}`}
              onClick={this.handleToggleMenu}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
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
