import React from 'react';
import './style.css';

function Card({title, place, head}) {
    return (
        <div className={place%2 ? "main__container" : "place__bottom"}>
            <div className='card__container'>
                <div className="card">
                    <div className="card__content">
                        {head && <h4>{head}</h4>}
                        <p>{title}</p>
                    </div>
                </div>
                <div className="shadow"></div>
            </div>  
        </div>
    );
}

export default Card;
