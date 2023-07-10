
import React from "react";
import { IconType } from "react-icons/lib";

interface CardsProps {
  CardName: string;
  CardDesc: string;
  CardIcon: IconType;
  UrlRepositorio: string;
  UrlWeb: string;
}

export default function Cards({
  CardName,
  CardDesc,
  CardIcon,
  UrlRepositorio,
  UrlWeb
}: CardsProps) {
  return (
    <div className="p-4 w-80 h-52 bg-white rounded-lg shadow transition-colors dark:bg-black hover:bg-white/5">
      <div className="">
        {React.createElement(CardIcon)}
      </div>
      <a href={UrlWeb} target="_blank">
        <h5 className="mb-2 mt-5 text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
          {CardName}
        </h5>
      </a>
      <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
        {CardDesc}
      </p>
      <a
        href={UrlRepositorio}
        target="_blank"
        className="inline-flex items-center text-200 hover:underline"
        
      >
        Repositório
        <svg
          className="w-3 h-3 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
}