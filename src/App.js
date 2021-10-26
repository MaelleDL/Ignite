import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';

import Home from './Pages/home';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav/>
      <Route path={["/game/:id","/"]}>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
