// import React from 'react';
// // Import your project images if available
// import projectOneImage from '../assets/project-1.png'; // Adjust the path as necessary
// import projectTwoImage from '../assets/project-2.png'; // Adjust the path as necessary
// import projectThreeImage from '../assets/project-3.png'; // Adjust the path as necessary

// const projects = [
//   {
//     title: "Project One",
//     description: "A brief description of the project. It solves X problem by using Y technology.",
//     techStack: ["React", "Tailwind CSS", "Node.js"],
//     link: "https://github.com/username/project-one",
//     image: projectOneImage, // Add the imported image
//   },
//   {
//     title: "Project Two",
//     description: "A short description detailing what the project does and the key technologies used.",
//     techStack: ["HTML", "CSS", "JavaScript"],
//     link: "https://github.com/username/project-two",
//     image: projectTwoImage, // Add the imported image
//   },
//   {
//     title: "Project Three",
//     description: "An overview of the project, its purpose, and main tech stack used.",
//     techStack: ["SASS", "Express.js", "PostgreSQL"],
//     link: "https://github.com/username/project-three",
//     image: projectThreeImage, // Add the imported image
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-8 px-4 md:px-32 lg:px-64 text-center">
//       <p className="text-gray-500 font-semibold">Discover My</p>
//       <h1 className="text-3xl font-bold mb-6">Projects</h1>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//       {project.image && (
//         <img
//           src={project.image}
//           alt={`${project.title} screenshot`}
//           className="w-full h-48 object-cover rounded-t-xl mb-4"
//         />
//       )}
//       <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//       <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.techStack.map((tech, index) => (
//           <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">
//             {tech}
//           </span>
//         ))}
//       </div>

//       <a
//         href={project.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500 font-medium hover:text-blue-700"
//       >
//         View Project
//       </a>
//     </div>
//   );
// };

// export default Projects;



import React from 'react';
// Import your project images if available
import projectOneImage from '../assets/payment ss.png';
import projectTwoImage from '../assets/password ss.png';
import projectThreeImage from '../assets/blogging ss.png';

const projects = [
  {
    title: "Digital Payment App",
    description: "A comprehensive digital wallet and payment application ",
    techStack: ["ReactJS", "MongoDB", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/DishaSingh07/paytm",
    liveDemoLink: "https://paytm-brown-ten.vercel.app/",
    image: projectOneImage,
  },
  {
    title: "Password Generator",
    description: "Password Generator that creates secure, random passwords with customizable options.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/DishaSingh07/Password_Generator",
    liveDemoLink: "https://access77.netlify.app/",
    image: projectTwoImage,
  },
  {
    title: "Blogging App",
    description: "A full-featured blogging platform allowing users to create, edit, and publish blog posts",
    techStack: ["TypeScript", "PostgreSQL", "Express.js"],
    githubLink: "https://github.com/DishaSingh07/blogging",
    liveDemoLink: "https://username.github.io/project-three",
    image: projectThreeImage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-8 px-4 md:px-32 lg:px-64 text-center">
      <p className="text-gray-500 font-semibold">Discover My</p>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border-2 border-gray-400 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-48 object-cover rounded-t-xl mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          GitHub
        </a>
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Projects;
