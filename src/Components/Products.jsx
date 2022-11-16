import { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class Products extends Component {
  addItemCartButton = ({ target }) => {
    const { id } = target;
    const { searchResult } = this.props;
    const item = searchResult.find((product) => product.id === id);
    const local = JSON.parse(localStorage.getItem('Cart-Item'));

    const cartItems = [item];
    if (!local) {
      // se não tiver nada no localstorage
      cartItems[0].quantity = 1;
      localStorage.setItem('Cart-Item', JSON.stringify(cartItems));
    } else {
      // se já tiver algo no localstorage
      const duplicatedProd = local.find((product) => product.id === item.id);
      if (!duplicatedProd) {
        // se o resultado do find acima for undefined cai aqui
        item.quantity = 1;
        local.push(item);
        localStorage.setItem('Cart-Item', JSON.stringify(local));
      }
      if (duplicatedProd) {
        // se o resultado do find encontrar o produto
        const filteredCart = local.filter((product) => product.id !== item.id);
        duplicatedProd.quantity += 1;
        filteredCart.push(duplicatedProd);
        localStorage.setItem('Cart-Item', JSON.stringify(filteredCart));
      }
    }
  };

  render() {
    const { searchResult, search, onProductClick } = this.props;
    const controller = searchResult.length === 0;
    const searchController = searchResult.length === 0 && search;
    return (
      <div data-testid="home-initial-message">
        { controller && 'Digite algum termo de pesquisa ou escolha uma categoria.' }
        { (searchController)
          ? <p>Nenhum produto foi encontrado</p>
          : (
            <div className="products">
              {searchResult.map((element) => (
                <ProductCard
                  searchResult={ searchResult }
                  key={ element.id }
                  title={ element.title }
                  thumbnail={ element.thumbnail }
                  price={ element.price }
                  id={ element.id }
                  freeShipping={ element.shipping.free_shipping }
                  addItemCartButton={ this.addItemCartButton }
                  onProductClick={ () => onProductClick(element.id) }
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

Products.defaultProps = {
  searchResult: [],
  search: false,
  onProductClick: null,
};

Products.propTypes = {
  searchResult: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  search: PropTypes.bool,
  onProductClick: PropTypes.func,
};
