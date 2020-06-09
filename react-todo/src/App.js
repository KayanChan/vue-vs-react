import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import logo from './logo.svg'
import './App.css'
import routes from './router'

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Redirect path="/" to="/Hooks" />
        {
          routes.map((route, i) => {
            return (<Route
              key={i}
              path={route.path}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )}
            />)
          })
        }
      </div>
    </Router>
  );
}

export default App;
