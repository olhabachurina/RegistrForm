import React, { Component } from 'react';

class GenderField extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value, error } = this.props;
    return (
      <div>
        <div>Пол:</div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="М"
              checked={value === 'М'}
              onChange={this.handleChange}
            />
            М
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Ж"
              checked={value === 'Ж'}
              onChange={this.handleChange}
            />
            Ж
          </label>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
      </div>
    );
  }
}

export default GenderField;