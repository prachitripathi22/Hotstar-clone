let movies = [
    {
        name:"falcon and the winter soldier",
        des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi praesentium minima quo eum voluptatem totam. ",
        image:"slider 2.png"
    },
    {
        name:"loki",
        des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi praesentium minima quo eum voluptatem totam. ",
        image:"slider 1.png"
    },
    {
        name:"wanda vision",
        des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi praesentium minima quo eum voluptatem totam. ",
        image:"slider 3.png"
    },
    {
        name:"raya and the last dragon",
        des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi praesentium minima quo eum voluptatem totam. ",
        image:"slider 4.png"
    },
    {
        name:"luca",
        des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi praesentium minima quo eum voluptatem totam. ",
        image:"slider 5.png"
    }
];

const coraousel = document.querySelector('.coraousel');
let sliders =[]

let slideindex=0;

const createslide = () => {
    if(slideindex >= movies.length)
    {
        slideindex=0;
    }


// creating DOM elements

let slide = document.createElement('div');
let imgElement = document.createElement('img');
let content =document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

// attahing all the elements

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideindex].name));
p.appendChild(document.createTextNode(movies[slideindex].des));
content.appendChild(h1);
content.appendChild(p1);
slide.appendChild(imgElement);
coraousel.appendChild(slide);

//setting up images

imgElement.src=movies[slideindex].image  ;
slideindex++;

//setting up class name

slide.classname="slider";
content.className="slide-content";
h1.className="movie-title";
p1.class="movie-des";

sliders.push(slide);

if(sliders.length)
{
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2 )}% - $ {
        30 * (sliders.length -2)
    } px)`;
}
}

for(let i=0;i<3;i++)
{
   createslide(); 
}

setInterval(()=>
{
    createslide();
} ,3000);