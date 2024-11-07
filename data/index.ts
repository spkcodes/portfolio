import Image from "next/image";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#re" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const gridItems = [
  {
    id: 1,
    title:
      "I'm a quick learner, creating scalable, user-friendly solutions for real-world problems.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adapt to any time zone for collaboration.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always improving my work",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I navigate Git with confidence",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building the Jobin project for seekers",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Movie Hub-Online Movie Platform",
    des: " Developed Movie Hub, an online movie platform utilizing Redux and Redux Toolkit for state management, with a Node.js and MongoDB backend. Integrated features like watch lists, bookmarks, and personalized movie recommendations. Focused on creating a seamless and user-friendly interface to enhance navigation and overall user experience.",
    img: "/moviehub.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: " Job In-Advanced Job Candidate Search Platform",
    des: "Developed an advanced job search feature with filters for country, keyword, and category, enabling employers to quickly find suitable candidates and simplifying the application process for job seekers. Set up a secure user login system using Google OAuth, with robust validation on both the frontend and backend using Yup, ensuring a smooth experience and clear error messages. Integrated JWT for secure session management and implemented efficient data handling to enhance overall performance in a full-stack job portal.",
    img: "jobin.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Blogu-AI Blog Generator Platform",
    des: "This is an AI-powered blog generator application built with Next.js. It includes an integrated payment gateway for seamless transactions. Users can generate blog content with ease using advanced AI technology. The platform offers a user-friendly experience for creating high-quality blog posts",
    img: "/blogu.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Earths material-Tools provided by the platform.",
    des: "Developed user-friendly static websites with SEO best practices, resulting in a 30% increase in organic traffic within three months. Enhanced live projects, including On the Way AI Store, Earth Materials, Saudi Arabia, Alpha Elite Saudi Arabia, Rava Arabia, and more.",
    img: "/Earth.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    image: "fz.jpeg",
    quote:
      "Working with Safwan Pk was an exceptional experience. Their expertise in both frontend and backend technologies resulted in seamless project execution. They are highly skilled, detail-oriented, and dedicated to delivering quality work on time. I highly recommend them for any development project",
    name: "Fahiz",
    title: "AI ML Developer",
  },
  {
    image: "sh.jpg",
    quote:
      "I had the pleasure of working with Safwan, a highly skilled full-stack developer. His expertise in both frontend and backend technologies made a significant impact on our project. His attention to detail, problem-solving skills, and ability to deliver quality results on time are commendable. I highly recommend his work",
    name: "Shahid",
    title: "Director of On The Way,Alpha Elite",
  },
  {
    image: "rm.jpg",
    quote:
      "Collaborating with Safwan PK has been a fantastic experience. As a full-stack developer, he showcases exceptional skills in both frontend and backend development. His commitment to quality and his ability to solve complex problems make him a valuable asset. I truly appreciate his contributions",
    name: "Ramees",
    title: "Manager of Erth's Material",
  },
  {
    image: "sj.jpg",
    quote:
      "Safwan is an exceptional full-stack developer who consistently delivers high-quality work. His expertise in both frontend and backend development has greatly enhanced our projects. He approaches challenges with creativity and professionalism, making him a reliable partner. I greatly appreciate his dedication",
    name: "Shajahan",
    title: "Digital Marketer",
  },
  // {
  //   quote:
  //     "Collaborating with safwan pkwas an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. safwan pk's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, safwan pkis the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "Node.js",
    img: "https://img.icons8.com/fluency/144/node-js.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 4,
    name: "React.js",
    img: "https://img.icons8.com/color/144/react-native.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "MongoDB",
    img: "https://img.icons8.com/color/144/mongodb.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 1,
    name: "redux",
    img: "https://img.icons8.com/color/144/redux.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 4,
    name: "Typescript",
    img: "https://img.icons8.com/color/144/typescript.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "git",
    img: "https://img.icons8.com/color/144/git.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "js",
    img: "https://img.icons8.com/color/144/javascript--v1.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "tailwindcss",
    img: "https://img.icons8.com/color/144/tailwind_css.png",
    nameImg: "/hostName.svg",
  },

  {
    id: 2,
    name: "HTML5",
    img: "https://img.icons8.com/color/144/html-5--v1.png",
    nameImg: "/appName.svg",
  },
  {
    id: 2,
    name: "css",
    img: "https://img.icons8.com/color/144/css3.png",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "UI/UX",
    img: "https://img.icons8.com/fluency/144/figma.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 3,
    name: "framer",
    img: "framer.png",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "React.js Frontend  Projects",
    desc: "Contributed to the development of a web-based platform using React.js, improving user interactivity and experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Node.js Backend Projects",
    desc: "Developed and implemented backend services for websites using Node.js, ensuring smooth functionality and integration with frontend applications",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Native projects",
    desc: "Led the development of a mobile app using React Native for a client, from initial concept to final delivery.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Complete MERN Projects",
    desc: "Designed and developed full-stack MERN projects, managing frontend, backend, and database integration to deliver fully functional applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/spkcodes",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/spkcodes",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/safwan-pk/",
  },
];
