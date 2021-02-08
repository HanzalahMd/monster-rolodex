import React from 'react';

import './card.styles.css'

export const Card = (props) => {
    // console.log(props)
    return (
        <div className="card-container">
            <img alt="monster ji" src={`https://robohash.org/${props.monster.id}/?set=set4`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}