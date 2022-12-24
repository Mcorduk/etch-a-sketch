let container = document.querySelector('.container');

    // Get the create grid button
    let btnCreateGrid = document.querySelector('#btn-create-grid');

 // Add a click event listener to the button
 btnCreateGrid.addEventListener('click', function(event) {
    // Prompt the user for the number of squares per side
    let numSquaresPerSide = prompt('Enter the number of squares per side:');

    // Validate the user input
    if (numSquaresPerSide == null || numSquaresPerSide === '' || isNaN(numSquaresPerSide) || numSquaresPerSide > 100) {
      // Invalid input: show an error message and return
      alert('Invalid input. Please enter a number less than or equal to 100..');
      return;
    }

    // Remove all child elements from the container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.style.gridTemplateColumns = 'repeat(' + numSquaresPerSide + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + numSquaresPerSide + ', 1fr)';;

    for (let i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
      let div = document.createElement('div');
      div.classList.add('my-class');
    
      // Add a mouseover event listener to the div element
      div.addEventListener('mouseover', function(event) {
        // Generate a random color
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    
        // Set the background color of the div element
        div.style.backgroundColor = color;
      });
    
      // Append the div element to the container
      container.appendChild(div);
    }
  });
// Create and append the 16 div elements
for (let i = 0; i < 256; i++) {
  // Create a new div element
  let div = document.createElement('div');

  // Set the div's class attribute
  div.setAttribute('class', 'my-class');

  // Set the div's inner HTML
  // div.innerHTML = 'Div number ' + (i + 1);

  // Add the div to the container
  container.appendChild(div);
}

// Get the div elements with the class "my-class"
let divs = document.querySelectorAll('.my-class');

// Add a mouseover event listener to each div
for (let div of divs) {
  div.addEventListener('mouseover', function(event) {
    // Generate a random hex color
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Set the div's background color
    div.style.backgroundColor = color;
  });
};