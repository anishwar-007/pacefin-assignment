// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Anishwar",
  middleName: "",
  lastName: "Sharma",
  message:
    " Passionate and Enthusiast about Web Development and Machine Learning.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/anishwar-007",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100077787581659",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/anishwar_sharma/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anishwar-sharma-7a2858196/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/shahid.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/anishwar.jpg"),
  imageSize: 375,
  message:
    "I'm a versatile and creative Software Developer with expertise in a wide range of languages including HTML, CSS, JavaScript, C, Python, Java, and Dart. I love to bring ideas to life and have built impressive projects like a Twitter clone, captivating canvas games, and an Amazon clone complete with a secure payment gateway.",
  resume:
    "https://drive.google.com/file/d/1A9PaCgfOWQ0O1S41yAAxIVgodzR1rFx2/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "anishwar-007",
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "As an adept React developer and seasoned leader, I led an 8-member team in crafting a pivotal module for the Internal Works Department (IWD), meeting strict professorial standards and deadlines. My expertise spans large-scale application development, code optimization, and adherence to best practices. Proficient in project management, I excel in creating and managing plans, timelines, and budgets, ensuring the timely delivery of high-quality work. A strong communicator, I convey ideas effectively to teams, stakeholders, and clients, fostering a collaborative environment. Committed to mentorship, I contribute to skill development and goal attainment for team members. Up-to-date with React and related technologies, I drive innovation and continuous improvement.",
  images: [
    {
      img: require("../editable-stuff/1.png"),
      label: "Amazon clone",
      paragraph: "Transaction friendly Amazon clone",
    },
    {
      img: require("../editable-stuff/2.png"),
      label: "Morent",
      paragraph: "Users can be managed from here ",
    },
    {
      img: require("../editable-stuff/3.png"),
      label: "Netflix",
      paragraph: "Streaming service like Netflix",
    },
    {
      img: require("../editable-stuff/5.png"),
      label: "Samurai Kill",
      paragraph: "Leashing havoc on the streets of Tokyo",
    },
    {
      img: require("../editable-stuff/6.png"),
      label: "Trip Buddy",
      paragraph: "Trip Buddy Overview",
    },
    {
      img: require("../editable-stuff/4.png"),
      label: "Quizbuzz",
      paragraph: "Challange your brain with Quizbuzz",
    },
    {
      img: require("../editable-stuff/7.png"),
      label: "Twitter Clone",
      paragraph: "Twitter clone Overview ",
    },
  ],
  imageSize: {
    width: "315",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Firebase", value: 82 },
    { name: "Docker", value: 80 },
    { name: "React", value: 90 },
    { name: "MondoDB", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "Data Structures", value: 75 },
    { name: "HTML/CSS", value: 85 },
    { name: "NextJS", value: 80 },
    { name: "TypeScript", value: 74 },
    { name: "MySQL", value: 72 },
  ],
  softSkills: [
    { name: "Career-Oriented", value: 80 },
    { name: "Supportive", value: 90 },
    { name: "Conflict Resolution", value: 83 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Interpersonal Skills", value: 85 },
    { name: "Negotiation", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: "sharmaanish7779@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Web Developer Lead", // Here Add Company Name
      companylogo: require("../editable-stuff/iiitdmj.png"),
      date: "Jan 2022 – April 2022",
      style: { width: "224" },
    },
    {
      role: "MERN Stack Developer",
      companylogo: require("../editable-stuff/purpletutor.png"),
      date: "July 2022 – May 2023",
      style: { width: "224" },
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
