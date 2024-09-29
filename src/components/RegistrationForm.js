import React, { Component } from 'react';
import LoginField from './LoginField';
import PasswordField from './PasswordField';
import FullNameField from './FullNameField';
import GenderField from './GenderField';
import SpecializationField from './SpecializationField';
import PositionField from './PositionField';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      gender: '',
      specialization: [],
      position: '',
      errors: {},
      submittedData: null,
    };
  }

  validateForm = () => {
    const { login, password, confirmPassword, fullName, gender, specialization, position } = this.state;
    let errors = {};

    // Валидация логина
    if (!login) {
      errors.login = 'Логин обязателен';
    } else if (login.length < 5) {
      errors.login = 'Логин должен быть не менее 5 символов';
    } else if (/\s/.test(login)) {
      errors.login = 'Логин не должен содержать пробелов';
    } else if (!/^[a-zA-Z0-9]+$/.test(login)) {
      errors.login = 'Логин должен состоять только из букв и цифр';
    }

    // Валидация пароля
    if (password.length < 6 || password.length > 10) {
      errors.password = 'Пароль должен быть от 6 до 10 символов';
    } else if (!/[a-zA-Z]/.test(password)) {
      errors.password = 'Пароль должен содержать хотя бы одну букву';
    } else if (!/\d/.test(password)) {
      errors.password = 'Пароль должен содержать хотя бы одну цифру';
    } else if (/\s/.test(password)) {
      errors.password = 'Пароль не должен содержать пробелов';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Пароли должны совпадать';
    }

    // Валидация полного имени
    if (!fullName) {
      errors.fullName = 'Полное имя обязательно';
    } else if (fullName.length < 2) {
      errors.fullName = 'Имя должно содержать не менее 2 символов';
    } else if (!/^[a-zA-Zа-яА-Я\s]+$/.test(fullName)) {
      errors.fullName = 'Имя должно содержать только буквы и пробелы';
    }

    // Валидация пола
    if (!gender) {
      errors.gender = 'Пол обязателен';
    }

    // Валидация специализации
    if (specialization.length === 0) {
      errors.specialization = 'Выберите хотя бы одну специализацию';
    }

    // Валидация должности
    if (!position) {
      errors.position = 'Выберите должность';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({
        submittedData: {
          login: this.state.login,
          fullName: this.state.fullName,
          gender: this.state.gender,
          specialization: this.state.specialization,
          position: this.state.position,
        },
      });
    }
  };

  handleReset = () => {
    this.setState({
      login: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      gender: '',
      specialization: [],
      position: '',
      errors: {},
      submittedData: null,
    });
  };

  updateField = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { login, password, confirmPassword, fullName, gender, specialization, position, errors, submittedData } = this.state;

    return (
      <div className="registration-container">
        {submittedData && (
          <div className="user-data">
            <h3>Данные пользователя</h3>
            <table>
              <tbody>
                <tr>
                  <td>Логин:</td>
                  <td>{submittedData.login}</td>
                </tr>
                <tr>
                  <td>Полное имя:</td>
                  <td>{submittedData.fullName}</td>
                </tr>
                <tr>
                  <td>Пол:</td>
                  <td>{submittedData.gender}</td>
                </tr>
                <tr>
                  <td>Специализация:</td>
                  <td>{submittedData.specialization.join(', ')}</td>
                </tr>
                <tr>
                  <td>Должность:</td>
                  <td>{submittedData.position}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <h2>Регистрация</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <LoginField value={login} error={errors.login} onChange={(value) => this.updateField('login', value)} />
          </div>

          <div className="form-group">
            <PasswordField
              password={password}
              confirmPassword={confirmPassword}
              errors={errors}
              onChange={(field, value) => this.updateField(field, value)}
            />
          </div>

          <div className="form-group">
            <FullNameField value={fullName} error={errors.fullName} onChange={(value) => this.updateField('fullName', value)} />
          </div>

          <div className="form-group">
            <GenderField value={gender} error={errors.gender} onChange={(value) => this.updateField('gender', value)} />
          </div>

          <div className="form-group">
            <SpecializationField value={specialization} error={errors.specialization} onChange={(value) => this.updateField('specialization', value)} />
          </div>

          <div className="form-group">
            <PositionField value={position} error={errors.position} onChange={(value) => this.updateField('position', value)} />
          </div>

          <div className="button-container">
            <button type="submit">Регистрация</button>
            <button type="button" onClick={this.handleReset}>Сброс</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;