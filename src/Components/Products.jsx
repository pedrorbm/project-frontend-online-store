import { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class Products extends Component {
  render() {
    const { searchResult, search, onProductClick } = this.props;
    const controller = searchResult.length === 0;
    const searchController = searchResult.length === 0 && search;
    return (
      <div data-testid="home-initial-message">
        { controller && 'Digite algum termo de pesquisa ou escolha uma categoria.' }
        { (searchController)
          ? <p>Nenhum produto foi encontrado</p>
          : searchResult.map((element) => (
            <ProductCard
              key={ element.id }
              title={ element.title }
              thumbnail={ element.thumbnail }
              price={ element.price }
              onProductClick={ () => onProductClick(element.id) }
            />
          ))}
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
