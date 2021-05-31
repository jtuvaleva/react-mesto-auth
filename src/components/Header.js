import React from 'react';
import { Link } from 'react-router-dom';


function Header({ userEmail, isSuccess, loggedIn, handleLogout}) {
  return (
    <header className="header">
      <div className="header__logo" />

      {(isSuccess & loggedIn===false) ? (
          <div className="header__auth">
            <Link to="signin" className="header__link header__link_signup">Войти</Link>
          </div>
        ) 
        : (loggedIn) ? (
          <div className="header__auth">
            <p className="header__user-email">{userEmail} </p>
            <Link to="signin" 
              onClick={handleLogout}
              className="header__link header__link_logout"> Выйти</Link>
          </div>
        ) :(
          <div className="header__auth">
            <Link to="signup" className="header__link header__link_login">Регистрация</Link>
          </div>
        )
      }     
    </header>
  );
}

export default Header;