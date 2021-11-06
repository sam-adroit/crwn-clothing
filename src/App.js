import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.components';
import ShopPage from './page/shop/shop.component';
import Header from './component/header/header.component';
    

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
