import "./App.scss";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

library.add(faMoonSolid, faMoonRegular, faMagnifyingGlass, faAngleDown, faArrowLeftLong);

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="*" element={<h1>NOT FOUND 404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
