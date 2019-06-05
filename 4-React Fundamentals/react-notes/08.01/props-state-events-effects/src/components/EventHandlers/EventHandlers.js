import React from 'react';

const EventHandlers = () => {
    function setDocumentTitle(){
        document.title = Math.random()*100
    }
    return(
    <img src={"https://images.pexels.com/photos/2345871/pexels-photo-2345871.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
    onMouseOver={() => console.log('we moused over')} 
    onMouseLeave={setDocumentTitle}/>
    )
}

export default EventHandlers;

//console.log(e.nativeEvent); will show result like it's regular js