import React from 'react';

class LoginField extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="login">Логин:</label>
        <input
          type="text"
          id="login"
          name="login"
          value={this.props.value}
          onChange={this.handleChange}
        />
        {this.props.error && <div style={{ color: 'red' }}>{this.props.error}</div>}
      </div>
    );
  }
}

export default LoginField;