/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Toan Ho",
  title: "Hi mate, I'm Toan",
  subTitle: emoji(
    "I'm a seasoned software engineer with 7 years of experience in end-to-end development, specializing in technologies like Node.js, Python, and React.js. My passion lies in leveraging software engineering to simplify people's lives and address technical challenges. Whether it's troubleshooting issues, crafting innovative solutions, or fostering teams grounded in best practices, I'm dedicated to making a meaningful impact in the world of software development"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hqtoan94",
  linkedin: "https://www.linkedin.com/in/hqtoan94/",
  medium: "https://medium.com/@hqtoan94",
  stackoverflow: "https://stackoverflow.com/users/5108404/toan-quoc-ho",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Technical Lead, Solutions Architect",
  skills: [
    emoji("⚡ Technical consulting, cloud native, solution design"),
    emoji("⚡ Engineering Lead"),
    emoji("⚡ Troubleshooting, Problem-solving")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5/CSS3",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Infrastructure as Code",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AWS Certified Solutions Architect - Associate",
      logo: require("./assets/images/aws-architect.png"),
      subHeader: "Amazon Web Services",
      duration: "2022 - 2025"
    },
    {
      schoolName: "Ho Chi Minh City University of Science",
      logo: require("./assets/images/hcmus.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2012 - August 2016"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Engineering", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Solutions Architecture", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Microservices", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Engineering Management", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Agile Software Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud, AWS",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Consultant, Engineer",
      company: "NAB",
      companylogo: require("./assets/images/nab.png"),
      date: "Jun 2020 - Aug 2022, Feb 2023 – Present",
      descBullets: [
        "Growing technical and soft skills for engineers",
        "Building ground rules for software practices and embracing the adoption of efficient engineering practices for the stream",
        "Designing and making technical decisions for the owned assets",
        "Maintaining software quality by embracing unittest/e2e test with good mindset of test coverage"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "KMS Technology, Inc.",
      companylogo: require("./assets/images/kms.png"),
      date: "Jun 2018 – Jun 2020",
      descBullets: [
        "Collaborated with client to clarify requirements, provided technical solutions to address business requirements",
        "Inquired business logic, carried out codebase assessment, project installation, infrastructure setup",
        "Formed software development lifecycle, build up CI/CD pipeline, setup coding standards/coding best practices"
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "Self Employed",
      companylogo: require("./assets/images/self-employed.png"),
      date: "2017 – 2024",
      descBullets: [
        "Build freelancer projects to improve performance for users",
        "Amazon Quick Copy: An extension allow users copy all Amazon product information with just a click",
        "Amz Repricer Enhanced: A service that inject uploaded data in Amazon Seller Central for better repricing decisions"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements",
  subtitle: "Achievements and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Tech Sharing",
      subtitle:
        "Microservices and Micro Frontends: Accelerating technology transformation at NAB Vietnam Technology Centre",
      image: require("./assets/images/tech-sharing.jpg"),
      imageAlt: "Tech sharing",
      footerLink: [
        {
          name: "Speaker",
          url: ""
        },
        {
          name: "Tech Sharing",
          url: ""
        },
        {
          name: "Microservices",
          url: ""
        },
        {
          name: "Micro-frontend",
          url: ""
        }
      ]
    },
    {
      title: "NAB Vietnam Stars of the year - FY23",
      subtitle:
        "The prize in recognition of someone's effort in going above and beyond to create outstanding work along the year.",
      image: require("./assets/images/star-of-the-year.jpg"),
      imageAlt: "SOY",
      footerLink: [
        {
          name: "Award",
          url: ""
        }
      ]
    },
    {
      title: "Highest number of recognition nominations - FY23",
      subtitle:
        "The prize at domain level for people who got highest number of recognition nominations in a year",
      image: require("./assets/images/recognition-fy23.jpg"),
      imageAlt: "",
      footerLink: [
        {name: "Award", url: ""},
        {name: "Recognition", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "On the journey to describe Software Engineering to the world",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84357821835",
  email_address: "contact@toanho.dev"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
