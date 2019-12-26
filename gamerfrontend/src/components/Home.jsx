import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import gamer3 from '../images/gamer3.jpeg'

const Home= (props) => {
  return (
  <div className="home">

      <div className="header">  
      <Jumbotron fluid>
        <Container fluid>
          <h2 className="display-3">Gamer Bank</h2>
          <p className="lead">THE BEST PLACE TO PLAY</p>
          <a class="btn btn-primary" href="#" role="button">See all</a>
        </Container>
      </Jumbotron>
      </div>
      <div className="aside">
          <h3>About US</h3>
          <p> Gamerbank creates and delivers more entertaiment experiences 
              to more people than anyone else on earth</p>
              <a href= "/about">LEARN MORE</a>
      </div>
      <div className="masthead">
        MAST HEAD
      </div>
      <footer>©2019 Gamer Bank Privacy | Security | Terms and Conditions</footer>
  </div>
  );
};

export default Home;