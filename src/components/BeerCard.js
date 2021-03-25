import React from 'react';
import './BeerCard.css';

const BeerCard = (props) => {
  const beer = props.beer;

  return (
    <div className="beer-card">
      <div className="left">
        <img alt="beer-poster" src={beer.image_url} />
      </div>
      <div className="right">
        <div className="header">
          <p>
            <i onClick={() => props.addFav(beer)} class="material-icons md-24">
              stars
            </i>
          </p>
        </div>
        <div className="title">{beer.name}</div>
        <div className="plot">{beer.description}</div>
      </div>
    </div>
  );
};

export default BeerCard;
