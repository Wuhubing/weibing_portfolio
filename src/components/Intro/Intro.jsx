import React, { useState, useEffect } from 'react';
import './Intro.css';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; // 左箭头图标
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'; // 右箭头图标
const Intro = () => {
  const [highlightedKeywordIndex, setHighlightedKeywordIndex] = useState(0);
  const keywords = [
    { 
      word: "Beijing", 
      title: "Beijing", 
      description: "My journey began in <a href='https://en.wikipedia.org/wiki/Beijing' target='_blank' rel='noopener noreferrer'>Beijing</a>, a city rich in culture and history. I spent my time here through high school and it was the foundation of my life.", 
      img: process.env.PUBLIC_URL + '/beijing.jpg' 
    },
    { 
      word: "UWMadison", 
      title: "UW-Madison", 
      description: "I continued my academic pursuit at <a href='https://www.wisc.edu/' target='_blank' rel='noopener noreferrer'>UW-Madison</a>, focusing on Computer Science and Mathematics.", 
      img: process.env.PUBLIC_URL + '/uwmadison.jpg' 
    },
    { 
      word: "CS&Math", 
      title: "CS & Math", 
      description: "Delving into the realms of <a href='https://www.ams.org/' target='_blank' rel='noopener noreferrer'>Computer Science and Mathematics</a> has been a fascinating journey.", 
      img: process.env.PUBLIC_URL + '/math&computersci.jpg' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedKeywordIndex(prevIndex => (prevIndex + 1) % keywords.length);
    }, 20000); // Change highlighted keyword every 15 seconds

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
        <p>My journey began in <span className={`keyword ${highlightedKeywordIndex === 0 ? "highlighted" : ""}`} onMouseEnter={() => handleMouseEnter(0)}>Beijing</span>, where I first discovered my passion for technology amidst its rich history and modern innovations.</p>
        <p>This passion led me to <span className={`keyword ${highlightedKeywordIndex === 1 ? "highlighted" : ""}`} onMouseEnter={() => handleMouseEnter(1)}>UW-Madison</span>, where I delved deeper into Computer Science and Mathematics, embracing the challenges and opportunities of these fields.</p>
        <p>Currently, my focus on <span className={`keyword ${highlightedKeywordIndex === 2 ? "highlighted" : ""}`} onMouseEnter={() => handleMouseEnter(2)}>CS & Math</span> is shaping my path towards solving complex problems and making meaningful contributions through technology.</p>
        {/* 将下载简历的按钮移动到这里，确保它位于文字下方 */}
        <div className="intro__resume-button">
          <a href={`${process.env.PUBLIC_URL}/Weibing_Wang_Resume.pdf`} className="btn btn--outline" target="_blank" rel="noopener noreferrer">Download resume</a>
        </div>
      </div>
    </div>
  );
};

export default Intro;