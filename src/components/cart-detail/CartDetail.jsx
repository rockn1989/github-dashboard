import React from "react";

function CartDetail() {
  return (
    <div className="cart-detail">
      <div className="container">
        <div className="cart-detail__inner">
          <div className="cart-detail__header flex-row flex-align-center flex-wrap">
            <div className="repos-name">
              <span className="cart-label">Repositories name:</span>
              Name
            </div>
            <div className="rating">
              <span className="cart-label">Stars:</span>
              stargazers_count
            </div>
            <div className="last-commit">
              <span className="cart-label">Last commite date:</span>
              updated_at
            </div>
          </div>
          <div className="cart-detail__body">
            <div className="cart-detail__img">
              <img src="avatar_url" alt="name" />
            </div>
            <div className="cart-detail__desc">
              <div className="cart-detail__user-name">
                <span className="cart-label">Author:</span>
                <a href="" rel="noopener noreferrer" target="_blank">
                  "login"
                </a>
              </div>
              <div className="cart-label">List of language:</div>
              <ul className="item-list">
                <li>"language"</li>
              </ul>
              <div className="cart-label">Description:</div>
              <div className="cart-detail__text">"description"</div>
            </div>
          </div>
          <div className="cart-label">Contributors:</div>
          <ul className="item-list avatars">"contributors"</ul>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
