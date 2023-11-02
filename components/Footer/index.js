import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function index() {
  return (
    <div className="bg-black h-96">
      <div className="flex items-center h-full px-28">
        <h3 className="text-blue-600 font-semibold text-5xl">Akita</h3>
        <div className="ms-auto">
          <p className="text-white ms-auto text-2xl">Follow us</p>
          <div className="mt-3">
            <div>
              <FaFacebook className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center h-14  bg-black text-white px-28">
        <div className="border-t-[1px] border-white">
          <p>Copyright © 2022 - Akita Topup</p>
        </div>
      </div>
    </div>
  );
}
