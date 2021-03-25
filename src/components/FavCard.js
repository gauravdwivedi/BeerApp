import React from 'react';
import './FavCard.css';

const FavCard = (props) => {
  const beer = props.beer;
  return (
    <div className="fav-card">
      <div className="left">
        <img alt="fav-poster" src={beer.image_url} />
      </div>
      <div className="right">
        <div className="header">
          <p>
            <i class="material-icons md-24 fav-item">stars</i>
          </p>
        </div>
        <div className="title">{beer.name}</div>
        <div className="plot">{beer.description}</div>
      </div>
    </div>
  );
};

export default FavCard;
