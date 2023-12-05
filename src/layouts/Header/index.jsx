import React from "react";
import "./index.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {

    function changeTheme() {
        document.body.classList.toggle("dark")
      }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <h1>Where in the world?</h1>
          </div>
          <div onClick={()=>changeTheme()} className="header__right">
            <FontAwesomeIcon icon="fa-solids fa-moon" />
            <span>Dark Mode</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
