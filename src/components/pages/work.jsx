import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { info } from './data.js';


export const Work = () => {
  const [projects, setProjects] = useState([]);
  const projectsContainerRef = useRef(null);

  useEffect(() => {
    setProjects(info);
  }, []);

  const handleScrollToProjects = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center m-20">
        <h1 className="text-white font-bold size-text-briefcase">Portafolio</h1>
        <h1 className="text-white size-text-design">3D Design And Modeling - 2023</h1>
        <span className="ml-1 mt-10 text-white triangle" onClick={handleScrollToProjects}>&#9660;</span>
      </div>
      <div className="flex flex-wrap mr-7 ml-7" ref={projectsContainerRef}>
        {projects.map((project, index) => (
          <div className="p-10 flex flex-col lg:w-1/2 w-full">
            <div key={index} className="cursor-pointer items-center justify-center">
              <NavLink to={`/work/${encodeURIComponent(project.titulo)}`}>
                <div className="w-full flex flex-col items-center overflow-hidden">
                  <img className='img-projects w-full h-auto' src={project.imagen} alt={project.titulo} />
                </div>
                <div className="w-full flex flex-col items-center justify-center bg-black p-5">
                  <h1 className="text-white size-text-projects">{project.titulo}</h1>
                  <p className="text-white size-text-year">{project.year}</p>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
