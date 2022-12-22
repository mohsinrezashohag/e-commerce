import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductScreen from './pages/ProductScreen'

function App() {

  return (
    <div className="App">



      <BrowserRouter>

        <Header></Header>

        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/product-screen/:id" element={<ProductScreen></ProductScreen>}></Route>

        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
