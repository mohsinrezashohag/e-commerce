import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductScreen from './pages/ProductScreen'
import Cart from './pages/Cart'

function App() {

  return (
    <div className="App">



      <BrowserRouter>

        <Header></Header>

        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/product-screen/:id" element={<ProductScreen></ProductScreen>}></Route>
          <Route path="/cart/:id" element={<Cart></Cart>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>

        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
