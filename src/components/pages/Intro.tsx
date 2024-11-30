import React, { useEffect, useState, useMemo } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { about } from '../../portfolio';
import '../../styles/About.css';

// 定义 About 组件的 props 接口
interface AboutProps {}

// 定义 about 对象的接口
interface AboutData {
  photo: string;
  name: string;
  social: {
    github?: string;
    linkedin?: string;
  };
}

const About: React.FC<AboutProps> = () => {
  const { name, social } = about as AboutData;

  const roles: string[] = useMemo(() => ["UW-Madison Badger🦡","Deep Learning Researcher", "Algorithm Engineer","Data Scientist", "UI/UX Designer"], []);
  const [currentRole, setCurrentRole] = useState<string>("");
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentRole((prev) => prev.slice(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentRole(roles[roleIndex].slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
    }

    if (!isDeleting && charIndex === roles[roleIndex].length + 1) {
      setTimeout(() => setIsDeleting(true), 2000);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [charIndex, roleIndex, roles, isDeleting]);

  const renderRoleText = (role: string): React.ReactNode => {
    if (role.includes("UW-Madison Badger")) {
      const parts = role.split(" ");
      return (
        <>
          {parts.slice(0, -1).join(" ")} <span style={{ color: "#C5050C" }}>{parts.slice(-1)}</span>
        </>
      );
    } else if (role === "Kabipara Lover") {
      return (
        <>
          {role} ❤️
        </>
      );
    }
    return role;
  };

  return (
    <div className='about center'>
      <div className="about__content">
        <h1 className="about__hello">Hello</h1>
        <h2 className='about__name'>I'm {name}</h2>
        <h3 className='about__role'>As a {renderRoleText(currentRole)}</h3>
        
        <div className='about__contact center'>
          <a href={`${process.env.PUBLIC_URL}/Weibing_Wang_Resume.pdf`} aria-label='resume' className='link link--icon' target="_blank" rel="noopener noreferrer">
            <InsertDriveFileIcon />
          </a>
          {social && (
            <>
              {social.github && (
                <a href={social.github} aria-label='github' className='link link--icon'>
                  <GitHubIcon />
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} aria-label='linkedin' className='link link--icon'>
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className="about__photo-container">
        <img 
          alt="Weibing Wang" 
          src={`${process.env.PUBLIC_URL}/mePhoto2.jpg`} 
          className="about__photo" 
        />
        <p className="about__photo-credit">
          <em>A serene afternoon at the Summer Palace, photo by <a href="https://anyulianyu.com/" target="_blank" rel="noopener noreferrer">Anyu Li</a></em>
        </p>
      </div>
    </div>
  );
};

export default About;