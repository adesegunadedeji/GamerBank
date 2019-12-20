import React from 'react';
import gamer1 from '../images/gamerImage1.jpeg'

const Home= (props) => {
  return (
    <div class="layout1 layouts">
    <div class="container">
      <main>
        <section>Section
            <img src={gamer1} alt="image1" className="homepageimage"/>
        </section>
        <aside>Aside</aside>
      </main>
      <footer>Footer</footer>
    </div>
  </div>
  );
};

export default Home;