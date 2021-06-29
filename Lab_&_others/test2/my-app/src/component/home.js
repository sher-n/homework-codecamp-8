import React, { useContext }  from 'react'
import logo from '../logo.svg'
import Context from '../Context'

const Home = () => {
  const {state,setState} = useContext(Context)
    return (
             <div className="App">
             <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>
                 Edit <code>src/App.js</code> and save to reload.
                 <span>{state.content}</span>
               </p>
               <a
                 className="App-link"
                 href="https://reactjs.org"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Learn React
               </a>
               <button onClick={() => setState({content: 'Hi people'})}>Change Word</button>
             </header>
           </div>
        
        )}
        
    

export default Home