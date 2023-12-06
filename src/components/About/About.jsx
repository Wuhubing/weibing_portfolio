import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { about } from '../../portfolio'
import { Button } from "react-bootstrap";
import './About.css'

const About = () => {
  const {photo,name, role, description, resume, social } = about
  const resumeFile =`${process.env.PUBLIC_URL}/Weibing_Wang_Resume.pdf`;
  return (
    <div className='about center'>
    {photo && (
  <img alt="Avatar placeholder" src={photo} className="about__photo" />
)}
  
    {name && (
      <h1>
        Hi, I am <span className='about__name'>{name}.</span>
      </h1>
    )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}{resume && (
              <Button
                
                href={resumeFile}
                
                className="mt-3 d-flex align-items-center link--icon"
              >
                <InsertDriveFileIcon />
                Download Resume
              </Button>
              
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
