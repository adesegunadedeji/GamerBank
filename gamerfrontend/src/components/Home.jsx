import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import gamestop from '../images/gamestop.png'
import xbox from '../images/XBOX.png'
import ps4 from '../images/ps4.jpg'
import nairabet from '../images/nairabet.png'
import facebook from '../images/Facebook.jpg'


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
           <h2> About US</h2>
          <p> Gamerbank creates and delivers more entertaiment experiences 
              to more people than anyone else on earth</p>
              <a href= "/about">LEARN MORE</a>
      </div>
      <div className="masthead">
      <h2>OUR PARTNERS </h2>
       <div className="flexPartners" > 
       <img src ={gamestop} className="partnersImage"/>
       <img src ={ps4}  className="partnersImage"/>
       <img src ={xbox}  className="partnersImage"/>
       <img src ={nairabet}  className="partnersImage"/>
       <img src ={facebook}  className="partnersImage"/>
       </div>
      </div>
      <div className="footer">©2019 Gamer Bank Privacy | Security | Terms and Conditions</div>
  </div>
  );
};

export default Home;