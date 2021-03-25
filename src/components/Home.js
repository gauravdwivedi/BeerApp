import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import axios from 'axios';
const Home = (props) => {
  const beers = props.beers;
  const setBeers = props.setBeers;
  const [q, setQ] = useState('');

  function handleChange(e) {
    setQ(e.target.value);
  }


  const renderCard = beers.map((beer) => {
    return <BeerCard key={beer.id} beer={beer} addFav={props.addFav} />;
  });

  return (
    <div id="list">
      <div className="main-container">
        <div className="search-bar">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search for beer..."
          />
          <button onClick={() => props.handleSearch(q)}>Search</button>
        </div>

        <div className="beers-container">{renderCard}</div>
      </div>
    </div>
  );
};

export default Home;
