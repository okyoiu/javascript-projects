const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
  
  // 1. Stops the browser from instantly refreshing the page (the default behavior)
  event.preventDefault(); 
  // 2. Scoop up all the data the user just typed into the boxes
  const formData = new FormData(contactForm);
  // (This relies on those "name" attributes we talked about earlier!)
  const dataWeCollected = Object.fromEntries(formData.entries());
  console.log("Success! Here is what the user typed:", dataWeCollected);

  // throws a big pop up to be seen by user
  alert("Awesome, your message was saved! Check the console to see the data.");
  
  // wipes the text boxes clean so the form is ready to be used again
  contactForm.reset(); 
});