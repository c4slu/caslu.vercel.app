import { BsPersonWorkspace } from "react-icons/bs";
import { DiJavascript1, DiPython, DiReact } from "react-icons/di";
import {BiLogoTailwindCss} from "react-icons/bi"
import { RxStitchesLogo } from "react-icons/rx";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion"
import Link from 'next/link';
export default function Main() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="flex sm:justify-between lg:mx-56 -pl-40 md:items-center"
    >
      <div className="p-7">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-4xl ">
          Lucas R. do Nascimento
        </p>
        <p className="text-gray-200 pt-4 font-semibold">
          Front-End Developer | MIS Analyst
        </p>
        <p className="text-gray-400 pt-1 text-sm">
          A programmer, focused on becoming a reference.
        </p>
        <Link href="./works">
          <button className="relative hover:shadow-[0px_0px_20px_8px_#10b98150] transition-all  inline-flex items-center  duration-500 justify-center p-0.5 mt-3  overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-emerald-500 to-lime-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-black ">
            <span className="flex gap-2 items-center px-5 py-1.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
              <BsPersonWorkspace />
              <p className=" text-sm text-white flex items-center justify-center">
                Access my projects
              </p>
            </span>
          </button>
        </Link>
        <div className="flex mt-4 text-2xl gap-2 text-white w-auto">
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
      </div>
    </motion.div>
  );
}