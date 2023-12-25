import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { info } from './data.js';


export const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(info);
  }, []);

  return (
    <>

      <div className="flex flex-col items-center justify-center m-20">
        <h1 className="text-white font-bold size-text-briefcase">Briefcase</h1>
        <h1 className="text-white size-text-design">3D Design And Modeling - 2023</h1>
        <span className="ml-1 mt-10 text-white triangle">&#9660;</span>
      </div>
      <div className="flex flex-wrap mr-7 ml-7">
        {projects.map((project, index) => (
          <div className="p-10 flex flex-col lg:w-1/2 w-full">
          <div key={index} className="cursor-pointer items-center justify-center">
          <NavLink to={`/work/${encodeURIComponent(project.titulo)}`}>
            <div className="w-full flex flex-col items-center overflow-hidden">
              <img className='img-projects' src={project.imagen} alt={project.titulo} />
            </div>
            
            <div className="w-full flex flex-col items-center justify-center bg-black p-5">
              <h1 className="text-white size-text-projects">{project.titulo}</h1>
            </div>
            {/* Aquí puedes volver a descomentar y utilizar la sección de map para elementos */}
            {/* project.elementos.map((elemento, elementoIndex) => (
              <React.Fragment key={elementoIndex}>
                {elemento.tipo === 'parrafo' && <p className="text-white">{elemento.contenido}</p>}
                {elemento.tipo === 'imagen' && <img src={elemento.contenido} alt={`Imagen ${elementoIndex}`} />}
              </React.Fragment>
            )) */}
            </NavLink>
            </div>
          
          </div>
          
        ))}
      </div>
    </>
  );
};
