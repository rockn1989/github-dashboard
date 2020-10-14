import React from 'react';

function CartItem({userData, id}) {
    const {
        name, 
        fullName, 
        stars, 
        lastCommitData, 
        gitHubUrl
    } = userData;

    return (
        <li key={id()} className="cart-item">
            <div className="card-item__name">Repositories name:{name}</div>
            <div className="card-item__rating">Stars: {stars}</div>
            <div className="card-item__date">
                Date of last commit:{lastCommitData}
            </div>
            <div>
            <div className="car-item__link">
                Github Link:
                <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                >
                {gitHubUrl}
                </a>
            </div>
            </div>
        </li>
    )
}

export default CartItem;
