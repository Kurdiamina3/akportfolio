// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};

const header = {
  name: "Amina Kurdi",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};

const section2title = "About Me";
const about = {
  paragraph:
    "If I could pick a word to describe myself it would be innovative. I've always been different growing up, and nothing has really changed. I take a different approach to a lot of different things, and my career is one. I graduated from Syracuse University with a Bachelor of Science in Public Health. I didn't know what I wanted my career to be yet. I tried teaching, I've been a Patient Care Representative at a high volume urgent care, I've been a Client Care Coordinator and Veterinary Assistant for the Internal Medicine team at an Emergency and Specialty Vet Hospital. I enrolled in a Coding Engineering Bootcamp because I want to do more. I have taken such a windy and rocky road, I've gotten really good at messing up, and I've gotten really good at learning from all my experiences. I still don't know what I want to do, I have several dreams that involve health and wellness, and a 'Cat Cafe' business.",
};

const skillsBar = [
  {
    name: "HTML5",
    
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    
    faClass: "fab fa-js",
  },
  {
    name: "MySQL",
    
    faClass: "fab fa-mysql",
  },
  {
    name: "Node",
    
    faClass: "fab fa-node",
  },
  {
    name: "React",
    
    faClass: "fab fa-react",
  },
  {
    name: "Java",
   
    faClass: "fab fa-java",
  },
  {
    name: "Redux",
   
    faClass: "fab fa-redux",
  },
  {
    name: "MongoDB",
  
    faClass: "fas fa-mongodb",
  },
  {
    name: "Express",
    
    faClass: "fab fa-express",
  },
];
const section3Title = "Past Projects";
const projects = [
  {
   
    id: "project1",
    name: "Bored Genie",
    skills: ["HTML, CSS, Javascript, JQuery"],
    url: "https://kurdiamina3.github.io/Project-1-Bored-Genie/",
  },
  {
  
    id: "project2",
    name: "Movie Land",
    skills: ["HTML, CSS, Javascript, "],
    url: "https://thebettermovieland.herokuapp.com/",
  },
  {
   
    id: "project3",
    name: "README Generator",
    skills: ["HTML, CSS, Javascript, Node.js,"],
    url: "https://github.com/Kurdiamina3/README-generator",
  },
  {
  
    id: "project4",
    name: "Movie Land",
    skills: ["HTML, CSS, Javascript, Heroku, Node.js, Sequelize, Handlebar.js"],
    url: "https://thebettermovieland.herokuapp.com/",
  },
  {
   
    id: "project5",
    name: "Note Taker",
    skills: ["HTML, CSS, Javascript, Express.js, Node.js, Heroku"],
    url: "https://github.com/Kurdiamina3/NoteTaker",
  },
  {

    id: "project6",
    name: "PWA Budgeting",
    skills: ["HTML, CSS, Javascript, Node.js, Compression, Express, MongoDB, Mongoose, Nodemon"],
    url: "https://github.com/Kurdiamina3/PWA-Budgeting",
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lets Connect.",
  copyright: "Amina Kurdi",
  contactUrl: "https://formspree.io/f/xqkneljr",
};
const social = {
  github: "https://github.com/Kurdiamina3",
  facebook: "https://www.facebook.com/aminarawrz/",

  linkedin: "https://www.linkedin.com/in/amina-kurdi-497306124/",
  resume: "https://novoresume.com/",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
