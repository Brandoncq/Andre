import React from 'react';
import { info } from './data.js';
import { useParams } from 'react-router-dom';

export const ProjectDetails = () => {
  let { project } = useParams();
  let projectSelected = info.find(buscar => project.toLowerCase() === buscar.titulo.toLowerCase());

  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center lg:w-1/2 w-full p-10">
        {projectSelected && (
          <>
            <h1 className="text-white font-bold size-text-briefcase">{projectSelected.titulo}</h1>
            <img src={projectSelected.imagen} alt={projectSelected.titulo} />
            {projectSelected.elementos.map((elemento, elementoIndex) => (
              <React.Fragment key={elementoIndex}>
                {elemento.tipo === 'parrafo' && <p className="text-white m-4">{elemento.contenido}</p>}
                {elemento.tipo === 'imagen' && (
                  <img src={elemento.contenido} alt={`Imagen ${elementoIndex}`} className="m-4" />
                )}
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      </div>
    </>
  );
};
