import Cards  from './cards'
import {
  BsFillCloudDrizzleFill,
  BsFillClipboardDataFill,
  BsFillChatRightTextFill
} from "react-icons/bs";
import { motion } from "framer-motion";

export default function MainWorks() {


  return (
    <div className=" bg-black text-white">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="bg-clip-text w-full flex justify-center mt-14 items-center text-transparent font-bold text-2xl bg-gradient-to-r from-emerald-500 to-lime-600">
          Projetos & Hobbies
        </h1>
        <p className="flex justify-center text-gray-400 pt-10 text-center">
          Essa página lista os principais projetos que venho{" "}
          <br />
          desenvolvendo durante a minha jornada como
          programador.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex justify-center pt-10 items-center"
      >
        <div className="grid gap-10 grid-cols-3 grid-rows-1 ">
          <Cards
            CardIcon={BsFillCloudDrizzleFill}
            CardName="Scare Climate"
            CardDesc=" Fique por dentro das condições climáticas em tempo real com nosso app de previsão do tempo confiável e preciso."
            UrlRepositorio="https://github.com/c4slu/scare-climate"
            UrlWeb="https://scare-climate.vercel.app/"
          />
          <Cards
            CardIcon={BsFillChatRightTextFill}
            CardName="Rewrite Text"
            CardDesc="Reescreva textos automaticamente utilizando a API do ChatGPT."
            UrlRepositorio="https://github.com/c4slu/rewrite-text"
            UrlWeb="https://rewrite-text.vercel.app/"
          />
          <Cards
            CardIcon={BsFillClipboardDataFill}
            CardName="NLW Habbits"
            CardDesc="Controle de Hábitos dia a dia."
            UrlRepositorio="https://github.com/c4slu/NLW-Habbits"
            UrlWeb="https://c4slu.github.io/NLW-Habbits/"
          />
        </div>
      </motion.div>
    </div>
  );
}