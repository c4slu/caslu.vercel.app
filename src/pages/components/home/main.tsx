import { BsPersonWorkspace } from "react-icons/bs";
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
      </div>
    </motion.div>
  );
}