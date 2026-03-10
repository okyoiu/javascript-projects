// grabs ID from html and acts like a "pointer" 
const timeDisplay = document.getElementById('time-display');

// arrow function: 
//      keyword variable = (arg.) => function
const updateClock = () => {
    // javascript has its own deconstructor called
    const now = new Date; // # of ms since 1.1.1970

    // .tolocatetimestring turns Date obj. to readable string
    // e.g. "5:30:34 PM"
    const timeString = now.toLocaleDateString();

    // display is a reference to obj. (h1 tag)
    // ".innerText" is a "setter" property (only getting "00:00:00" part)
    timeDisplay.innerText = timeString;

}

updateClock(); // calls the function
setInterval(updateClock, 1000) // sets a timer for each ms called