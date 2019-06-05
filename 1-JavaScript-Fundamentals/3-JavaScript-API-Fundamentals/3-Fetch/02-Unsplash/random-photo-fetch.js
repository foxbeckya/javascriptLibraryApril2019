var randomImage = document.querySelector('.random-image'); 
console.log("randomImage:", randomImage);

fetch('https://source.unsplash.com/random')
.then(function(response) {
  if(!response.ok) {
      console.log(response);
      return new Error(response);
  }
  console.log("Response:", response);
  return response.blob();
})
.then(function(photoBlob) {
    console.log("My Blob:", photoBlob)
    var objectURL =URL.createObjectURL(photoBlob);
    console.log("Object URL:", objectURL);
    randomImage.src=objectURL;
    console.log("randomImage.src", randomImage.src);
})
.catch(function(err){
    console.log(err);
})

/*
Try and set up an API key on Unsplash. In this example, we used an open endpoint that doesn't 
require a key, but many of their other endpoints do!! This could be a tough challenge, but spent 
a few minutes to see how you might set it up. Don't spend more than about 30 minutes on this, as 
we'll cover API keys and the whole setup process more in-depth later.*/