import React, { useState, useEffect } from "react";

const SkillBar = ({ skill = "Node.js", score }) => {
  const [percentage, setPercentage] = useState(30);
  useEffect(() => {
    setPercentage(score);
  }, [score]);
  const Pointer = () => <div className="w-0 h-0 border-b-[12px] border-r-[6px] border-l-[6px] border-b-black  border-r-transparent  border-l-transparent translate-x-[6px] -translate-y-[8px]" />;
  return (
    <div className="my-2 w-fit">
      <div className="text-sm font-bold">{skill}</div>
      <div className="bg-gray-400 w-80 mt-1.5 rounded-full">
        <div className={`bg-black h-1 rounded-full flex justify-end transition-[width] duration-1000 ease-in-out`} style={{ width: `${percentage}%` }}>
          <div className="text-xs font-bold translate-x-full -translate-y-[26px]">{percentage}%</div>
          <Pointer />
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
