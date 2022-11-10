import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import logo from '../assets/images/store_logo.svg';
import cart from '../assets/images/shop-cart.svg';

class Header extends Component {
  render() {
    const { history } = this.props;
    return (
      <header className="header">
        <SearchInput
          { ...this.props }

        />
        <img src={ logo } alt="Logo" />
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ () => history.push('/shoppingcart') }
        >
          <img className="cart-image" src={ cart } alt="Carrinho de compras" />
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default Header;
