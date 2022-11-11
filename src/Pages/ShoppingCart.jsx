import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import CartItems from '../Components/CartItems';
// import Header from '../Components/Header';

class ShoppingCart extends Component {
  state = {
    shoppingCart: [],
  };

  // componentDidMount() {
  //   this.setState({ cart: this.getCartItemsFromStorage() });
  // }

  // getCartItemsFromStorage = () => {
  //   // const cartItems = JSON.parse(localStorage.getItem('nomenolocalstorage'));
  //   const mockCartItems = [
  //     { id: '001', desc: 'item1', img: '', price: 0 },
  //     { id: '002', desc: 'item2', img: '', price: 0 },
  //     { id: '003', desc: 'item3', img: '', price: 0 }];
  //   return mockCartItems;
  // };

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('Cart-Item'));
    const isEmpty = cartItems?.length === 0 || cartItems === null;
    if (!isEmpty) {
      this.setState((previousState) => ({
        shoppingCart: [...previousState.shoppingCart, ...cartItems] }));
    }
  };

  render() {
    // const { cart } = this.state;
    // const isCartEmpty = cart.length === 0;
    // return (
    //   <>
    //     <div>
    //       <Header />
    //     </div>
    //     <div>
    //       <Link to="/">Voltar</Link>
    //     </div>
    //     <div>
    //       { isCartEmpty ? (
    //         <p data-testid="shopping-cart-empty-message">
    //           Seu carrinho está vazio
    //         </p>)
    //         : (
    //           <CartItems { ...this.state } />
    //         )}
    //     </div>
    //   </>
    const { shoppingCart } = this.state;
    const number = 1;
    return (
      <div>
        { shoppingCart.length === 0
          ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
          : shoppingCart.map((cartItem) => (
            <div
              key={ cartItem.id }
            >
              <p data-testid="shopping-cart-product-name">{ cartItem.title }</p>
              <img src={ cartItem.thumbnail } alt={ cartItem.title } />
              <p>{`R$ ${cartItem.price}` }</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { `Quantidade ${number}` }
              </p>
            </div>
          )) }
      </div>
    );
  }
}

export default ShoppingCart;
