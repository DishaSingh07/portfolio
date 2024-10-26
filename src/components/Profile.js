import React, { useState, useEffect } from 'react';
import profilePic from '../assets/crop image.jpg';
import resume from '../assets/resume_reachinbox.pdf'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import 'animate.css';

export default function Profile() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Student", "Coder", "Frontend Developer", "Backend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="profile" className="flex flex-col md:flex-row items-center justify-center p-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center space-y-4 mr-12">
        <a href="https://www.linkedin.com/in/disha-singh-241737229/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
          <FiLinkedin size={30} />
        </a>
        <a href="https://x.com/DishaSingh02" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <FiTwitter size={30} />
        </a>
        <a href="https://github.com/DishaSingh07" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <FiGithub size={30} />
        </a>
      </div>
      <img
        src={profilePic}
        alt="Disha Singh profile picture"
        className="w-52 h-52 md:w-80 md:h-80 rounded-full mb-6 md:mb-0 md:mr-16 shadow-lg"
      />
      <div className="text-center md:text-left md:ml-12 space-y-4 mt-8 md:mt-0 max-w-md">
        <p className="text-lg font-semibold text-gray-700">Hello, I'm</p>
        <h1 className="text-4xl font-bold text-gray-800">Disha Singh</h1>
        <p className="text-2xl text-blue-600">
          <span className="role-text">{text}</span>
          <span className="cursor">|</span>
        </p>
        <p className="text-lg text-gray-600">
          I'm a passionate developer skilled in crafting seamless user experiences and powerful backend solutions.
        </p>
        <p className="text-lg text-gray-600">
          With a focus on quality and innovation, I build applications that are efficient, scalable, and delightful to use.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <button
            className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-transform transform hover:scale-105 shadow-md"
            onClick={() => window.open(resume)}
          >
            Download CV
          </button>
          <button
            className="bg-gray-100 px-5 py-2 rounded-lg border hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-md"
            onClick={() => document.querySelector('#contact').scrollIntoView()}
          >
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
}
