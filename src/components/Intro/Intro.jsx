import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro = () => {
  const [highlightedKeywordIndex, setHighlightedKeywordIndex] = useState(0);

  const keywords = [
    { word: "Beijing", title: "Beijing", description: "My journey began in Beijing, a city rich in culture and history. I spent my time here through high school and it was the foundation of my life.", img: process.env.PUBLIC_URL + '/beijing.jpg' },
    { word: "UWMadison", title: "UW-Madison", description: "I continued my academic pursuit at UW-Madison, focusing on Computer Science and Mathematics.", img: process.env.PUBLIC_URL + '/uwmadison.jpg' },
    { word: "CS&Math", title: "CS & Math", description: "Delving into the realms of Computer Science and Mathematics has been a fascinating journey.", img: process.env.PUBLIC_URL + '/math&computersci.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedKeywordIndex(prevIndex => (prevIndex + 1) % keywords.length);
    }, 8000); // Change highlighted keyword every 3 seconds

    return () => clearInterval(interval);
  }, [keywords.length]);

  // Handle mouse enter event
  const handleMouseEnter = (index) => {
    setHighlightedKeywordIndex(index);
  };

  return (
    <div className="intro">
      <div className="intro__card">
        {highlightedKeywordIndex !== -1 && (
          <>
            <img src={keywords[highlightedKeywordIndex].img} alt={keywords[highlightedKeywordIndex].title} className="intro__image"/>
            <h3>{keywords[highlightedKeywordIndex].title}</h3>
            <p>{keywords[highlightedKeywordIndex].description}</p>
          </>
        )}
      </div>
      <div className="intro__text">
        <h2>About Me</h2>
        <p>
  My journey began in <span className={`keyword ${highlightedKeywordIndex === 0 ? "highlighted" : ""}`} onMouseEnter={() => handleMouseEnter(0)}>Beijing</span>, where I first discovered my passion for technology amidst its rich history and modern innovations. 
</p>
<p>
  This passion led me to <span className={`keyword ${highlightedKeywordIndex === 1 ? "highlighted" : ""}`} onMouseEnter={() => handleMouseEnter(1)}>UW-Madison</span>, where I delved deeper into Computer Science and Mathematics, embracing the challenges and opportunities of these fields.
</p>
<p>
  Currently, my focus on <span className={`keyword ${highlightedKeywordIndex === 2 ? "highlighted" : ""}`} onMouseEnter={() => handleMouseEnter(2)}>CS & Math</span> is shaping my path towards solving complex problems and making meaningful contributions through technology.
</p>
      </div>
    </div>
  );
};

export default Intro;