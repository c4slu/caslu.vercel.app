import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./cards";
import { motion } from "framer-motion";
import { BsCollectionFill } from "react-icons/bs";
import Footer from "../footer";


interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  pinned: boolean;
}

export default function MainWorks() {
  const [pinnedRepos, setPinnedRepos] = useState<Repo[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await axios.get<Repo[]>(
          "https://api.github.com/users/c4slu/repos?sort=updated&direction=desc&"
        );
         const pinnedRepos = response.data.filter(
           (repo) => repo.description
         );
        setPinnedRepos(pinnedRepos);
        setLoading(false);
      } catch (error) {
        console.error(
          "Erro ao buscar os repositórios pinados do GitHub",
          error
        );
      }
    };

    fetchPinnedRepos();
  }, []);
  
  

  return (
    <div className="bg-black text-white">
      {loading ? (
        <div className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center mb-5  items-center"
          >
            <h1 className="bg-clip-text w-full flex justify-center mt-14 items-center text-transparent font-bold text-2xl bg-gradient-to-r from-emerald-500 to-lime-600">
              Projects & Hobbies
            </h1>
            <p className="flex justify-center text-gray-400 pt-10 text-center">
              This page lists the main projects I've been
              working on <br />
              developing during my journey as programmer.
            </p>
            <div className="grid gap-10 md:grid-cols-2 mt-5 xl:grid-cols-3 xl:grid-rows-1 md:grid-rows-2">
              {pinnedRepos.map((repo) => (
                <Cards
                  key={repo.id}
                  CardIcon={BsCollectionFill}
                  CardName={repo.name.toUpperCase()}
                  CardDesc={repo.description}
                  UrlRepositorio={repo.html_url}
                  UrlWeb={repo.homepage}
                />
              ))}
            </div>
          </motion.div>
          <div className="bottom-0 mx-auto justify-center">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
