/*
Challenge: pass the "reference" function to EHCHild from 'EventHandlers" as a prop. use that prop
in this component upon a button click.
*/

import React from 'react';

const EHChild = (props) => {
    return(
        <>
        <button id="challenge button" onClick={(props.refProp)}>Challenge Button</button>
        <button id="challenge complete" onClick={(props.challProp)}>Challenge Complete</button>
        </>
    )
}


export default EHChild; 