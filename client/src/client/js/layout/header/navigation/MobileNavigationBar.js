import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { brandSecondary, whiteColor } from '../../../theme';

const Navigation = styled.nav`
    background-color: ${props => (props.checked ? brandSecondary : 'transparent')};
    transition: background 0.1s ease-out;
    position: absolute;
    width: 100%;
    z-index: 3;
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
      background-color: ${brandSecondary};
    }
    
    li a {
      display: block;
      padding: 20px 20px;
      text-decoration: none;
      color: white;
    }
    
    li a:hover {
      background-color: ${whiteColor};
      color: ${brandSecondary};
    }
        
     .menu {
      clear: both;
      max-height: 0;
      transition: max-height .2s ease-out;
    }
        
    .menu-icon {
      cursor: pointer;
      display: inline-block;
      float: right;
      padding: 28px 20px;
      position: relative;
      user-select: none;
    }
    
    .menu-icon .navicon {
      background: ${whiteColor};
      display: block;
      height: 2px;
      position: relative;
      transition: background .2s ease-out;
      width: 18px;
    }
    
    .menu-icon .navicon:before,
    .menu-icon .navicon:after {
      background: ${whiteColor};
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all .2s ease-out;
      width: 100%;
    }
    
    .menu-icon .navicon:before {
      top: 5px;
    }
    
    .menu-icon .navicon:after {
      top: -5px;
    }
        
    .menu-btn {
      display: none;
    }
    
    .menu-btn:checked ~ .menu {
      max-height: 400px;
    }
    
    .menu-btn:checked ~ .menu-icon .navicon {
      background: transparent;
    }
    
    .menu-btn:checked ~ .menu-icon .navicon:before {
      transform: rotate(-45deg);
    }
    
    .menu-btn:checked ~ .menu-icon .navicon:after {
      transform: rotate(45deg);
    }
    
    .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
`;

const Logo = styled.img`
  max-width: 100%; 
  max-height: 50px;
  float: left;
  position: absolute;
  padding: 5px 0px 5px 20px;
  top: 0;
  left: 0;
  bottom: 0;
`;

class MobileNavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  // = () => same as this.clickedItem = this.clickedItem.bind(this);
  clickedItem = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  }

  render() {
    return (
      <Navigation checked={this.state.checked}>
        <Link to="/"
              onClick={this.clickedItem}><Logo src="/assets/images/logo_header_main_neg.png"/></Link>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={this.state.checked}
          onChange={this.clickedItem}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"/>
        </label>
        <ul className="menu">
          <li>
            <Link
              to="/"
              onClick={this.clickedItem}
            >
              <FormattedMessage id="navigation.home"/>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={this.clickedItem}
            >
              <FormattedMessage id="navigation.dancing"/>
            </Link>
          </li>
          <li>
            <Link
              to="hustle"
              onClick={this.clickedItem}
            >
              <FormattedMessage id="navigation.hustle"/>
            </Link>
          </li>
          <li>
            <Link
              to="classes"
              onClick={this.clickedItem}
            >
              <FormattedMessage id="navigation.classes"/>
            </Link>
          </li>
          <li>
            <Link
              to="teacher"
              onClick={this.clickedItem}
            >
              <FormattedMessage id="navigation.teacher"/>
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              onClick={this.clickedItem}
            >
              <FormattedMessage id="navigation.gallery"/>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={this.clickedItem}
            >
              <FormattedMessage id="navigation.studio"/>
            </Link>
          </li>
        </ul>
      </Navigation>
    );
  }
}

export default MobileNavigationBar;
