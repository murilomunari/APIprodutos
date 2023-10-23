import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
 
import ListaProduto from "./components/ListaProduto";
import FormProduto from "./components/FormProduto";
 
export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ListaProduto /> } />
          <Route path="/incluir" element={ <FormProduto /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}