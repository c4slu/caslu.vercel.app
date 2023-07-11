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
      className="flex justify-between mx-56"
    >
      <div className="p-7">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-4xl ">
          Lucas R. do Nascimento
        </p>
        <p className="text-gray-200 pt-4 font-semibold">
          Front-End Developer | Data Analyst PL
        </p>
        <p className="text-gray-400 pt-1 text-sm">
          Um programador, focado em virar uma refêrencia.
        </p>
        <Link href="./works">
          <button className="transition-colors mt-4 transition-hover duration-500 hover:bg-gray-900 rounded p-2 ">
            <span className="text-white gap-2 flex items-center">
              <BsPersonWorkspace />
              <p className="font-semibold text-sm text-white flex items-center justify-center">
                Acesse meus projetos
              </p>
            </span>
          </button>
        </Link>
        <div className="flex mt-4 text-2xl gap-2 text-white w-auto">
          <span className="transition-colors cursor-pointer hover:text-sky-500">
            <DiReact />
          </span>
          <span className="transition-colors cursor-pointer hover:text-yellow-400">
            <DiJavascript1 />
          </span>
          <span className="transition-colors cursor-pointer hover:text-sky-900">
            <DiPython />
          </span>
          <span className="transition-colors cursor-pointer hover:text-sky-400">
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