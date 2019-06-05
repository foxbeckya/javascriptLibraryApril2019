import React from 'react';
import TestChild from './components/TestChild';
import FormChild from './components/FormChild';
import ImageChild from './components/ImageChild';
import './App.css';

function App() {
  const testVar=<p>This is nuts!</p>

  function innerPlay(){
    return <h3>This was returned from a function</h3>
  }

  function arrayPlay(){
   return [0, 1, 2, 3, 4].map(val => <p>{val}</p>) //input array: [0,1,2,3,4] output: p tags with numbers
  }
  function arrayPlay2(){ //this function should return an array of span tags based upon the array of strings
  return ['this is a string', 'this is also a string', 'heres another one'].map(val => <span>{val}</span>)
  }

  function arrayPlay3(){
    return [0, 1, 2, 3, 4].filter(val => val%2===0).map(val => <li>{val}</li>)
  }
  return (
 <div id="styleTest">
 <div>
 <ul id="tabs">
<li>One</li> 
<li>Two</li>
<li>Three</li>
<li>Four</li>
<li>Five</li>
 </ul>
 <h1>React is Awesome!</h1>
 <h1>React still rocks!</h1>
 </div>
 <TestChild />
 <FormChild />
 <ImageChild />
 {testVar}
 {innerPlay()}
 {arrayPlay()}
 {arrayPlay2()}
 {arrayPlay3()}
 </div>
  );
}

export default App;

//Challenge: Inside of App.js, build a navbar with 5 equally-spread out tabs
//2)  Challenge: Add to the first challenge.  Make App.js call two children:  the
//first child should display an image (on the left side of the screen), the second
//child should display a form (with whatever contents you want to include).

