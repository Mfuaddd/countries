import React, { useEffect, useState } from "react";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainSection() {
  const [dataApi, setDataApi] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFetch();
  }, []);

  async function getFetch() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json();
    setDataApi(await res);
    setIsLoading(false);
  }

  return (
    <div className="main">
      <div className="main__container">
        <div className="main__top">
          <div className="main__top__search">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <input
              type="text"
              placeholder="Search for a country…"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="main__top__filter">
            <span>Filter by Region</span>
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          </div>
        </div>
        <div className="main__bottom">
          {isLoading ? (
            <span>asdas</span>
          ) : (
            dataApi.map((x) => {
              if (x.name.common.toLowerCase().includes(input.toLowerCase())) {
                return (
                  <div className="main__bottom__card">
                    <img src={x.flags.png} alt="" />
                    <ul>
                      <li>
                        <h2>{x.name.common}</h2>
                      </li>
                      <li>
                        <span>Population:</span>
                        <span>{x.population}</span>
                      </li>
                      <li>
                        <span>Region:</span>
                        <span>{x.region}</span>
                      </li>
                      <li>
                        <span>Capital:</span>
                        <span>{x.capital}</span>
                      </li>
                    </ul>
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
