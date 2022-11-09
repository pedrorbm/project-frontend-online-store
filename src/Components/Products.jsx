import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ProductCard from './ProductCard';
import SearchInput from './SearchInput';

export default class Products extends Component {
  state = {
    allCategories: [],
    searchResult: [],
    categoryId: '',
    searchParam: '',
    search: false,
  };

  async componentDidMount() {
    const allCategories = await getCategories();
    this.setState({ allCategories });
  }

  setCategory = ({ target }) => {
    const categoryId = target.id;
    this.setState({ categoryId });
  };

  setSearch = ({ target }) => {
    const searchParam = target.value;
    this.setState({ searchParam });
  };

  getResults = async () => {
    const { categoryId, searchParam } = this.state;
    const listOfProducts = await getProductsFromCategoryAndQuery(categoryId, searchParam);
    this.setState({ searchResult: listOfProducts.results, search: true });
  };

  render() {
    const { categoryId, allCategories, searchParam, searchResult, search } = this.state;
    const controller = searchParam.length === 0 && categoryId.length === 0;
    const searchController = searchResult.length === 0 && search;
    return (
      <div data-testid="home-initial-message">
        <nav>
          <Link data-testid="shopping-cart-button" to="/shopcart">Carrinho</Link>
        </nav>
        <SearchInput
          searchParam={ searchParam }
          getResults={ this.getResults }
          setSearch={ this.setSearch }
        />
        { controller && 'Digite algum termo de pesquisa ou escolha uma categoria.' }
        { (searchController)
          ? <p>Nenhum produto foi encontrado</p>
          : searchResult.map((element) => (
            <ProductCard
              key={ element.id }
              title={ element.title }
              thumbnail={ element.thumbnail }
              price={ element.price }
            />
          ))}
        <ul>
          { allCategories.map(({ id, name }) => (
            <Categories
              key={ id }
              name={ name }
              id={ id }
              setCategory={ this.setCategory }
            />
          )) }
        </ul>
      </div>
    );
  }
}
