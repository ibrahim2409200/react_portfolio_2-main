// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import csharp from "./assets/images/Skills/csharp.png";
import javascript from "./assets/images/Skills/javascript.png"
import Netsuite from "./assets/images/Skills/Netsuite.png"
import reactjs from "./assets/images/Skills/react.png";
import AWS from "./assets/images/Skills/AWS.png";
import SQL from "./assets/images/Skills/SQL.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    // {
    //   link: "#projects",
    //   icon: RiProjectorLine,
    // },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Ibrahim",
    LastName: "Saleem",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React JS",
        para: "Proficient in building dynamic UIs with React.js",
        logo: reactjs,
        content:[
          "Expert in creating reusable, modular components for scalable and maintainable code.",
          "Proficient in managing complex state with tools like Redux and Context API.",
          "Skilled in using React hooks (e.g., useState, useEffect) for cleaner and more functional code.",
          "Experienced in optimizing performance using techniques like memoization, lazy loading, and code splitting.",
          "Strong ability to integrate React.js with RESTful APIs, GraphQL, and third-party libraries."]
      },
      {
        name:"SQL",
        para:"Skilled in advanced SQL database management",
        logo: SQL,
        content:[
          "Proficient in designing and optimizing SQL queries for performance and efficiency.",
          "Experienced in database schema design, normalization, and indexing.",
          "Skilled in writing stored procedures, triggers, and functions.",
          "Familiar with data migration, ETL processes, and database integration.",
          "Ability to analyze and visualize data using SQL-based reporting tools."]
      },
      {
        name: "AWS",
        para: "Experienced in AWS cloud infrastructure.",
        logo: AWS,
        content:[
          "Expertise in AWS cloud infrastructure, including S3 buckets and CloudFront CDN.",
          "Proficient in deploying and managing scalable applications on AWS EC2 instances.",
          "Experienced in setting up and optimizing AWS S3 for secure and scalable object storage.",
          "Skilled in configuring AWS IAM policies and roles for secure access management.",
          "Ability to implement and monitor AWS services for high availability and fault tolerance."] 
      },
      {
        name: "NetSuite",
        para: "NetSuite Development and API Integrations",
        logo: Netsuite,
        content:[
          "Expertise in integrating 3PL systems like Tray.io for seamless data exchange and automation.",
          "Proficient in configuring APIs and webhooks to synchronize orders, inventory, and shipments.",
          "Experienced in mapping data between ERP systems and 3PL platforms to ensure data integrity.",
          "Skilled in troubleshooting integration issues and optimizing workflows for efficiency.",
          "Ability to collaborate with third-party integrators to enhance supply chain visibility and operations."]
      },
      {
        name: "Javascript",
        para: "Specializing in advanced JavaScript development",
        logo: javascript,
        content: [
          "Expertise in modern JavaScript frameworks and libraries, including React.js and Node.js.",
          "Proficient in developing scalable and responsive web applications using ES6+ standards.",
          "Experienced in asynchronous programming, promises, and async/await syntax.",
          "Skilled in debugging, testing, and optimizing JavaScript code for performance.",
          "Ability to collaborate in Agile teams, perform code reviews, and mentor junior developers."]
      },
      {
        name: "C#",
        para: "Proficient in C# application development",
        logo: csharp,
        content:[
          "Expertise in developing robust APIs and controllers using C# and ASP.NET Core framework.",
          "Proficient in implementing RESTful services and integrating third-party APIs.",
          "Experienced in designing and building scalable Razor Pages for dynamic web applications.",
          "Skilled in using Entity Framework Core for database access and LINQ queries.",
          "Ability to implement authentication and authorization mechanisms using ASP.NET Core Identity."]
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I specialize in creating responsive and user-friendly web applications using modern technologies like HTML, CSS, JavaScript, and React.js. With a focus on performance and scalability, I ensure seamless user experiences across all devices.",
        logo: services_logo1,
      },
      {
        title: "APIs",
        para: "I excel in designing and integrating robust APIs for seamless communication between systems and applications. My expertise ensures secure, efficient, and scalable API solutions that meet diverse business needs.",
        logo: services_logo2,
      },
      {
        title: "Consultancy",
        para: "I provide consultancy services for software-related projects, helping clients optimize their technical processes and improve code quality. I assist in project management, ensuring effective implementation of Agile methodologies and successful project execution.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am dedicated to delivering high-quality software solutions that meet your unique business needs. With a strong background in project management and a detail-oriented approach, I ensure timely and efficient project execution. Let’s collaborate to bring your vision to life and achieve your goals.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ibrahimsps24@gmail.com",
        icon: GrMail,
        link: "mailto:ibrahimsps24@gmail.com",
      },
      {
        text: "+92 348 2551819",
        icon: MdCall,
        link: "https://wa.me/923482551819",
      },
      {
        text: "i.IbrahimSaleem",
        icon: BsInstagram,
        link: "https://www.instagram.com/i.IbrahimSaleem/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
