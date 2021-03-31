import React, { useState, useEffect, useRef } from 'react';
import BeerCard from './BeerCard';
import axios from 'axios';


const Home = (props) => {

  const [q, setQ] = useState('');
  let beers, searchResults;
  let oldBeers = useRef();

  if (props.beers) {
    beers = props.beers;
  }

  const setBeers = props.setBeers;
  if (props.searchResults) {
    console.log('inside search if condition');
    searchResults = props.searchResults;
  }

  console.log('inside Home component');

  useEffect(() => {
    if (searchResults !== '') {
      oldBeers = beers;
      setBeers(searchResults);
      console.log('Old beers', oldBeers);
    }
  }, [searchResults]);

  useEffect(() => {});
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
