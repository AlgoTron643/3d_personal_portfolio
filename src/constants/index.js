import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    fiverr,
    figma,
    docker,
    bepergian,
    youtube2,
    travelassist,
    referral1,
    referral2,
    referral3,
    iqra,
    hafiza,
    unimelb,
    reesby,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const educations = [
    {
      title: "Bachelor of Science (Computing and Software Systems)",
      university_name: "The University of Melbourne",
      icon: unimelb,
      iconBg: "#E6DEDD",
      date: "December 2021",
    },
  ];
  
  const experiences = [
    {
      title: "Data Scientist",
      company_name: "Iqra Power Ltd",
      icon: iqra,
      iconBg: "#383E56",
      date: "June 2022 - November 2023",
      points: [
        "Led and executed data science initiatives, resulting in a 20% increase in accuracy of predictive models and algorithms.",
        "Contributed to the development of a data analysis framework and improved the efficiency of manipulating large datasets by 30%.",
        "Implemented data visualization techniques using tools such as Matplotlib and Seaborn, creating visually appealing presentations that effectively convey complex information to stakeholders.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Hafiza Trading (Pvt) Ltd",
      icon: hafiza,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - May 2022",
      points: [
        "Developed and implemented a comprehensive performance optimization strategy for web applications, resulting in a 40% decrease in page load times and an overall improvement in user experience.",
        "Executed API integration with external systems, enabling seamless data exchange and increasing efficiency by 30%.",
        "Collaborated with cross-functional teams to design and develop a scalable database architecture to ensure dataintegrity and enhance system performance by 25%.",
      ],
    },
    {
      title: "Professional Freelance Data Analyst",
      company_name: "Fiverr-Australia",
      icon: fiverr,
      iconBg: "#383E56",
      date: "May 2021 - Present",
      points: [
        "Implemented data cleaning, analysis, and reporting for web projects, reducing processing time by 60% with machine learning and boosting user engagement by 35% via agile development and responsive design",
        "Leveraged advanced statistical techniques and data mining methods to extract meaningful insights from diverse and complex datasets, resulting in the identification of key trends, patterns, and correlations",
        "Developed interactive dashboards with modern data visualization tools, enhancing stakeholder decision-making efficiency by 35%.",
        "Teamed up with multidisciplinary groups to automate reporting processes and refine data analysis workflows, resulting in a 50% decrease in manual effort and improved report accuracy.",
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "Reesby Technologies",
      icon: reesby,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - May 2021",
      points: [
        "Achieved 20% higher matching accuracy with a cutting-edge resume parser, streamlined candidate quality through innovative platforms",
        "Reduced time per candidate by 30%", 
        "Improved hiring decisions with an advanced interview system.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Newaz is a great problem solver, he has been showing an eagerness to learn and apply his knowledge to the problems. I have provided him feedback on his weaknesses and strengths during my presence at the University of Melbourne. He has shown great enthusiasm for accepting feedback, working on the weaknesses, and improving skills overall. I would recommend him to any position that requires diligent work to solve hard problems.",
      name: "Tural Farhadov",
      designation: "Senior Software Engineer",
      company: "MongoDB",
      image: referral1,
    },
    {
      testimonial:
        "I had the pleasure of studying and collaborating on a project with Newaz. Newaz is diligent and brings all of the skills and knowledge in programming to the project, and Newaz has his unique way of solving problems. He can be a good mentor among students.",
      name: "Sophie Zheng",
      designation: "Energy Analyst",
      company: "Borg Manufacturing",
      image: referral2,
    },
    {
      testimonial:
        "We have done some courses together at the University of Melbourne. Nawaz is enthusiastic about new knowledge and he asks lots of questions to ensure he has mastered the skills. Nawaz is always helpful and patient for others.",
      name: "Bobby Wang",
      designation: "Software Engineer",
      company: "Rowy",
      image: referral3,
    },
  ];
  
  const projects = [
    {
      name: "Youtube 2.0",
      description:
        "A replicated version of youtube clone that searches, plays with suggestive playlist cards with sharing option",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
        {
          name: "nginx",
          color: "pink-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
        {
          name: "rapid-api",
          color: "pink-text-gradient",
        },
      ],
      image: youtube2,
      source_code_link: "https://github.com/AlgoTron643/YouTube-2.0",
    },
    {
      name: "Travel Assist",
      description:
        "An intricate web app that showcases a diverse selection of global restaurants. attractions and hotels.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "googlemapsapi",
          color: "green-text-gradient",
        },
        {
          name: "materialui",
          color: "pink-text-gradient",
        },
        {
          name: "rapidapi",
          color: "pink-text-gradient",
        },
        {
          name: "netlify",
          color: "pink-text-gradient",
        },
      ],
      image: travelassist,
      source_code_link: "https://github.com/AlgoTron643/travel_assist",
    },
    {
      name: "Bepergian",
      description:
        "A smart travel website (camping) with an Indonesian theme allowing groups to be formed, adventure scheduling, offline mapping that uses augmented reality.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
      ],
      image: bepergian,
      source_code_link: "https://github.com/AlgoTron643/bepergian",
    },
  ];
  
  export { services, technologies, experiences, educations, testimonials, projects };