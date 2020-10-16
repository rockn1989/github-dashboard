import React from "react";
import { Link } from "react-router-dom";

function CartItem({ userData, id }) {
  const { name, fullName, stars, lastCommitData, gitHubUrl } = userData;

  return (
    <li key={id()} className="cart-item">
      <div className="cart-item__name">
        <div className="cart-item__title">Repositories name:</div>
        {name}
      </div>
      <div className="cart-item__rating">
        <div className="cart-item__title">Stars:</div> {stars}
      </div>
      <div className="cart-item__date">
        <div className="cart-item__title">Date of last commit:</div>
        {lastCommitData}
      </div>
      <div>
        <div className="cart-item__link">
          <Link
            to={{
              pathname: `/cart/${fullName}`,
            }}
            className="orange-link"
          >
            Detail
          </Link>
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
            Github Link
          </a>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
