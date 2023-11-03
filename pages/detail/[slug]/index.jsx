import React, { useState, Fragment } from "react";
import { Nav, Footer } from "@/components";
import { Dialog, Transition } from "@headlessui/react";

const Detail = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-16">
      <Nav />
      <div className="">
        <div className="bg-gradient-to-r from-[#795FEE] to-[#DF55FB] w-full h-[28em] flex items-center px-28 ">
          <h3 className="w-[60%] font-bold text-white text-5xl">
            Ragnarok Origin Global - Package
          </h3>
          <p className="text-white text-2xl">
            {"Home > Ragnarok Origin Global - Package"}
          </p>
        </div>
        <div className="grid grid-cols-12 w-full px-28 bg-[#222232] py-20 gap-5 relative">
          <div className="sticky top-48 col-span-3 bg-[#232529] rounded-xl h-fit -translate-y-44">
            <div className="flex flex-col justify-center items-center py-4 px-5 ">
              <img
                className="w-64 rounded-xl"
                src="https://kitatopup.id/uploads/server1/ROOGLINK.webp"
              />
              <div className="px-4">
                <h3 className="text-white mt-3 text-left">cara topup</h3>
                <p className="whitespace-pre-line text-white">
                  {
                    "1. Masukkan Link Unipin \n 2. Pilih denom yang kamu \n 3. inginkan Selesaikan pembayaran \n 4. Produk akan ditambahkan ke akun Ragnarok kamu"
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-9 bg-[#232529] rounded-md px-4 py-3 -translate-y-44">
            <div className="">
              <p className="text-white my-4">masukan link unipin</p>
              <input
                className="py-3 rounded-md mb-3"
                type="text"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mt-10">
              <p className="text-white">nominal topup</p>
              <div className="grid grid-cols-3 mt-5 gap-3">
                <button className="text-white hover:bg-gradient-to-r delay-75 transition hover:-translate-y-2 hover:from-[#DC39FC] hover:to-[#6244EC] px-5 py-6 rounded-lg whitespace-pre w-full text-center border-[1px] border-[#fff]">
                  <p>Battle Pass Ace Special Edition 22$</p>
                </button>
                <button className="text-white hover:bg-gradient-to-r delay-75 transition hover:-translate-y-2 hover:from-[#DC39FC] hover:to-[#6244EC] px-5 py-6 rounded-lg whitespace-pre w-full text-center border-[1px] border-[#fff]">
                  <p>Battle Pass Ace Special Edition 22$</p>
                </button>
                <button className="text-white hover:bg-gradient-to-r delay-75 transition hover:-translate-y-2 hover:from-[#DC39FC] hover:to-[#6244EC] px-5 py-6 rounded-lg whitespace-pre w-full text-center border-[1px] border-[#fff]">
                  <p>Battle Pass Ace Special Edition 22$</p>
                </button>
                <button className="text-white hover:bg-gradient-to-r delay-75 transition hover:-translate-y-2 hover:from-[#DC39FC] hover:to-[#6244EC] px-5 py-6 rounded-lg whitespace-pre w-full text-center border-[1px] border-[#fff]">
                  <p>Battle Pass Ace Special Edition 22$</p>
                </button>
                <button className="text-white hover:bg-gradient-to-r delay-75 transition hover:-translate-y-2 hover:from-[#DC39FC] hover:to-[#6244EC] px-5 py-6 rounded-lg whitespace-pre w-full text-center border-[1px] border-[#fff]">
                  <p>Battle Pass Ace Special Edition 22$</p>
                </button>
              </div>
            </div>

            <div>
              <div className="mt-14">
                <p className="text-white my-4">Email</p>
                <input
                  className="py-3 rounded-md mb-3"
                  type="text"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="">
                <p className="text-white my-4">voucher</p>
                <div className="flex">
                  <input
                    className="py-3 rounded-md"
                    type="text"
                    style={{ width: "100%" }}
                  />
                  <button className="bg-gradient-to-r from-[#DC39FC] to-[#6244EC] text-white rounded-md px-3">
                    Claim
                  </button>
                </div>
              </div>

              <div className="">
                <p className="text-white my-4">No. Telp</p>
                <input
                  className="py-3 rounded-md mb-3"
                  type="text"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="my-4 text-white">Pilih Pembayaran</h2>
              <div className="grid grid-cols-2">
                <div className="bg-white cursor-pointer text-black grid grid-cols-2 w-fit hover:text-white hover:bg-gradient-to-r delay-75 transition hover:-translate-y-2 hover:from-[#DC39FC] hover:to-[#6244EC] px-5 py-6 rounded-lg whitespace-pre text-center border-[1px] border-[#fff]">
                  <img src="https://assets.lapakgaming.com/images/logo-gopay.png?w=256&q=75" />
                  <p className="flex items-center text-center text-xl font-semibold ms-auto">
                    IDR 29.000
                  </p>
                </div>
                <div className="bg-white cursor-pointer text-black grid grid-cols-2 w-fit hover:text-white hover:bg-gradient-to-r delay-75 transition hover:-translate-y-2 hover:from-[#DC39FC] hover:to-[#6244EC] px-5 py-6 rounded-lg whitespace-pre text-center border-[1px] border-[#fff]">
                  <img src="https://assets.lapakgaming.com/images/logo-gopay.png?w=256&q=75" />
                  <p className="flex items-center text-center text-xl font-semibold ms-auto">
                    IDR 29.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <div className="bg-[#232529] h-24 w-full fixed bottom-0 flex text-white">
        <div className="ms-auto w-[40%]">
          <h1 className="text-xl">Total :</h1>
          <p className="text-2xl font-semibold">Rp15.100</p>
          <p className="opacity-50">Weekly Nyan Pass 2$, Gopay</p>
        </div>
        <div className="w-[30%] flex items-center">
          <button className="bg-gradient-to-r text-xl font-semibold from-[#DC39FC] to-[#6244EC] rounded-full px-10 py-4">
            Bayar Langsung
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(!isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Informasi
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Halo Sobat Akita Gaming! Mohon maaf untuk pembelian
                      paketan in game akan mengalami sedikit keterlambatan
                      dikarenakan adanya gangguan pada koneksi, waktu pemrosesan
                      transaksi kemungkinan akan memakan waktu sekitar 30-60
                      menit, mohon ketersediaannya untuk menunggu, terima kasih.
                      Login langsung ke in game kamu. Pilih paket yang kamu
                      inginkan. Lalu copy paste link pembayaran nya. NOTE :
                      Hanya bisa menggunakan PC Client atau Android APK. contoh
                      :
                      https://roglobal.com/m/transit?auth_code=lQ8WEwEcLoSpSWG49RYLbzsajtWhbU%2FIm%2BTUNejAXtCdEPgPVrGxMQMxQrGujwlRCjSADj6FKDiwrjxNF1QmJoIaoXJqdCpCqJ1Nyqkk5d%2F3iwI1i30TumYpT2uDfDXiVuu67IRX5rWFeIr7dzVCbZoiAKqEiiz015xwq%2Bc2nKl3Y4TAcx6P1sN85O9f4K56uwg0vKTe%2Fdk2b4iW%2BrtXsKAAt0yXKgSzW4H9C3L7ECLHnBHbKRQTxkM8lbNnq5En&order_id=26cfb7f89f974c27a4ded6a0767d88a7&package_code=ro-sea-android-official&unique_id=40acdd515cf264e5f137df6c03228897_1686213806714&role_id=216809
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Detail;
