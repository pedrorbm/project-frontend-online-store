import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

class Header extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <SearchInput
          { ...this.props }

        />
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ () => history.push('/shoppingcart') }
        >
          Meu carrinho
        </button>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default Header;
