// Accessing and Modifying the DOM

// Accessing Elements
let elementById = document.getElementById("myElementId");
let elementsByClass = document.getElementsByClassName("myClass");
let elementsByTag = document.getElementsByTagName("div");

// Modifying Elements
elementById.innerHTML = "New Content";
elementById.style.color = "blue";
elementById.setAttribute("data-custom", "value");

// Handling User Events with the EOM

// Event Listeners
elementById.addEventListener("click", function (event) {
    console.log("Element clicked!");
});

// Event Object
elementById.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});

// Timers, Intervals, and Animations

// Timers
setTimeout(function () {
    console.log("Delayed function executed.");
}, 2000); // 2000 milliseconds (2 seconds) delay

// Intervals
setInterval(function () {
    console.log("Function executed every 3 seconds.");
}, 3000);

// Animations
let position = 0;
setInterval(function () {
    elementById.style.left = position + "px";
    position += 5;
}, 100);

// Communicating with Web Servers and APIs

// XMLHttpRequest (XHR)
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();

// fetch API
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

// Storing and Retrieving Data

// localStorage
localStorage.setItem("username", "JohnDoe");
let storedUsername = localStorage.getItem("username");
console.log("Stored username:", storedUsername);

// sessionStorage
sessionStorage.setItem("theme", "light");
let storedTheme = sessionStorage.getItem("theme");
console.log("Stored theme:", storedTheme);

// Interactivity

// Example: Dynamically change background color on window resize
window.addEventListener('resize', function () {
    updateBackgroundColor();
});

// Form Validation and Background Color Change
function validateForm() {
    updateBackgroundColor();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username and password must be filled out");
        return false;
    }



    return true;
}

// Function to change background color
function updateBackgroundColor() {
    var body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();
}

// Function to get a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function loadImage() {
    var dynamicImage = document.getElementById('dynamicImage');
    dynamicImage.src = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/6512971/1.jpg?1435';
}

function changeBackgroundColor() {
    var body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
