document.getElementById("submit").addEventListener('click', function(event){
    // NOTE: You are clicking a submit button.  After this function runs,
    // then the form will be submitted.  If you want to *stop* that, you can
    // use the following:
    // event.preventDefault();

    // In here `this` will be the element that was clicked, the submit button
     document.getElementById('mytext').innerHTML += "Hello Hi";
});