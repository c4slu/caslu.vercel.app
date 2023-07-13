import React from "react";
import { IconType } from "react-icons/lib";
import { BsCodeSlash } from "react-icons/bs"
interface CardsProps {
  CardName: string;
  CardDesc: string;
  CardIcon: IconType;
  UrlRepositorio: string;
  UrlWeb: string;
}

const Cards: React.FC<CardsProps> = ({
  CardName,
  CardDesc,
  CardIcon,
  UrlRepositorio,
  UrlWeb,
}) => {
  return (
    <div className="p-4 w-80 h-52 bg-black rounded-lg shadow transition-colors hover:bg-white/5">
      <div>{React.createElement(CardIcon)}</div>
      <a
        href={UrlWeb}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5 className="mb-2 mt-5 text-xl font-semibold tracking-tight text-white">
          {CardName}
        </h5>
      </a>
      <p className="mb-3 font-normal text-sm text-gray-400">
        {CardDesc}
      </p>
      <a
        href={UrlRepositorio}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center text-200 hover:underline"
      >
        Repositório
        <span className="font-bold pl-2 group-hover:underline">
          <BsCodeSlash />
        </span>
      </a>
    </div>
  );
};

export default Cards;
