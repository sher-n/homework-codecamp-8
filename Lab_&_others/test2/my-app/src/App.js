import React, { useState } from 'react';
import './App.css';
import Home from './component/home';
import Context from './Context';

function App() {
  const [state, setState] = useState({content: 'Hi React!'})
  return (

    <Context.Provider value={{state,setState}}>
       <Home />
    </Context.Provider>
   
 
    
  );
}

export default App;
