import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import HomePage from './Home';
import Pages from './Pages';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import Box from '@material-ui/core/Box';
function App() {
  const [open,setOpen] = useState(false);
  console.log(open);
  return (
    <div className="App">
      <header className="App-header">
        <h1> Description MDS </h1>
       <Box>
         <p>pipip</p>
       </Box>
         <button onClick={() => setOpen(!open)}> Lock drawer </button>
        {/* <Navigation></Navigation> */}
       <Drawer 
        open={open}
        variant="persistent"
        anchor="left"
        className={{backgroundColor: 'red'}}
      >
          <List  onClick={() => setOpen(!open)}>Return</List>
          <List> Bar à Chat </List>
          <List> Les frères toques </List>
          <List> Filets solidaires </List>
          <List> Les marchés d'Angers </List>
       </Drawer>
      </header>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/page" render={(props) => <Pages {...props} />} />
          </Switch> 
        </Router>
    </div>
  );
}

export default App;
