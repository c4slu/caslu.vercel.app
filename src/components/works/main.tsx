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
          Projects & Hobbies
        </h1>
        <p className="flex justify-center text-gray-400 pt-10 text-center">
          This page lists the main projects I've been
          working on <br />
          developing during my journey as programmer.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex justify-center pt-10 items-center"
      >
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-1 md:grid-rows-2">
          <Cards
            CardIcon={BsFillCloudDrizzleFill}
            CardName="Scare Climate"
            CardDesc=" Stay on top of real-time weather conditions with our reliable and accurate weather forecast app."
            UrlRepositorio="https://github.com/c4slu/scare-climate"
            UrlWeb="https://scare-climate.vercel.app/"
          />
          <Cards
            CardIcon={BsFillChatRightTextFill}
            CardName="Rewrite Text"
            CardDesc="Automatically rewrite texts using the ChatGPT API."
            UrlRepositorio="https://github.com/c4slu/rewrite-text"
            UrlWeb="https://rewrite-text.vercel.app/"
          />
          <Cards
            CardIcon={BsFillClipboardDataFill}
            CardName="NLW Habbits"
            CardDesc="Day to Day Habit Control."
            UrlRepositorio="https://github.com/c4slu/NLW-Habbits"
            UrlWeb="https://c4slu.github.io/NLW-Habbits/"
          />
        </div>
      </motion.div>
    </div>
  );
}