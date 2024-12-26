export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    // {name:"Exp",link:"#experience"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
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
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on projects to build my skills and knowledge.",
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
      title: "JobBase - A Full Stack Job Portal Application",
      des: "A Full Stack Job Portal Application using React.js, JavaScript, Supabase, Tailwind CSS, Clerk Authentication .",
      img: "/jobbase.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/clerk.png", "/supabase.svg"],
      link: "https://job-base.vercel.app/",
    },
    {
      id: 2,
      title: "HyThere - Connect With Friends Chat App",
      des: "Simplify your video conferencing experience with Yoom.Seamlessly connect with colleagues and friends.",
      img: "/HyThere.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongo.png", "/socketio.svg"],
      link: "https://hythere-connect-with-friends.onrender.com/",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    
  ];
  
  export const testimonials = [
    {
        quote:
            "Working with Amandeep was an amazing experience. His ability to turn ideas into reality with precision and creativity is unmatched. He truly understands the needs of the project and delivers results beyond expectations.",
        name: "Rahul Bisht",
        title: "Working as Software Engineer",
    },
    {
        quote:
            "Collaborating with Amandeep was a great learning experience. His insights and technical expertise helped us achieve success in every step of the project. I deeply admire his dedication and knowledge.",
        name: "Saurabh Negi",
        title: "BCA Final Year Student",
    },
    {
        quote:
            "Partnering with Amandeep brought tremendous value to our project. His strategic approach and sharp problem-solving skills made all the difference. He is a true professional who can be trusted for complex challenges.",
        name: "Rohit Agarwal",
        title: "Finance Manager",
    },
    {
        quote:
            "Engaging with Amandeep on this project was a fantastic journey. His attention to detail and passion for creating impactful solutions were evident throughout. The results were outstanding, and his approach was inspiring.",
        name: "Rishabh",
        title: "Visitor of Website",
    },
];

  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Backend Dev Intern",
      desc: "Developed and maintained server-side logic, database schemas, and APIs to support seamless application functionality.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
  }
,  
{
  id: 3,
  title: "Fullstack Dev Intern",
  desc: "Built and deployed fullstack web applications, integrating front-end interfaces with robust back-end services and databases.",
  className: "md:col-span-2", // change to md:col-span-2
  thumbnail: "/exp3.svg",
}
,
{
  id: 4,
  title: "Backend Engineer for NGO",
  desc: "Currently working with an NGO on website building, focusing on backend development to create robust and efficient systems.",
  className: "md:col-span-2",
  thumbnail: "/exp4.svg",
}
,
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/Amandeep-rawat"
    },
    
    {
      id: 2,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/amandeep-rawat-1622a82ba/"
    },
  ];