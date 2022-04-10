import React from "react";
import SkillBar from "./SkillBar";

const Column = ({ title, description, title2, skills }) => {
  return (
    <div className="container w-1/2 mx-auto px-11 py-16 flex flex-col text-center items-center gap-6 border-l border-gray-300 first:border-transparent">
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-lg font-light text-gray-500">{description}</p>
      <p className="text-lg">{title2}</p>
      <div>
        {skills.map(({ skill, score }, index) => (
          <SkillBar key={`skill${index}`} skill={skill} score={score} />
        ))}
      </div>
    </div>
  );
};

const SectionSkills = () => {
  const columnData = [
    {
      title: "Front-end Developer",
      description: "Started with my dev life with Wechat Miniprogram. I am involved in 2 projects, including a production line handoff optimization app and an internal wiki.",
      title2: "What I am good at",
      skills: [
        { skill: "HTML", score: 90 },
        { skill: "JavaScript", score: 90 },
        { skill: "CSS", score: 80 },
        { skill: "Wechat Miniprogram", score: 90 },
        { skill: "React", score: 80 },
      ],
    },
    {
      title: "Full-stack Developer",
      description: "While working for my previous company, I was also incharge of providing backend services(REST API) to applications. I love to deploy services with Docker as it is a great tool for building and deploying microservices.",
      title2: "What I am good at",
      skills: [
        { skill: "Node.js", score: 90 },
        { skill: "Express.js", score: 90 },
        { skill: "MongoDB", score: 85 },
        { skill: "Docker", score: 80 },
      ],
    },
  ];
  return (
    <section className="container mx-auto flex rounded-xl -mt-36 bg-white shadow-2xl">
      {columnData.map((data, index) => (
        <Column key={`column${index}`} {...data} />
      ))}
    </section>
  );
};

export default SectionSkills;
