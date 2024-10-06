import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import '../../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section className='section contact center' id='contact'>
      <Container className="contact_info">
        <h1 className="project-heading" style={{ textAlign: 'center' }}>
          Contact
        </h1> <br /> <br />
        <Row className="info_item" style={{ justifyContent: 'center' }}>
          <h4>
            <AiOutlineMail style={{color: "var(--clr-primary)"}}/>
            <span>Email: </span>
            <a href="mailto:wwang652@wisc.edu" style={{ color:'var(--clr-primary)' }}>wwang652@wisc.edu</a> | 
            <a href="mailto:weibingwangwe@gmail.com">weibingwangwe@gmail.com</a>
          </h4>
        </Row>

        <Row className="info_item" style={{ justifyContent: 'center' }}>
          <h4>
            <AiFillLinkedin style={{color: "var(--clr-primary)"}}/>
            <span>LinkedIn: </span>
            <a href="https://www.linkedin.com/in/weibing-wang-w/">linkedin.com/in/weibing-wang-w/</a>
          </h4>
        </Row>

        <Row className="info_item" style={{ justifyContent: 'center' }}>
          <h4>
            <AiFillGithub style={{color: "var(--clr-primary)"}}/>
            <span>GitHub: </span>
            <a href="https://github.com/Wuhubing">github.com/Wuhubing</a>
          </h4> <br /> <br />
        </Row>
      </Container> <br /> <br /> <br />
    </section>
  );
}

export default Contact;