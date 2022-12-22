
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Dashboard from './screens/Dashboard';
import PageLogin from './screens/PageLogin';
import PageSignup from './screens/PageSignup';
import React, { useState, useEffect } from "react";

function App() {
  let auth = localStorage.getItem("token")
  console.log("auth ==> ",auth)
  return (
    <Routes>
    {!auth && (
      <>
      <Route path='/' element={<PageLogin />} />
      <Route path='/signup' element={<PageSignup />} />
      </>
      )}
    {auth && (
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Dashboard />} />
      </Route>
    )}
    </Routes>
  );
}

export default App;
