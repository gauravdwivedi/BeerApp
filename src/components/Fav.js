import React from 'react';
import FavCard from './FavCard';

const Fav = (props) => {
  console.log(props);

  const beers = props.fav;
  console.log(beers);

  const renderFavList = beers.map((beer) => {
    return <FavCard key={beer.id} beer={beer} />;
  });

  return <div className="beers-container">{renderFavList}</div>;
};

export default Fav;
