import React, { useState, useEffect } from 'react';
import './Intro.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Intro = () => {
  const [highlightedKeywordIndex, setHighlightedKeywordIndex] = useState(0);
  const keywords = [
    { 
      word: "Beijing", 
      title: "Beijing", 
      description: "Growing up in this city, I spent my formative years from elementary through high school here. It was in <a href='https://en.wikipedia.org/wiki/Beijing' target='_blank' rel='noopener noreferrer'>Beijing</a> that I laid the foundation of my knowledge, preparing myself for future studies and exploration.", 
      img: process.env.PUBLIC_URL + '/beijing.jpg' 
    },
    { 
      word: "UWMadison", 
      title: "UW-Madison", 
      description: "In 2021, I had the privilege of joining the Class of 2025 as a proud <a href='https://www.wisc.edu/' target='_blank' rel='noopener noreferrer'>Badger</a>. During my time here, I have been fortunate to work on research projects alongside esteemed scholars such as <a href='https://www.yuhangz.com/' target='_blank' rel='noopener noreferrer'>Yuhang Zhao</a> and <a href='https://pages.cs.wisc.edu/~ms/' target='_blank' rel='noopener noreferrer'>Meena</a>.", 
      img: process.env.PUBLIC_URL + '/uwmadison.jpg' 
    }
    // ,
    // { 
    //   word: "CS&Math", 
    //   title: "CS & Math", 
    //   description: "Delving into the realms of <a href='https://www.ams.org/' target='_blank' rel='noopener noreferrer'>Computer Science and Mathematics</a> has been a fascinating journey.", 
    //   img: process.env.PUBLIC_URL + '/math&computersci.jpg' 
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedKeywordIndex(prevIndex => (prevIndex + 1) % keywords.length);
    }, 20000); // Change highlighted keyword every 20 seconds

    return () => clearInterval(interval);
  }, [keywords.length]);

  const handleMouseEnter = (index) => {
    setHighlightedKeywordIndex(index);
  };
  const handlePrevClick = () => {
    setHighlightedKeywordIndex(prevIndex => (prevIndex - 1 + keywords.length) % keywords.length);
  };
  
  const handleNextClick = () => {
    setHighlightedKeywordIndex(prevIndex => (prevIndex + 1) % keywords.length);
  };

  return (
    <div className="intro">
      <div className="intro__card">
        <button className="intro__arrow intro__arrow--left" onClick={handlePrevClick}>
          <ArrowBackIosIcon />
        </button>
        {highlightedKeywordIndex !== -1 && (
          <>
            <a href={keywords[highlightedKeywordIndex].link} target="_blank" rel="noopener noreferrer">
              <img src={keywords[highlightedKeywordIndex].img} alt={keywords[highlightedKeywordIndex].title} className="intro__image"/>
              <h3>{keywords[highlightedKeywordIndex].title}</h3>
            </a>
            <p dangerouslySetInnerHTML={{ __html: keywords[highlightedKeywordIndex].description }}></p>
          </>
        )}
        <button className="intro__arrow intro__arrow--right" onClick={handleNextClick}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className="intro__text">
        <h2>About Me</h2>
        <p>I'm Weibing Wang, a senior undergraduate at the University of Wisconsin-Madison, majoring in Computer Science and Mathematics. My primary interests lie in machine learning, optimization, and data-driven systems, with a focus on applications in IoT and embodied AI.</p>
        <p> </p>
        <p> I have research experience in data-driven optimization and have worked on projects involving neural networks, reinforcement learning, and robotic systems. Hence, I was honored to work with Professor <a href='https://people.cs.rutgers.edu/~dz220/' target='_blank' rel='noopener noreferrer'>Desheng Zhang</a> , Professor <a href='https://www.yuhangz.com/' target='_blank' rel='noopener noreferrer'>Yuhang Zhao</a> and Professor <a href='https://pages.cs.wisc.edu/~ms/' target='_blank' rel='noopener noreferrer'>Meena</a> for various deep learning, HCI and embodied AI projects.</p>
        <div className="intro__resume-button">
          <a href={`${process.env.PUBLIC_URL}/Weibing_Wang_Resume.pdf`} className="btn btn--outline" target="_blank" rel="noopener noreferrer">Download resume</a>
        </div>
      </div>
    </div>
  );
};

export default Intro;