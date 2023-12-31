import Image from "next/image";
import avatar from "../../../public/avatar.jpeg"
import { DiJavascript1, DiPython, DiReact } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RxStitchesLogo } from "react-icons/rx";
import { TbSql } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react"
import { motion } from "framer-motion";
import Link from "next/link";
export default function Main() { 
  
const [isHovered, setIsHovered] = useState(false);

  

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mt-24"
    >
      <h1 className="bg-clip-text text-center mb-10 text-transparent bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-4xl">
        Be a Reference.
      </h1>
      <motion.div
        key="animation1"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex gap-2 justify-center text-gray-500"
      >
        <Image
          src={avatar}
          alt=""
          className="rounded-2xl w-96 h-96 object-cover overflow-hidden sm:m-10 mx-auto mb-10"
        />
        <div className="md:flex">
          <p className="w-full lg:w-80 lg:text-start sm:w-1/2 sm:text-center sm:mx-auto mt-10 justify-center ">
            Hi, my name is
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-600 font-semibold">
              {" "}
              Lucas Rodrigues
            </strong>
            , I'm a Front-end Developer with experience in
            <strong className="text-gray-300 font-semibold">
              {" "}
              React.js, Next.js, Vite.js{" "}
            </strong>
            and{" "}
            <strong className="text-gray-300 font-semibold">
              Design Gráfico
            </strong>
            . <br />
            <br />
            Four years ago, I decided to follow my passion
            for technology and join the Front-end Developer
            career. Since then, I have worked with
            dedication and hard work to become a qualified
            and experienced professional in the field.
            <br />
            <br />
            Over time, I learned to work with cutting-edge
            technologies, such as:
            <div className="flex mt-6 text-3xl gap-6">
              <span className="transition-colors duration-500 cursor-pointer hover:text-sky-500">
                <DiReact />
              </span>
              <span className="transition-colors duration-500 cursor-pointer hover:text-yellow-400">
                <DiJavascript1 />
              </span>
              <span className="transition-colors duration-500 cursor-pointer hover:text-sky-900">
                <DiPython />
              </span>
              <span className="transition-colors duration-500 cursor-pointer hover:text-sky-400">
                <BiLogoTailwindCss />
              </span>
              <span className="transition-colors cursor-pointer hover:text-gray-400">
                <RxStitchesLogo />
              </span>
              <span className="transition-colors cursor-pointer hover:text-sky-900">
                <TbSql />
              </span>
            </div>
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
        className="flex w-[700px] mx-auto"
      >
        <h1 className="text-white items-center flex font-bold mt-8 text-xl">
          | Bio
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
        className="flex flex-col justify-center items-center text-gray-500"
      >
        <p className=" w-[700px] mt-3">
          I am highly skilled at creating user interfaces
          using React.js, Next.js and Vite.js, ensuring the
          user experience is the best possible. In addition,
          my graphic design experience allows me to
          implement layouts and designs in code, ensuring
          that the end result is faithful to the original
          design. As a professional, I am passionate about
          technology and design, always looking to learn and
          apply new techniques and trends. My goal is to
          provide innovative and high quality solutions,
          meeting the needs of my customers and end users.
        </p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          <a
            href="https://docs.google.com/document/d/1-IxdGAEt-yocVrrxDpWI7rXR_CHV9eVmEiBHvCFkt4A/edit?usp=sharing"
            target="_blank"
          >
            <button className="relative hover:shadow-[0px_0px_20px_8px_#10b98130] transition-all  inline-flex items-center  duration-500 justify-center p-0.5 mt-3  overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-emerald-500 to-lime-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-black ">
              <span className="flex gap-2 items-center px-5 py-1.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                <FaFileDownload />
                <p className="text-sm text-white flex items-center justify-center">
                  Download CV
                </p>
              </span>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
