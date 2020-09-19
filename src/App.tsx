import React from 'react';
import './styles/grid.css';
import './App.css';

import Header from './components/Header/Header';
import SearchContainer from './Views/Search/SearchContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <SearchContainer/>
      </div>
    </div>
  );
}

export default App;