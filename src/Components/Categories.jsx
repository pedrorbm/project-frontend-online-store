import React, { Component } from 'react';

export default class Categories extends Component {
  render() {
    const { name, id, setCategory } = this.props;
    return (
      <li>
        <label htmlFor={ id } data-testid="category">
          <input
            type="radio"
            id={ id }
            name="category"
            onChange={ setCategory }
          />
          { name }
        </label>
      </li>
    );
  }
}

Categories.propTypes = {}.isRequired;
