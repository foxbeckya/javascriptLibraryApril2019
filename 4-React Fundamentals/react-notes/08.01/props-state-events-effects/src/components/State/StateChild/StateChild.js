import React, {useState} from 'react';

export const StateChild = (props) => {
    const [num, setNum] = useState(0.5);

    return(
        <div>
          <button onClick={() => setNum(Math.random())}> change num to rand num </button>
            <p>This is our StateChild</p>
            <p>{props.stateVar}</p>
            <p>{num}</p>
        <input placeholder= 'child input'
        value={props.stateVar} onChange = {(e) => props.setParentText(e.target.value)}/>
        

    
        </div>
    )
}

/*Have students configure a button which changes a state variable 
      (a string) when it gets clicked.  The state variable change should replace the
      current state variable value with a new, random value.  This state variable
      value should be displayed in a span tag. */

export const BerryComponent = () => {
    return (
        <div>
            <p>This is our BerryComponent</p>
        </div>
    )
} 
