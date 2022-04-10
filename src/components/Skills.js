import React from "react";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <div>
      <SkillBar skill="Javascript" score={95} />
      <SkillBar skill="Wechat Miniprogram" score={95} />
      <SkillBar skill="Node.js" score={90} />
      <SkillBar skill="HTML & CSS" score={85} />
      <SkillBar skill="React.js" score={80} />
      <SkillBar skill="MongoDB" score={80} />
    </div>
  );
};

export default Skills;
