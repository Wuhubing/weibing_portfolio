import React from "react";
import { Tilt } from 'react-tilt';

function TechStack({ techs }) {
  return (
    <div className="techstack">
      {techs.map((tech, index) => (
        <div key={index} className="techstack__item">
          <Tilt options={{ max: 25 }}>
            <img 
              src={tech.img} 
              alt={tech.name} 
              className="techstack__image" 
              style={{ maxWidth: "100px", maxHeight: "100px" }} 
            />
          </Tilt>
        </div>
      ))}
    </div>
  );
}

export default TechStack;