import React, { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Count from './components/Count'
import Route from './router/Route'
import Provider from './router/Provider'

function App() {
 
// Provider -> Context, Child -> access path, and update path  
// route -> current context(path) ->
  return (
    <div className="App">
      <header className="App-header">
        <Provider>                  
          <Route path={"/header"}> 
            <Header/>
          </Route>
          <Route path={"/"}>
            <Count/>
          </Route>
          <Route path={"/footer"}>
            <Footer/>
          </Route>
        </Provider>
      </header>
    </div>
  )
}

export default App
