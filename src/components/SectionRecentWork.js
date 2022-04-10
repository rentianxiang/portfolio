import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageSo7 from "../assets/so7.png";
import ImageSo7QrCode from "../assets/so7-qrcode.png";
import ImageShanghaiCovidMap from "../assets/shcovidmap.png";

const SectionRecentWork = () => {
  return (
    <section className="w-full py-36">
      <div className="container mx-auto text-center flex flex-col items-center gap-6">
        <p className="text-3xl font-bold">My Recent Work</p>
        <>
          <p className="text-lg font-light text-gray-500">Animal Adoption Platform</p>
          <div className="container relative w-1/4">
            <motion.img whileHover={{ opacity: 0 }} src={ImageSo7} alt="So7 Animal Adoption Platform" className="rounded-2xl" />
            <motion.img src={ImageSo7QrCode} alt="so7 QrCode" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-3/4  m-auto" />
          </div>
        </>
        <>
          <p className="text-lg font-light text-gray-500">Shanghai Covid Map</p>
          <div className="container relative w-1/4">
            <motion.img whileHover={{ opacity: 0 }} src={ImageShanghaiCovidMap} alt="So7 Animal Adoption Platform" className="rounded-2xl m-auto" onClick={() => window.open("https://rentianxiang.github.io/Shanghai-Covid-Map/")} />
            <p className="absolute top-[40%] left-0 right-0 bottom-0 -z-10 m-auto">Click me to Github Pages</p>
          </div>
        </>
      </div>
    </section>
  );
};

export default SectionRecentWork;
