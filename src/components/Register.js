import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({handleRegister}) {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = data;
    handleRegister({password, email})
  }

  return (
    <div className="login-signup">
      <h3 className="login-signup__title">
          Регистрация
      </h3>
      <form className="login-signup__form" name='login-signup-form' onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email" id="email" name="email" 
          className="login-signup__form-input login-signup__form-input_field_email" 
          minLength="2" autoComplete="off"
          value={data.email} onChange={handleChange}/>
          <span className="login-signup__form-error email-error"></span>
          <input required type="password" placeholder="Пароль" id="password" name="password" 
          className="login-signup__form-input login-signup__form-input_field_password" 
          autoComplete="off"
          value={data.password} onChange={handleChange}/>
          <span className="login-signup__form-error password-error"></span>

          <button type="submit" aria-label="кнопка-Зарегистрироваться"
            className="login-signup__submit-btn"
            value='Зарегистрироваться'
            onSubmit={handleSubmit}>Зарегистрироваться
          </button>
          <p className="login-signup__login-area">Уже зарегистрированы? 
            <Link to="signin" className="login-signup__login-area login-signup__link"> Войти</Link>
          </p>
      </form>

    </div>
  )
}
  export default Register;