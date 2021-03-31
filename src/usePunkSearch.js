import { useEffect, useState } from 'react';
import axios from 'axios';

const usePunkSearch = (query) => {
  const [beers, setBeers] = useState([]);

  console.log('Hitting it!');
  useEffect(() => {
    if (query) {
      axios({
        method: 'GET',
        url: 'https://api.punkapi.com/v2/beers/',
        params: { beer_name: query },
      }).then((res) => {
        console.log(res.data);
        setBeers(res.data);
      });
    }
  }, [query]);
  return beers;
};

export default usePunkSearch;
