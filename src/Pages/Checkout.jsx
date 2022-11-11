import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  state = {
    shoppingCart: [],
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    adress: '',
  };

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem('Cart-Item'));
    if (localStorage.length > 0) {
      this.setState({
        shoppingCart: cartItems,
      });
    }
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validationForm = () => {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      adress,
    } = this.state;
    const validation = (fullname.length > 0
      && email.length > 0
      && cpf.length > 0
      && phone.length > 0
      && cep.length > 0
      && adress.length > 0
    );
    return validation;
  };

  checkoutButton = () => {
    if (this.validationForm()) {
      this.setState({ error: false });
      const { history } = this.props;
      history.push('/');
      localStorage.clear();
    }
    this.setState({ error: true });
  };

  render() {
    const { shoppingCart, fullname, email, cpf, phone, cep, adress, error } = this.state;
    return (
      <div>
        { shoppingCart.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.title }</p>
          </div>

        )) }
        <form action="submit">
          <label htmlFor="fullname">
            Nome Completo:
            <input
              type="text"
              id="fullname"
              name="fullname"
              data-testid="checkout-fullname"
              onChange={ this.onInputChange }
              value={ fullname }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              data-testid="checkout-email"
              onChange={ this.onInputChange }
              value={ email }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              name="cpf"
              id="cpf"
              data-testid="checkout-cpf"
              onChange={ this.onInputChange }
              value={ cpf }
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              type="text"
              name="phone"
              id="phone"
              data-testid="checkout-phone"
              onChange={ this.onInputChange }
              value={ phone }
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              type="text"
              name="cep"
              id="cep"
              data-testid="checkout-cep"
              onChange={ this.onInputChange }
              value={ cep }
            />
          </label>
          <label htmlFor="adress">
            Endereço:
            <input
              type="text"
              name="adress"
              id="adress"
              data-testid="checkout-address"
              onChange={ this.onInputChange }
              value={ adress }
            />
          </label>
          <p>Método de pagamento:</p>
          <label htmlFor="ticket">
            Boleto
            <input
              type="radio"
              name="radio"
              id="ticket"
              data-testid="ticket-payment"
              defaultChecked
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="visa">
            Visa
            <input
              type="radio"
              name="radio"
              id="visa"
              data-testid="visa-payment"
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="master">
            MasterCard
            <input
              type="radio"
              name="radio"
              id="master"
              data-testid="master-payment"
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="elo">
            Elo
            <input
              type="radio"
              name="radio"
              id="elo"
              data-testid="elo-payment"
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="submit"
            onClick={ (this.checkoutButton) }
            data-testid="checkout-btn"
          >
            Fazer pedido
          </button>
          { error && <p data-testid="error-msg">Campos inválidos</p>}
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default Checkout;
