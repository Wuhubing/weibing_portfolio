import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkOutline } from 'react-icons/md';
import { ThemeContext } from '../../contexts/theme';
import './Experience.css';

const experiences = [
  {
    title: "Researcher",
    date: "September 2024 - Present",
    company: "JINGDONG Logistics X-Lab",
    location: "Beijing, China (Remote)",
    description: [
      "Implemented data augmentation using GANs to improve embodied ai model generalization.",
      "Applied reinforcement learning to reduce failed robotic grasp attempts.",
      "Developed a semi-supervised learning framework to enhance grasping algorithms."
    ],
    imageUrl: "jd.jpeg",
    companyUrl: "https://www.jdl.com/en",
    position: "left"
  },
  {
    title: "Undergraduate Peer Mentor / Tutor",
    date: "May 2024 - Present",
    company: "University of Wisconsin–Madison",
    location: "Madison, Wisconsin, USA",
    description: [
      "Assisted in teaching HCI, React, and React Native under <a href='https://www.yuhangz.com/' target='_blank' rel='noopener noreferrer'>Prof. Yuhang Zhao</a> and <a href='https://www.coletnelson.us/' target='_blank' rel='noopener noreferrer'>Cole Nelson</a>.",
      "Guided UI/UX design and accessibility best practices, supporting students in building responsive interfaces."
    ],
    imageUrl: "cdis.jpeg",
    companyUrl: "https://cdis.wisc.edu/",
    position: "right"
  },
  {
    title: "Algorithm Engineer Intern",
    date: "May 2024 - August 2024",
    company: "JINGDONG Logistics X-Lab",
    location: "Beijing, China",
    description: [
      "Analyzed large-scale data using Apache Spark, including ETL pipelines and real-time processing with Spark Streaming.",
      "Conducted feature engineering and applied transformer models for tasks like text classification, with optimization using PyTorch.",
      "Collaborated with business units, drafted technical papers, and performed data cleaning to improve dataset quality."
    ],
    imageUrl: "jd.jpeg",
    companyUrl: "https://www.jdl.com/en",
    position: "left"
  },
  {
    title: "Research Assistant",
    date: "January 2024 - September 2024",
    company: "Advised by <a href='https://www.yuhangz.com/' target='_blank' rel='noopener noreferrer'>Prof. Yuhang Zhao</a>",
    location: "Madison, Wisconsin, USA",
    description: [
      "Developed a cross-device spatial anchor system using Azure, improving AR synchronization accuracy.",
      "Enhanced target detection by integrating RTMDet and YOLOv8 models.",
      "Improved backend efficiency using Flask and RabbitMQ, increasing system responsiveness."
    ],
    imageUrl: "cs.jpeg",
    companyUrl: "https://cdis.wisc.edu/",
    position: "right"
  },
  {
    title: "Research Assistant",
    date: "January 2024 - April 2024",
    company: "Advised by <a href='https://pages.cs.wisc.edu/~ms/' target='_blank' rel='noopener noreferrer'>Dr. Meena Syamkumar</a>",
    location: "Madison, Wisconsin, USA",
    description: [
      "Built a web scraper using Selenium and implemented keyword extraction with TF-IDF.",
      "Developed OCR middleware with Tesseract for educational image data extraction.",
      "Constructed a conversational tutor with retrieval-augmented generation (RAG)."
    ],
    imageUrl: "cs.jpeg",
    companyUrl: "https://cdis.wisc.edu/",
    position: "left"
  }
];

const Experience = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`experience ${themeName}`}>
      <h1 className="experience-heading">EXPERIENCE</h1>
      <div className="vertical-timeline-container">
        <div className="vertical-timeline-line"></div>
        <VerticalTimeline lineColor="var(--clr-line)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              dateClassName="vertical-timeline-element-date"
              date={exp.date}
              contentStyle={{ background: 'var(--clr-bg-alt)', color: 'var(--clr-fg)', border: '1px solid var(--clr-border)', boxShadow: '4px 5px 4px 3px var(--clr-shadow)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--clr-arrow)' }}
              iconStyle={{ background: 'var(--clr-icon-bg)', color: 'var(--clr-icon-fg)' }}
              position={exp.position}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <div className="brand-container">
                <a href={exp.companyUrl}>
                  <img className="vertical-timeline-element-image" src={exp.imageUrl} width={50} height={50} alt={exp.company} />
                </a>
                <a href={exp.companyUrl} style={{ textDecoration: 'none' }}>
                  <h4 className="vertical-timeline-element-subtitle" dangerouslySetInnerHTML={{ __html: exp.company }}></h4>
                </a>
              </div>
              <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
              <p dangerouslySetInnerHTML={{ __html: exp.description.join('<br />') }}></p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;