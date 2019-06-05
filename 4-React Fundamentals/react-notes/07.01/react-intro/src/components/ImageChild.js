import React from 'react';


function ImageChild(){

    function SecondImage(){
        return(
            <div className="photo">
            <img src= "https://images.pexels.com/photos/2306109/pexels-photo-2306109.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
            </div>
        )}

    return(
        <div className="image">
<img src='https://images.pexels.com/photos/2284350/pexels-photo-2284350.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
{SecondImage()}
</div>  )

}


export default ImageChild;