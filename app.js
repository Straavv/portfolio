
// ----------The Hello word changing in different languages

let welcomeHello = [
    {
        id: 1,
        text: "Hola,"
    },

    {
        id: 2,
        text: "Bonjour,"
    },

    {
        id: 3,
        text: "Dzień dobry,"
    },
    {
        id: 4,
        text: "Hello,"
    },
    {
        id: 5,
        text: "Привет,"
    }

];

let spanHello = document.getElementById('hello');


let newArray = welcomeHello.map(item => item.text);
let currentNum = 0;



spanHello.addEventListener('mouseover', function() {
let newHello = newArray[currentNum];
currentNum++;

if (currentNum > newArray.length - 1) {
    currentNum = 0;
}
spanHello.innerHTML = newHello;

})


/*----------------------Jumping scrolls functions-----------------*/



function linkAboutMe() {
    const aboutMe = document.getElementById('aboutMe').scrollIntoView({behavior: 'smooth'});
}

function linkHome() {
    const home = document.getElementById('home');
    window.scrollTo({top: home, behavior: 'smooth'});
}

function linkProjects() {
    const projects = document.getElementById('projects');
    window.scrollTo({top: y, behavior: 'smooth'});
}


const yOffset = -130; 
const y = projects.getBoundingClientRect().top + window.pageYOffset + yOffset;

const homeOffSet = -10; 
const home = projects.getBoundingClientRect().top + window.pageYOffset + homeOffSet;



// window.scrollTo({top: y, behavior: 'smooth'});

function linkContact() {
    const contact = document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}
