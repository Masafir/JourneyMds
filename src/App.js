import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import HomePage from './Home';
import Pages from './Pages';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import theme from './theme';
const NavigationBar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-around;
  text-align: center;
  backdrop-filter: blur(2px);
  padding: 5px;
`;
const NavElement = styled.div`
  cursor: pointer;
`;
const Linker = styled.a`
  color: ${props => props.color ? props.color : theme.primary};
  text-decoration: none;
`;

function App() {
  const [open,setOpen] = useState(false);
  console.log(open);
  return (
    <div className="App">
        {/* <Navigation></Navigation> */}
       <Drawer 
        open={open}
        variant="persistent"
        anchor="left"
        classes={{backgroundColor: 'red'}}
      >
          <List style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}> Return </List>
          <List style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}> <Linker href="#barachat"> Bar à Chat</Linker>  </List>
          <List style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}> <Linker href="#petitpres">Les petits près</Linker> </List>
          <List style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}> <Linker href="#freretoques">Les frères toques</Linker> </List>
          <List style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}> <Linker href="#filetsolidaire">Filets solidaires</Linker> </List>
          <List style={{cursor: 'pointer'}} onClick={() => setOpen(!open)}> <Linker href="#marcheAngers">Les marchés d'Angers</Linker> </List>
       </Drawer>
       <NavigationBar> 
          <NavElement onClick={() => setOpen(!open)}>
           Nav 
          </NavElement>
          <NavElement>
           <Linker href="#head" color='white'> Home </Linker> 
          </NavElement>  
          <NavElement>
           Nav 
          </NavElement>   
        </NavigationBar>
        <HomePage />
    </div>
  );
}

export default App;
