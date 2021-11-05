import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.components';

const HatsPage = props => {
  console.log(props);
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='shop/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
