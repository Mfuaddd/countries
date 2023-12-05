import './App.scss';
import Header from './layouts/Header';
import MainSection from './components/MainSection';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons';

library.add(faMoonSolid,faMoonRegular,faMagnifyingGlass,faAngleDown)

function App() {
  return (
    <>
      <Header/>
      <MainSection/>
    </>
  );
}

export default App;
