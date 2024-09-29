import React, { Component } from 'react';

class PositionField extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value, error } = this.props;
    const positions = [
      'Директор',
      'Заместитель директора',
      'Руководитель проекта',
      'Начальник отдела',
      'Программист',
      'Дизайнер',
      'Консультант',
      'Служащий',
    ];

    return (
      <div>
        <label htmlFor="position">Должность:</label>
        <select id="position" name="position" value={value} onChange={this.handleChange}>
          <option value="">--- Выберите ---</option>
          {positions.map((pos, index) => (
            <option key={index} value={pos}>
              {pos}
            </option>
          ))}
        </select>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }
}

export default PositionField;