import React, { Component } from 'react';

class SpecializationField extends Component {
  handleChange = (e) => {
    const { value, checked } = e.target;
    let newSpecialization = [...this.props.value];
    if (checked) {
      newSpecialization.push(value);
    } else {
      newSpecialization = newSpecialization.filter((spec) => spec !== value);
    }
    this.props.onChange(newSpecialization);
  };

  render() {
    const { value, error } = this.props;
    const specializations = ['Дизайн', 'Программирование', 'Администрирование'];

    return (
      <div>
        <div>Специализация:</div> {}
        {specializations.map((spec) => (
          <div key={spec}>
            <label>
              <input
                type="checkbox"
                name="specialization"
                value={spec}
                checked={value.includes(spec)}
                onChange={this.handleChange}
              />
              {spec}
            </label>
          </div>
        ))}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }
}

export default SpecializationField;