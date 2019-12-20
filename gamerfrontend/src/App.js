import React , {Component} from 'react';
import NavbarExample from './components/Navbar'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/About'
import Gamelist from './components/gamelist'
import Home from './components/Home'
import NewGame from './components/newGame'

class App extends Component {


  createGame = async(formData)=>{
    try {
        const newGame = await fetch('http://localhost:3001/gamers',{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json",
                "accept": "application/json"
            }
        })
        const data = await newGame.json();
        console.log("CREATED GAME DATA", data)
        if (data){
            this.setState({
                gamer: [data,...this.state.gamer]
            })
        }
    }
     catch (error) {
        console.log(error) 
        
    }
}

render(){
  return (
    <Router>
    <NavbarExample/>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Landing/>
          </Route>
          <Route path="/new" render={(props)=> <NewGame {...props}
     createGame={this.createGame}/>}/>
          <Route path="/listings">
            <Gamelist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
          }
}
export default App;