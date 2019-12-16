import React , {Component} from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/landing'
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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/landing">Landing</Link>
            </li>
            <li>
              <Link to="/new">new</Link>
            </li>
            <li>
              <Link to="/gamelist">Gamelist</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/landing">
            <Landing/>
          </Route>
          <Route path="/new" render={(props)=> <NewGame {...props}
     createGame={this.createGame}/>}/>
          <Route path="/Gamelist">
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