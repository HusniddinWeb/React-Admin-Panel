import React, { useContext, useState } from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { Routes, Route } from 'react-router-dom'
import { productInput } from './formSource'
import { userInput } from './formSource'
import "./style/dark.scss"
import { DarkModeContext } from './context/darkModeContext'

function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      
      <Routes>

        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="list" element={<Login/> }/>
        </Route>

        <Route path='users'>
          <Route index element={<List />} />
          <Route path=":userId" element={ <Single /> } />
          <Route path="new" element={ <New inputs={userInput} title="Add New User" /> } />
        </Route>

        <Route path='products'>
          <Route index element={<List />} />
          <Route path=":productId" element={ <Single /> } />
          <Route path="new" element={ <New inputs={productInput} title="Add New product" /> } />
        </Route>

      </Routes>

    </div>
  )
}

export default App