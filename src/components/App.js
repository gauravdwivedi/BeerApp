import React, { useState, useEffect } from 'react';
import Header from './Header';
import Fav from './Fav';
import Home from './Home';
import axios from 'axios';
import usePunkSearch from '../usePunkSearch';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  const [fav, setFav] = useState([]);
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [oldBeers, setOldBeers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const search_results = usePunkSearch(query, pageNumber);

  useEffect(() => {
    setOldBeers(beers);
    setBeers(search_results);
  }, [search_results]);

  function UpdateUIwithSearchResults() {
    setBeers(search_results);
  }
  const fetchData = () => {
    axios({
      method: 'GET',
      url: `https://api.punkapi.com/v2/beers`,
    })
      .then((response) => {
        console.log(response);
        setBeers([...beers, ...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleSearch(query) {
    setQuery(query);
  }

  const addFav = (item) => {
    setFav((fav) => [...fav, item]);
  };
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                addFav={addFav}
                beers={beers}
                setBeers={setBeers}
                handleSearch={handleSearch}
              />
            )}
          />
          <Route path="/favourites" exact render={() => <Fav fav={fav} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
