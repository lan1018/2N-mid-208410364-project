import React from 'react';
import './demo64.css';


const Card = ({ img, name, email }) => {
    return (
        <div className='bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img src={img}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;