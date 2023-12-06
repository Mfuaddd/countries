import React, { useEffect, useState } from "react";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MainSection() {
  const [dataApi, setDataApi] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filterMenu, setFilterMenu] = useState(false);

  useEffect(() => {
    getFetch();
  }, []);

  async function getFetch() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json();
    setDataApi(await res);
    setIsLoading(false);
  }
  function handleSetFilter(e, str) {
    e.stopPropagation();
    setFilter(str);
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
          <div
            onClick={() => setFilterMenu(!filterMenu)}
            className="main__top__filter"
          >
            <span>Filter by Region</span>
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
            <ul
              style={
                filterMenu
                  ? { transform: "scaleY(100%)" }
                  : { transform: "scaleY(0)" }
              }
              className="main__top__filter__menu"
            >
              <li onClick={(e) => handleSetFilter(e, "")}>All</li>
              <li onClick={(e) => handleSetFilter(e, "Africa")}>Africa</li>
              <li onClick={(e) => handleSetFilter(e, "Americas")}>America</li>
              <li onClick={(e) => handleSetFilter(e, "Asia")}>Asia</li>
              <li onClick={(e) => handleSetFilter(e, "Europe")}>Europe</li>
              <li onClick={(e) => handleSetFilter(e, "Oceania")}>Oceania</li>
            </ul>
          </div>
        </div>
        <div className="main__bottom">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            dataApi.map((x) => {
              if (
                x.name.common.toLowerCase().includes(input.toLowerCase()) &&
                x.region.includes(filter)
              ) {
                return (
                  <Link to={`/detail/${x.name.common}`}>
                    <div className="main__bottom__card">
                      <img src={x.flags.png} alt="" />
                      <ul>
                        <li>
                          <h2>{x.name.common}</h2>
                        </li>
                        <li>
                          <span className="country-info-left">Population:</span>
                          <span className="country-info-right">
                            {x.population.toLocaleString('en-US')}
                          </span>
                        </li>
                        <li>
                          <span className="country-info-left">Region:</span>
                          <span className="country-info-right">{x.region}</span>
                        </li>
                        <li>
                          <span className="country-info-left">Capital:</span>
                          <span className="country-info-right">
                            {x.capital}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </Link>
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
