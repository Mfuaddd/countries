import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailSection() {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  let { name } = useParams();

  useEffect(() => {
    getFetch(name);
  }, []);

  async function getFetch(name) {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const res = await data.json();
    setDataApi(res[0]);
    setIsLoading(false)
  }

  if(isLoading){
    return
  }
  return (
    <>
      <div className="detail">
        <div className="detail__container">
          <div className="detail__top">
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
              <span className="country-info-right">Back</span>
            </Link>
          </div>
          <div className="detail__bottom">
            <div className="detail__bottom__left">
              <img src={dataApi.flags?.svg} alt="" />
            </div>
            <div className="detail__bottom__right">
              <h2>{dataApi.name?.common}</h2>
              <div className="detail__bottom__right__text">
                <ul className="detail__bottom__right__text__left">
                  <li>
                    <span className="country-info-left">Native Name:</span>
                    <span className="country-info-right">{dataApi.name.nativeName[Object.keys(dataApi.name.nativeName)[0]].common}</span>
                  </li>
                  <li>
                    <span className="country-info-left">Population:</span>
                    <span className="country-info-right">
                      {dataApi.population.toLocaleString('en -US')}
                    </span>
                  </li>
                  <li>
                    <span className="country-info-left">Region:</span>
                    <span className="country-info-right">{dataApi.region}</span>
                  </li>
                  <li>
                    <span className="country-info-left">Sub Region:</span>
                    <span className="country-info-right">
                      {dataApi.subregion}
                    </span>
                  </li>
                  <li>
                    <span className="country-info-left">Capital:</span>
                    <span className="country-info-right">
                      {dataApi.capital}
                    </span>
                  </li>
                </ul>
                <ul className="detail__bottom__right__text__right">
                  <li>
                    <span className="country-info-left">Top Level Domain:</span>
                    <span className="country-info-right">{dataApi.tld}</span>
                  </li>
                  <li>
                    <span className="country-info-left">Currencies:</span>
                    <span className="country-info-right">{
                    dataApi.currencies[Object.keys(dataApi.currencies)[0]].name
                }</span>
                  </li>
                  <li>
                    <span className="country-info-left">Languages:</span>
                    <span className="country-info-right">{Object.keys(dataApi.languages).map(x=><span >{dataApi.languages[x]} </span>)}</span>
                  </li>
                </ul>
              </div>
              <div className="detail__bottom__right__border-countries">
                <span className="country-info-left">Border Countries:</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailSection;
