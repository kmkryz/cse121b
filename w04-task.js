/* LESSON 3 - Programming Tasks */

/* Profile Object  */
myProfile = {
    name: "Kaitlyn Kryzanski",
    photo: "w02-task/images/headshot.JPG",
    favoriteFoods: [
        "Peaches",
        "Tacos",
        "Steak",
        "Chicken Pot Pie"
    ],
    hobbies: [
        "Working out",
        "Painting",
        "Going to the beach",
        "Listening to music"
    ],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: "Philadelphia, PA",
        length: "2 Years"
    },
    {
        place: "Boston, MA",
        length: "6 months"
    },
    {
        place: "Trumbull, CT",
        length: "18 years"
    }
);



/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("#photo"); 
imageElement.src = myProfile.photo;
imageElement.alt = myProfile.name;
// imageElement.setAttribute('src', myProfile.photo);
// imageElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach (hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

