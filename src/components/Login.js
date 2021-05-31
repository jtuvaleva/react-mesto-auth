import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ handleLogin}){
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]:value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password){
      return;
    }
    const {email, password} = data;
    handleLogin({email, password})
  }

  return(
    <div className="login-signup">
          <h3 className="login-signup__title">
              Войти
          </h3>
          <form className="login-signup__form" 
                name='login-signup-form'
                onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" id="email" name="email" 
                    className="login-signup__form-input login-signup__form-input_field_email" 
                    required minLength="2"
                    value={data.email}
                    onChange={handleChange}/>
              <span className="login-signup__form-error email-error"></span>
              <input type="password" placeholder="Пароль" id="password" name="password" 
                    className="login-signup__form-input login-signup__form-input_field_password" required
                    value={data.password}
                    onChange={handleChange}/>
              <span className="login-signup__form-error password-error"></span>

              <button type="submit" aria-label="кнопка-войти"
                    className="login-signup__submit-btn"
                    onSubmit={handleSubmit}>Войти
              </button>
              <p className="login-signup__login-area">Еще не зарегистрированы? 
              <Link to="signup" className="login-signup__login-area login-signup__link"> Зарегистрироваться</Link>
              </p>
          </form>

      </div>
  )
}

export default Login;