import React, { useEffect } from "react";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocalStorage from "../../hooks/useLocalStorage";

function Header() {
  const [theme, setTheme] = useLocalStorage("theme", true);

  useEffect(() => {
    if (theme) document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }, [theme]);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <h1>Where in the world?</h1>
          </div>
          <div onClick={() => setTheme(!theme)} className="header__right">
            <FontAwesomeIcon icon="fa-solids fa-moon" />
            <span>{theme ? "Dark" : "Light"} Mode</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
