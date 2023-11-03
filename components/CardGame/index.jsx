import Link from "next/link";
import React, { useState } from "react";

const CardGame = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="px-7 bg-[#343444] hover:bg-[#1e1e27] w-fit flex flex-col justify-center items-center rounded-2xl border-[1px] border-[#6b6666] py-5 cursor-pointer"
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      <Link href="/detail/1">
        <div className="max-w-[15em] flex flex-col justify-center items-center text-center relative">
          <img
            className={`rounded-2xl w-60 ${
              isVisible ? "-translate-y-16" : ""
            } transition delay-100 z-40`}
            src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/09/34/6332a10c857d3.png"
          />
          <div
            className={`animate-bounce delay-300 bg-gradient-to-r from-[#DC39FC] to-[#6244EC] px-9 py-2 rounded-full bottom-16 absolute z-0}`}
          >
            <p className="text-white font-semibold">Beli</p>
          </div>
          <p className="text-white text-lg font-semibold mt-2">
            Ragnarok Origin Global - Package
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardGame;
