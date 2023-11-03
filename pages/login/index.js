import React from "react";
import LoginForm from "../../components/pages/LoginForm";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 bg-gradient-to-r from-[#222232] to-[#393d47] text-white">
        <div className="mt-[20vh] text-center w-full col-span-6">
          <div className="flex w-full justify-center">
            <div>
              <img
                src="https://kitatopup.id/assets/public__topup/images/icon/white.png"
                alt="logo"
                className="w-10"
              />
            </div>
            <h2 className="text-2xl font-medium ml-2">Akita</h2>
          </div>

          <h1 className="mt-9 text-4xl font-semibold">
            Masuk atau buat akun <br /> untuk memulai
          </h1>
          <div className="mt-8 flex justify-center">
            <LoginForm />
          </div>
        </div>
        <div className="bg-cover w-full h-[100vh] overflow-hidden col-span-6">
          <img
            className="object-cover w-full h-full"
            src="https://ro-cdn-sea-cf.roglobal.com/ro-official-sea/prd/resource/2023-02/NshCDzIPIP_6.jpg"
            alt="login"
          />
        </div>
      </div>
    </>
  );
}
