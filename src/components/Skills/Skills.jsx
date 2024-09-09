import React from 'react';
import './Skills.css';
import TechStack from './TechStack';

const Skills = () => {
  // 定义每个技术栈的技术数组
  const programmingLangs = [
    { name: "JavaScript", img: process.env.PUBLIC_URL + '/java-dQsHbnRX.png' },
    { name: "Python", img: process.env.PUBLIC_URL + '/python-tuaswoPa.png' },
    { name: "C", img: process.env.PUBLIC_URL + '/clang-6mHnu93S.png' },
    { name: "C++", img: process.env.PUBLIC_URL + '/cpp-tlPTR2Gy.png' },
    // 添加更多编程语言
  ];

  const webDevTechs = [
    { name: "HTML5", img: process.env.PUBLIC_URL + '/html-tx26Riw2.png' },
    { name: "CSS3", img: process.env.PUBLIC_URL + '/css-jtxrr2jf.png' },
    { name: "JavaScript", img: process.env.PUBLIC_URL + '/javascript-RsSTOKpn.png' },
    // 添加更多Web开发技术
  ];

  const frameworks = [
    { name: "React", img: process.env.PUBLIC_URL + '/react-RVxTcwq1.png' },
    { name: "React Native", img: process.env.PUBLIC_URL + '/react-native-4uFpiLov.png' },
    { name: "Node.js", img: process.env.PUBLIC_URL + '/nodejs-F8dfsvwS.png' },
    // 添加更多框架
  ];

  const databaseTools = [
    { name: "MySQL", img: process.env.PUBLIC_URL + '/mysql-B5GtdF2j.png' },
    { name: "Spark", img: process.env.PUBLIC_URL + '/spark-cWEJtBQ-.png' },
    // 添加更多数据库和工具
  ];

  const tools = [
    { name: "Git", img: process.env.PUBLIC_URL + '/git-JPf9qIB0.png' },
    { name: "Docker", img: process.env.PUBLIC_URL + '/docker-cU32f_Qz.png' },
    { name: "JSON", img: process.env.PUBLIC_URL + '/json-IefyJGer.png' },
    { name: "Kubernetes", img: process.env.PUBLIC_URL + '/kubernetes-TZDiNd9r.png' },
    // 添加更多工具
  ];

  const others = [
    { name: "Linux", img: process.env.PUBLIC_URL + '/linux-Ic6NipWw.png' },
    { name: "Android", img: process.env.PUBLIC_URL + '/android-qCm7JpRh.png' },
    // 添加其他技术
  ];

  // 合并所有技术栈的数组
  const allTechs = [
    ...programmingLangs,
    ...webDevTechs,
    ...frameworks,
    ...databaseTools,
    ...tools,
    ...others
  ];

  return (
    <section className='skills' id='skills'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>Skills</h1>
          </div>
        </div>
        {/* 展示所有技术栈的图片 */}
        <TechStack techs={allTechs} />
      </div>
    </section>
  );
};

export default Skills;