import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import logo from '../assets/images/store_logo.svg';
import cart from '../assets/images/shop-cart.svg';

class Header extends Component {
  render() {
    const { history } = this.props;
    return (
      <header>
        <nav className="header">
          <SearchInput
            route={ history }
            { ...this.props }

          />
          <Link to="/"><img src={ logo } alt="Logo" /></Link>
          <Link
            to="/shoppingcart"
            data-testid="shopping-cart-button"
            className="cart-button"
          >
            <img className="cart-image" src={ cart } alt="Carrinho de compras" />
          </Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default Header;
