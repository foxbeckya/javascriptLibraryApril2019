import React, {useState, useEffect} from 'react';

const EffectsChallenge = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (text.length %5 === 0){
       var interval = setInterval(() => console.log('bananas in pajamas'), 2000);    
        }

        return() => clearInterval(interval);
    })

    return(
        <input placeholder="we want 2 way binding" value={text} onChange={(e) => setText(e.target.value)}/>
    )
    }

    export default EffectsChallenge; 