
import Link from "next/link";
import { BsInstagram, BsGithub, BsLinkedin, BsFillEnvelopeFill  } from "react-icons/bs";
import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <footer className="fixed bottom-0 pb-4 w-full">
      <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-3.5 justify-center">
        <a
          href="https://www.instagram.com/kssluu/"
          target="_blank"
        >
          <h1 className="pl-3 group flex items-center text-gray-500 transition-colors duration-200 hover:text-instagram">
            instagram
            <span className=" opacity-0 ml-1.5 transition-opacity duration-300 flex items-center group-hover:opacity-100">
              <BsInstagram />
            </span>
          </h1>
        </a>
        <a href="https://github.com/c4slu" target="_blank">
          <h1 className="pl-3 group flex items-center text-gray-500 transition-colors duration-200 hover:text-github">
            github
            <span className="opacity-0 ml-1.5 transition-opacity duration-300 flex items-center group-hover:opacity-100">
              <BsGithub />
            </span>
          </h1>
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-data/"
          target="_blank"
        >
          <h1 className="pl-3 group flex items-center text-gray-500 transition-colors duration-200 hover:text-linkedin">
            linkedin
            <span className="opacity-0 ml-1.5 transition-opacity duration-300 flex items-center group-hover:opacity-100">
              <BsLinkedin />
            </span>
          </h1>
        </a>
        <a
          href="mailto:lucasnascimento.brn@gmail.com"
          target="_blank"
        >
          <h1 className="pl-3 group flex items-center text-gray-500 transition-colors duration-200 hover:text-sky-500">
            e-mail
            <span className="opacity-0 ml-1.5 transition-opacity duration-300 flex items-center group-hover:opacity-100">
              <BsFillEnvelopeFill />
            </span>
          </h1>
        </a>
      </motion.div>
    </footer>
  );
}