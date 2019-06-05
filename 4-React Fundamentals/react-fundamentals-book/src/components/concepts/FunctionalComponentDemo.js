import React from 'react';

// const FunctionalComponentDemo = function (){
//     return(
//         <div className="main">
//             <div className="mainDiv">
//                 <div>
//             Hello React
//             </div>
//             <div>
//                 How are you today? 
//             </div>
//         </div>
//         </div>
//     );
// };

const FunctionalComponentDemo = () => {
    return(
    <div className="main">
        <h1>Functional Component</h1>
        <dl>
            Functional Components allow you to render information to the web page without having to use or change state.
            <dt>Presentational</dt>
            <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
            <dt>No 'this' keyword</dt>
            <dd>Unlike class components, functional ones don't use 'this'.</dd> 
            <dt>No state</dt>
            <dd>These are 'dumb' components for UI.</dd> 
            <dt>Can use state </dt>
                    <dd>With the 'useState' hook, functional components can now 
                        both render a display to the page and update the information to be shown.</dd>
                        <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
        </dl>
            <h1>Functional Syntax versus Arrow Function</h1>
        </div>
    )
}
export default FunctionalComponentDemo;

// More Challenges
// If you easily handle that, here are a few more thoughts for exploration. There is some freedom here:

// Add more content about Functional Components in general.
// Do some original styling.
// Make usage of the reactstrap library that we've imported.
// Figure out how to use the codepen npm package that we've added by embedding a Codepen in your view. This anticipates a future lesson on 'props'.
// You are free to make this tutorial site however you would like it to look.
// There is no 'right' answer to this part of the challenge.