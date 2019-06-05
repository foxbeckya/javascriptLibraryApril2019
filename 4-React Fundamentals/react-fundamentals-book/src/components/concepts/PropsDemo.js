import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [color,setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles={
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    let toggleColor =() => {
        color === 'white' ? setColor('pink') : setColor('white');
    }
    let toggleBackground =() => {
        backgroundColor === 'grey' ? setBackgroundColor('lightgreen') : setBackgroundColor('grey');
    }
    let toggleBorderRadius =() => {
        borderRadius === '25px' ? setBorderRadius('50px') : setBorderRadius('25px');
    }
    let toggleBorderStyle =() => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }
    return (
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
            <FunctionalComponent string="will this display?" function={toggleColor} selectedStyle={color}/>
            <FunctionalComponent string="this will display" function={toggleBackground} selectedStyle={backgroundColor}/>
            <FunctionalComponent string="I'm doing the same thing 3 times" function={toggleBorderRadius} selectedStyle={borderRadius}/>
            <FunctionalComponent string="I did just copy and paste on this one" function={toggleBorderStyle} selectedStyle={borderStyle}/>
            </div>
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Toggle Style</button>
            <TinyComponent selectedStyle={props.selectedStyle}/>
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is: {props.selectedStyle}</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: ()=> console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??'
}

FunctionalComponent.propTypes ={
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}