import Hero from "../Components/Hero/Hero"
import {

    //Companies
    Salesforce,
    Google,
    //Skills
    Javascript,
    Flask,
    HTML,
    CSS,
    React,
    Express,
    Python,
    PSQL,
    Unity,
    Git,
    Github,
    Heroku,
    GoogleCloud,
    Node,
    Figma,
    //Interest
    Cooking,
    Reading,
    Pianist,
    TablesTennis,
    Fitness,
    DanielPicture,
    //Services
    MobileDeveloper,
    BackEndDeveloper,
    WebDeveloper,
    Barber
} from "../assets"


export const navlinks = [
    {
        id: "Service",
        title: "Service"
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "Resume",
        title: "Resume"
    },
    {
        id: "Experience",
        title: "Experience"
    },
    {
        id: "Interest",
        title: "Interest"
    },
    {
        id: "About",
        title: "About"
    }
]

const services = [
    {
        title: "Web Developer",
        icon: WebDeveloper,
        description: "A junior web developer, with Industry best practices implemented on multiple projects. Building out Personal Brands, Reliable Websites, and Modern-Designs. Constantly looking to gain new skills/experience"
    },

    {
        title: "Backend Developer",
        icon: BackEndDeveloper,
        description: "With aspiriations on becoming a amazing Full-Stack Developer. I am Constantly looking to grow and learn new backend Technology/skills. Leveraging Experience in Data-Base Management, Cloud Service, Testing, and Backend Centric Programming Language to develop Tested and Functional features for Real-Word Applications"
    },
    {
        title: "Barber",
        icon: Barber,
        description: "Started as a Hobby of mine, I currently enjoy cutting Hair and helping people look their best. with over 2 years of experience now cutting hair, I aim to help people be confident in their style, Get the best Hair cut for their Wallet, and create a comfortable space for hair-cut (The Most Memorable hair Cuts Often Happen When your Comfortable :) )."
    }

]

const technologies = [
    {
        name: "HTML 5",
        icon: HTML
    },
    {
        name: "CSS 3",
        icon: CSS
    },
    {
        name: "JavaScript",
        icon: Javascript
    },
    {
        name: "React JS",
        icon: React
    },
    {
        name: "Git",
        icon: Git
    },
    {
        name: "Github",
        icon: Github
    },
    {
        name: "Figma",
        icon: Figma
    },
    {
        name: "Flask",
        icon: Flask
    },
    {
        name: "Python",
        icon: Python
    },
    {
        name: "PSQL",
        icon: PSQL
    },
    {
        name: "Unity",
        icon: Unity
    },
    {
        name: "Heroku",
        icon: Heroku
    },
    {
        name: "GoogleCloud",
        icon: GoogleCloud
    },
    {
        name: "Node",
        icon: Node
    },
    {
        name: "Express",
        icon: Express
    }
]

const experience = [
    {
        title: "Google Techx Scholar",
        Company: "Google",
        icon: Google,
        date : "January 2023 - May 2023",
        points: [
            "Collaborated and learned software Engineering, Project Management, and advanced data structures and algorithms material taught by Google Engineers",
            "Worked collaboratively with a software engineering team and a project coach to build full-stack web applications, including front-end and back-end development, and unit testing.",
            "Receiving professional mentorship for networking and managing a career in tech"
        ]
    },
    {
        title: "Full-Stack Developer",
        Company: "Salesforce",
        icon: Salesforce,
        date: "June 5, 2023 - August 11, 2023",
        points: [
            "Developed Full Stack applications ",
            "Built a micro-service architecture to facilitate data flow",
            "Utilized Amazon web services to store and access user's information.",
            "leed a team to build & deploy a web application",
            "Optimized user suggestion feeds for a web app by performing natural language processing."
        ]
    }
]

const interest = [
    {
        name: "Cooking",
    },
    {
        
    }
]

export  {
    services,
    technologies,
    experience,

}