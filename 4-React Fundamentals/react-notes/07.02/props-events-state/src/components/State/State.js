import React, {useState} from 'react';

const State = () => {
    const [clicks, setClicks] = useState(0);
    const [InputStr, setInputStr] = useState('i don\'t know');

    return(
        <>
        <p>{clicks}</p>
        <button onClick={() => setClicks(clicks +1)}>Set Clicks Button</button>
        <input value={InputStr} onChange={(e) => setInputStr(e.target.value)} placeholder ="filler text" />
        </>
    )
}

export default State;

/*
Array Destructuring:
const [first, second] = ['zach is amazing', 'brie is awesome', 'goldfish are ok']
console.log (first, second);
*/