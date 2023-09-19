/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Kaitlyn-marie Kryzanski";
const currentYear = new Date().getFullYear();
const profilePicture = "w02-task/images/headshot.JPG";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
var yearElement = document.querySelector("#year");
const imageElements = document.getElementsByTagName("img");
const imageElement = imageElements[0]; 





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textcontent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
const favoriteFoods = ['Peanut butter','Strawberries','Peaches','Tacos','Steak'];
const foodList = favoriteFoods.join(', ');
foodElement.textContent = `${favoriteFoods}`;
const newFavoriteFood = "Dutch Baby";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


