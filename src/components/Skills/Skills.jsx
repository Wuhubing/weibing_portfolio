import React from 'react';
import './Skills.css';
import DatabaseStack from './DatabaseStack'; 
import FrameworkStack from './FrameworkStack'; 
import ProgrammingLangStack from './ProgrammingLangStack';
import ToolStack from './ToolStack';
import WebDevStack from './WebDevStack';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="skills">
              <h1>Skills</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Data Tools</h2>
          </div>
        </div>
        <FrameworkStack />
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Data Tools</h2>
          </div>
        </div>
        <DatabaseStack />
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Data Tools</h2>
          </div>
        </div>
        <ProgrammingLangStack />
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Data Tools</h2>
          </div>
        </div>
        <ToolStack />
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Data Tools</h2>
          </div>
        </div>
        <DatabaseStack />
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Data Tools</h2>
          </div>
        </div>
        <WebDevStack />
      </div>



    </section>
  );
};

export default Skills;