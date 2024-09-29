import React, { Component } from 'react';

class PasswordField extends Component {
  handleChange = (field) => (e) => {
    this.props.onChange(field, e.target.value);
  };

  render() {
    const { password, confirmPassword, errors } = this.props;
    return (
      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={this.handleChange('password')}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

        <label htmlFor="confirmPassword">Подтверждение пароля:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange('confirmPassword')}
        />
        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
      </div>
    );
  }
}

export default PasswordField;