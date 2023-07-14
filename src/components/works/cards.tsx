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
    <div className="cursor-pointer">
      <a
        href={UrlWeb}
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <div className="no-underline p-4 w-80 h-52 bg-black rounded-lg  shadow transition-colors hover:bg-white/5">
          <div>{React.createElement(CardIcon)}</div>
          <div className="flex flex-col justify-between items-start h-full text-200">
            <div>
              <h5 className="mb-2 mt-5 text-xl font-semibold tracking-tight text-white">
                {CardName}
              </h5>
              <p className="mb-3 font-normal text-sm text-gray-400">
                {CardDesc}
              </p>
            </div>
            <div className="flex items-center">
              <a
                href={UrlRepositorio}
                target="_blank"
                className="hover:underline"
              >
                <span className="mt-auto flex pr-2 py-2 gap-2 items-center">
                  Repositório
                  <BsCodeSlash />
                </span>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Cards;
