import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Nav() {
  return (
    <div>
      <nav className="bg-[#06060E] flex w-full min-h-[7.5em] items-center px-28">
        <div className=" flex align-middle items-center">
          <img
            className="h-9"
            src="https://kitatopup.id/assets/public__topup/images/icon/white.png"
            alt="logo"
          />
          <div
            className="ms-5 me-3 w-10 h-10 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "blue" }}
          >
            <img
              src="https://kitatopup.id/assets/public__topup/images/icon/sun.png"
              alt="sun"
            />
          </div>
          <div
            className="w-10 h-10 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "#343444" }}
          >
            <img
              src="https://kitatopup.id/assets/public__topup/images/icon/moon.png"
              alt="sun"
            />
          </div>
        </div>
        <div className="flex align-middle items-center text-white ms-auto space-x-6">
          <div class="relative">
            <FaSearch className="absolute fa fa-search text-gray-400 top-5 left-4" />
            <input
              type="text"
              className="bg-white text-black h-14 w-full px-12 rounded-lg focus:outline-none"
              placeholder="Cari Game"
              name=""
            />
          </div>
          <Link href="/login">
            <div className="bg-gradient-to-r from-[#DC39FC] to-[#6244EC] px-8 py-3 rounded-full">
              <p>login</p>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
