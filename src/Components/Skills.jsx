import React from 'react';

const Skills = () => {
  return (
    <div id="habilidades" className="skills">
      <h2>Mis habilidades</h2>
      <div className="skills-container">
        <div className="skills-icon">
          <i className="fa-brands fa-html5 html"></i>
          <p>HTML</p>
        </div>
        <div className="skills-icon">
        <i className="fa-brands fa-git-alt git"></i>
        <p>Git</p>
        </div>
        <div className="skills-icon">
        <i className="fa-brands fa-react react"></i>
        <p>React.js</p>
        </div>
        <div className="skills-icon">
        <i className="fa-brands fa-square-js js"></i>
        <p>JavaScript</p>
        </div>
        <div className="skills-icon">
        <i className="fa-brands fa-node node"></i>
        <p>Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;