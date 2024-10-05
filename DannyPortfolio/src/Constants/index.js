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
    Barber,
    //Projects
    HoyaHacks_AiHelper,
    Danny_Portfolio, 
    //Ratings
    EmptyStar,
    HalfStar,
    FullStar
} from '../Assets'





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
    },
    
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

const skills = [
    {
        name: "HTML 5",
        icon: HTML,
        ratings: 3.5
    },
    {
        name: "CSS 3",
        icon: CSS,
        rating: 3
    },
    {
        name: "JavaScript",
        icon: Javascript,
        rating: 3.5
    },
    {
        name: "React JS",
        icon: React,
        rating: 4
    },
    {
        name: "Git",
        icon: Git,
        rating: 3.5
    },
    {
        name: "Github",
        icon: Github,
        rating: 3.5
    },
    {
        name: "Figma",
        icon: Figma,
        rating:2.5
    },
    {
        name: "Flask",
        icon: Flask,
        rating: 3
    },
    {
        name: "Python",
        icon: Python,
        rating: 3.5
    },
    {
        name: "PSQL",
        icon: PSQL,
        rating: 3
    },
    {
        name: "Unity",
        icon: Unity,
        rating: 2
    },
    {
        name: "Heroku",
        icon: Heroku,
        rating: 2.5
    },
    {
        name: "GoogleCloud",
        icon: GoogleCloud,
        rating: 3
    },
    {
        name: "Node",
        icon: Node,
        rating: 3
    },
    {
        name: "Express",
        icon: Express,
        rating: 3.5
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
            "led a team to build & deploy a web application",
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

    const project = [
       {
        title: "HoyaHacks",
        points: [
            "Worked on a team of four to design and Build a Full-Stack-application to help HighSchool Students Transfter to College using Machine-Learning and React",
            "Ultilzized knowledge of HTML, CSS Flexbox, and React to built out a the Frontend Application",
            "Worked with Azure Cloud api to integrate the Ai Services to the front-End Side of the appplication"
        ],
        projectImage: HoyaHacks_AiHelper
    },
    {
        title:"DannyPortfolio",
        points: [
            "Built and designed a portfolio Webiste to help people learning more about me using React and Grow my Person-Brand ",
            "Utilized Knowledge of HTML, CSS FlexBox, and react to built out the Front-End",
        ],
        projectImage: Danny_Portfolio
    }
    ]

    const stars = {
        FullStar: FullStar,
        HalfStar: HalfStar,
        EmptyStar: EmptyStar,
    }

export  {
    services,
    experience,
    project,
    skills,
    stars
    
}