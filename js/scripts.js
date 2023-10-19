// constants for query selector
const customColorBtn = document.querySelector('.custColor');
const randomColorBtn = document.querySelector('.randColor');
const customNumberInput = document.querySelector('#customNumber');
const studentIdParagraph = document.querySelector('#myStudentId');
const body = document.body;

// function to change bg color from user input and add student id
function changeCustomColor() {
    let number = parseInt(customNumberInput.value);

    // Set the student ID
    studentIdParagraph.textContent = "Student ID: 200542367";

    // Change the background color based on the user's input
    if (number < 0 || number > 100) {
        body.style.backgroundColor = 'red';
    } else if (number >= 0 && number <= 20) {
        body.style.backgroundColor = 'green';
    } else if (number > 20 && number <= 40) {
        body.style.backgroundColor = 'blue';
    } else if (number > 40 && number <= 60) {
        body.style.backgroundColor = 'orange';
    } else if (number > 60 && number <= 80) {
        body.style.backgroundColor = 'purple';
    } else if (number > 80 && number <= 100) {
        body.style.backgroundColor = 'yellow';
    }
}

// Add event listener for customColorBtn
customColorBtn.addEventListener('click', changeCustomColor);

// function to change bg color from random no.
function changeRandomColor() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNumber; // Display the random number in the input field for reference
    changeCustomColor(); // Use the changeCustomColor function to set the background color based on the random number
}

// Add event listener for randomColorBtn
randomColorBtn.addEventListener('click', changeRandomColor);

// function to generate options for select list
function addList() {
    const imageSelect = document.querySelector('#imageSelect');
    const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

    // Check if the options are already added
    if (imageSelect.children.length <= 1) {
        for (let name of imageNames) {
            let option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            imageSelect.appendChild(option);
        }
    }
}

// Add event listener to populate the dropdown when it's clicked
document.querySelector('#imageSelect').addEventListener('click', addList);

// function to change image
// function to change image
function changeImage() {
    const imageElement = document.querySelector('#images');
    const selectedImage = document.querySelector('#imageSelect').value;
    if (selectedImage) {
        imageElement.src = "./img/" + selectedImage;
    } else {
        imageElement.src = "";
    }
}


// Add event listener for change event of the image dropdown
document.querySelector('#imageSelect').addEventListener('change', changeImage);
