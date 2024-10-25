import React from 'react';
import arrowIcon from '../assets/arrow.png';
import checkmarkIcon from '../assets/checkmark.png';

const experiencesLanguages = [
  { skill: "C/C++", level: "Advance" },
  { skill: "HTML/CSS", level: "Advance" },
  { skill: "Python", level: "Intermediate" },
  { skill: "JavaScript", level: "Intermediate" },
  { skill: "TypeScript", level: "Basic" },
];

const experiencesFrameworks = [
  { skill: "ReactJS", level: "Advance" },
  { skill: "Node.js", level: "Advance" },
  { skill: "TailwindCSS", level: "Intermediate" },
  { skill: "Next.js", level: "Basic" },
  { skill: "Docker", level: "Basic" },
  { skill: "Express", level: "Advance" },
];

const experiencesDeveloper = [
  { skill: "VS Code", level: "Advance" },
  { skill: "Git", level: "Intermediate" },
  { skill: "GitHub", level: "Intermediate" },
];

const experiencesDatabases = [
  { skill: "MongoDB", level: "Intermediate" },
  { skill: "PostgreSQL", level: "Intermediate" },
  { skill: "SQL", level: "Intermediate" },
];

const experiencesCoursework = [
  { skill: "Data Structures and Algorithms", level: "Advance" },
  { skill: "Object Oriented Programming", level: "Intermediate" },
];

// Define the other skill categories as before

const Experience = () => {
  return (
    <section id="experience" className="py-8 px-4 md:px-32 lg:px-64 text-center">
      <p className="text-gray-500 font-semibold">Explore My</p>
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ExperienceCategory title="Programming Languages" experiences={experiencesLanguages} />
        <ExperienceCategory title="Frameworks and Technologies" experiences={experiencesFrameworks} />
        <ExperienceCategory title="Developer Tools" experiences={experiencesDeveloper} />
        <ExperienceCategory title="Databases" experiences={experiencesDatabases} />
        <ExperienceCategory title="Relevant Coursework" experiences={experiencesCoursework} />
      </div>

      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="mt-6 mx-auto w-8 cursor-pointer"
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
      />
    </section>
  );
};

const ExperienceCategory = ({ title, experiences }) => {
  return (
    <div className="flex-1 bg-white border border-gray-300 rounded-2xl p-6 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="flex flex-col space-y-4">
        {experiences.map((experience, index) => (
          <ExperienceDetail key={index} skill={experience.skill} level={experience.level} />
        ))}
      </div>
    </div>
  );
};

const ExperienceDetail = ({ skill, level }) => {
  return (
    <article className="flex items-center justify-between text-left space-x-4">
      <img src={checkmarkIcon} alt="Experience icon" className="w-6 h-6" />
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{skill}</h3>
        <p className="text-sm text-gray-500">{level}</p>
      </div>
    </article>
  );
};

export default Experience;
