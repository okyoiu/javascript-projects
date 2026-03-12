// using let to overwrite arr. w/ new one
let arr = [2,4,8,12,16,18];

// grabbing the HTML file
const arrayContainer = document.getElementById('array-container');

// generator function for making the boxes
const renderArray = () => {
    /* .map() = accepts a callback(lambda function) for each element */
    const htmlString = arr.map((value) => { // passing by "raw" value w/ function
        return `<div class=box>${value}</div>`; // using a "template literal"
    }).join(''); // join turns array into string

    arrayContainer.innerHTML = htmlString; // innerHTML allows to insert data
}


const swapBtn = document.getElementById('swap-btn');
const resetBtn = document.getElementById('reset-btn');

// swapping logic
const swapElements = (indexA, indexB) => {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;

    renderArray(); // redraw's the values after change
}

// waits on click then calls the function defined
swapBtn.addEventListener('click', () => {
    swapElements(1,3);
})
resetBtn.addEventListener('click', () => {
    arr = [2,4,8,12,16,18];
    renderArray();
})

renderArray();