import React from 'react';

const PropsChild2 = ({favTVShow, arrayProp}) => {
    return(
        <div>
            <p>{favTVShow}</p>
            <p>{arrayProp[2]}</p>
        </div>
    )
}

export default PropsChild2;

/*
Pass a property which holds an array (called ‘arrayProp’) to ‘PropsChild2’.

Make PropsChild2 use destructuring to grab ‘arrayProp’ and display one value from the array
*/