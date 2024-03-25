import React from 'react';
import './Skills.css';
import TechStack from './TechStack';

const Skills = () => {
  // 定义每个技术栈的技术数组
  const programmingLangs = [
    { name: "JavaScript", img: process.env.PUBLIC_URL + '/java-dQsHbnRX.png' },
    { name: "JavaScript", img: process.env.PUBLIC_URL + '/python-tuaswoPa.png' },
    { name: "JavaScript", img: process.env.PUBLIC_URL + '/clang-6mHnu93S.png' },
    { name: "JavaScript", img: process.env.PUBLIC_URL + '/cpp-tlPTR2Gy.png' },
    // 添加更多编程语言
  ];

  const webDevTechs = [
    { name: "HTML5", img: process.env.PUBLIC_URL + '/html-tx26Riw2.png' },
    { name: "HTML5", img: process.env.PUBLIC_URL + '/css-jtxrr2jf.png' },
    { name: "HTML5", img: process.env.PUBLIC_URL + '/javascript-RsSTOKpn.png' },
    // 添加更多Web开发技术
  ];

  const frameworks = [
    { name: "React", img: process.env.PUBLIC_URL + '/react-RVxTcwq1.png' },
    { name: "React", img: process.env.PUBLIC_URL + '/react-native-4uFpiLov.png' },
    { name: "React", img: process.env.PUBLIC_URL + '/nodejs-F8dfsvwS.png' },
    // 添加更多框架
  ];

  const databaseTools = [
    { name: "MySQL", img: process.env.PUBLIC_URL + '/mysql-B5GtdF2j.png' },
    { name: "MySQL", img: process.env.PUBLIC_URL + '/spark-cWEJtBQ-.png' },

    // 添加更多数据库和工具
  ];

  const tools = [
    { name: "Git", img: process.env.PUBLIC_URL + '/git-JPf9qIB0.png' },
    { name: "Docker", img: process.env.PUBLIC_URL + '/docker-cU32f_Qz.png' },
    { name: "Docker", img: process.env.PUBLIC_URL + '/json-IefyJGer.png' },
    { name: "Docker", img: process.env.PUBLIC_URL + '/kubernetes-TZDiNd9r.png' },
    // 添加更多工具
  ];

  const others = [
    { name: "Docker", img: process.env.PUBLIC_URL + '/linux-Ic6NipWw.png' },
    { name: "Docker", img: process.env.PUBLIC_URL + '/android-qCm7JpRh.png' },
    // 添加其他技术
  ];

  return (
    <section className='skills' id='skills'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>Skills</h1>
          </div>
        </div>
        {/* 为每个技术栈展示一个标题和TechStack组件 */}
        <h2>Programming Languages</h2>
        <TechStack techs={programmingLangs} />

        <h2>Web Development</h2>
        <TechStack techs={webDevTechs} />

        <h2>Frameworks</h2>
        <TechStack techs={frameworks} />

        <h2>Database & Tools</h2>
        <TechStack techs={databaseTools} />

        <h2>Tools</h2>
        <TechStack techs={tools} />

        <h2>Others</h2>
        <TechStack techs={others} />
      </div>
    </section>
  );
};

export default Skills;