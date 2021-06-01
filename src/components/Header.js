import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header({ userEmail, loggedIn, handleLogout}) {
  const currentPage = useLocation();
  const pageLink = (currentPage.pathname==='/signin')? 'signup':'signin';
  const pageName = (currentPage.pathname==='/signin')? 'Регистрация':'Войти';

  return (
    <header className="header">
      <div className="header__logo" />
      
      {(loggedIn===false) ? (
          <div className="header__auth">
            <Link to={pageLink} className="header__link header__link_signup">{pageName}</Link>
          </div>
        ) : (
          <div className="header__auth">
            <p className="header__user-email">{userEmail} </p>
            <Link to="signin" 
              onClick={handleLogout}
              className="header__link header__link_logout"> Выйти</Link>
          </div>
        )
      }    
    </header>
  );
}

export default Header;