import React from 'react';

const PropsChild = (props) => {
    return(
        <div>
            <p>{props.favHero}</p>
            <h1>{props.favIceCream}</h1>
            <span>{props.favNumber}</span>
            {props.children}
            <p>{props.favArray[1]}</p>
            <p>{props.favObject.propertyB}</p>
        </div>
    )
}

export default PropsChild;