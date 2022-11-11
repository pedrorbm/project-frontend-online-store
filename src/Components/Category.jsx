import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends Component {
  state = {
    categoryProducts: [],
    selectedCategory: '',
  };

  async componentDidMount() {
    const category = await api.getCategories();

    this.setState({
      categoryProducts: category,
    });
  }

  getCategory = ({ target }) => {
    this.setState({ selectedCategory: target.id }, async () => {
      const { selectedCategory } = this.state;
      const { handleResult } = this.props;
      const products = await api.getProductsFromCategoryAndQuery(selectedCategory);
      return selectedCategory !== '' && handleResult(await products.results);
    });
  };

  render() {
    const { categoryProducts } = this.state;

    return (
      <div className="categories">
        <p>Categorias</p>
        <hr />
        {
          categoryProducts.map((category) => (
            <div key={ category.id } className="category">
              <label data-testid="category" htmlFor={ category.id }>
                {category.name}
              </label>
              <input
                className="radio-button"
                type="radio"
                id={ category.id }
                name="category"
                onChange={ this.getCategory }
              />
            </div>
          ))
        }
      </div>
    );
  }
}

Category.defaultProps = {
  handleResult: () => '',
};

Category.propTypes = {
  handleResult: PropTypes.func,
};

export default Category;
