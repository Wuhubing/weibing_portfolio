import React, { lazy, Suspense } from 'react';
import '../../styles/Skills.css';
import { IconCloud } from '../IconCloud';  // 确保这个路径是正确的

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const slugs: string[] = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "gitlab",
    "visualstudiocode",
    "sonarqube",
    "apachespark",
    "apachehadoop",
    "apachekafka",
    "apachehive",
    "elasticsearch",
    "tableau",
    "powerbi",
    "python",
    "pytorch",
    "tensorflow",
    "scikitlearn",
    "opencv",
    "jupyter",
    "scala",
    "pandas",
    "numpy",
    "matplotlib",
    "docker",
    "kubernetes",
    "anaconda",
    "googlecolab",
  ];

  return (
    <section className='skills' id='skills'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>Skills</h1>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="icon-cloud-container">
            <IconCloud iconSlugs={slugs} />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Skills;