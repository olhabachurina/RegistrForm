import React, { Component } from 'react';

class FullNameField extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value, error } = this.props;
    return (
      <div>
        <label htmlFor="fullName">Полное имя:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={value}
          onChange={this.handleChange}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }
}

export default FullNameField;