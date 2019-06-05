import React from 'react';
import EHChild from './EHChild/EHChild';

const EventHandlers = () => {
    function reference(event){
        console.log(event.target.id);
}

function challenge(event) {
    console.log('challenge complete');
}


    return(
        <div>
            <button id="reference button" onClick={reference}>Reference Function</button>
            <button id="inline button" onClick={(e)=>console.log(e.target.id)}>Inline Function</button>
            <EHChild refProp = {reference} challProp={challenge}/>
        </div>
    )
}

export default EventHandlers; 