import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pages = [
  "works",
  "about"
  ];
  const [hovered, setHovered] = useState("");

  return (
    <header className="flex items-center justify-center text-white text-xs min-h-59 w-full absolute top-1 z-3">
      <Link href="/" passHref>
        <button className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-2xl mt-5 ml-12">
          L
        </button>
      </Link>

      <nav className="text-center flex-1 order-2 order-0">
        <ul className="inline-flex relative top-5 list-none m-0 p-0">
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`;
            const isHovered = hovered === page;

            return (
              <li key={page}>
                <Link href={path} passHref>
                  <span
                    className="border-0 relative"
                    onMouseEnter={() => setHovered(page)}
                    onMouseLeave={() => setHovered("")}
                  >
                    <motion.span
                      className={`inline-block cursor-pointer font-medium uppercase text-xs px-3 py-1.5 transition-colors ${
                        router.pathname === path
                          ? "text-white px-2"
                          : "text-gray-400"
                      }`}
                    >
                      {isHovered && (
                        <motion.span
                          className="absolute left-0 right-0 -top-3 bg-white/20 p-5 rounded $borderRadius"
                          layoutId="nav"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      {page}
                    </motion.span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
