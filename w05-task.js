/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    
    temples.forEach((temple) => {
        //article element
        const article = document.createElement('article');
    
        //h3 element
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
    
        //image element
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
    
        //append to article element
        article.appendChild(h3);
        article.appendChild(img);
    
        templesElement.appendChild(article);
    
        
    
    })
};




/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList.push(...data);

        displayTemples(templeList);
    };
};




/* reset Function */
const reset = () => {
    const articleElements = document.querySelectorAll('article');
    articleElements.forEach((article)=> {
        templesElement.removeChild(article);
    } );
};



/* sortBy Function */
const sortBy = (temples) => {

    reset();

    const filter = document.querySelector("#sortBy").value;

    switch (filter){

        case 'utah':
            temples = temples.filter(temple => temple.location.includes("Utah"));
            
            break;

        case 'notutah':
            temples = temples.filter(temple => !temple.location.includes("Utah"));
            
            break;

        case 'older':
            temples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            
            break;

        case 'all':
            
            break;
    }

    displayTemples(temples);

}





/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) } );

getTemples();





