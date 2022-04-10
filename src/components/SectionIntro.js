import React from "react";
import CareerDuration from "./CareerDuration";
import { ReactComponent as SvgAvatar } from "../assets/avatar.svg";
import { ReactComponent as SvgCodeThinking } from "../assets/codeThinking.svg";

const SectionIntro = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center gap-y-6">
        <p className="text-5xl font-extrabold">Front-end Developer</p>
        <CareerDuration />
        <SvgAvatar className="w-52 h-fit" />
        <SvgCodeThinking className="w-1/2 h-fit -translate-x-24 mt-10" />
      </div>
    </section>
  );
};

export default SectionIntro;
