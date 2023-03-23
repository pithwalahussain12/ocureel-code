import React from 'react';
import './style.css';

function Card({title, place}) {
    return (
        <div className={place%2 ? "main__container" : "place__bottom"}>
            <div className='card__container'>
                <div className="card">
                    <div className="card__content">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="shadow"></div>
            </div>  
        </div>
    );
}

export default Card;
