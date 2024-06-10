"use client"

import React, { useState } from "react";
import Image from "next/image";
import Elipse1 from "../../landingpages/images/Ellipse 6.png"
import Elipse2 from "../../landingpages/images/Ellipse 107.png";
import MetamaskImg from "../../landingpages/images/MetaMask Symbol.png";
import CoinbaseImg from "../../landingpages/images/Coinbase Symbol.png";
import MarketCapImg from "../../landingpages/images/Coin Market Cap Symbol.png";
import TrustWalletImg from "../../landingpages/images/trust-wallet-svgrepo-com 1.png";
import coinoneImg from "../../landingpages/images/Coinone Symbol.png";
import BithumbImg from "../../landingpages/images/Bithumb Symbol.png";
import KuCoinImg from "../../landingpages/images/KuCoin Symbol.png";
import HuobiImg from "../../landingpages/images/Huobi Symbol.png";
import Logo from '../../landingpages/images/Intel AI logo (1) (1) (1).png'


export default function Connect() {

  const style: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.05), rgba(13, 13, 13, 0.9))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(13, 13, 13, 0.9))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleItemClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/login/persona";
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center relative pb-40 overflow-hidden">
     
     {/* Gradient styling */}
      <div className="w-[30%] h-1/2 absolute top-[-20px] left-[-300px] rotate-45 rounded-full opacity-25" style={style}>
      </div>
      <div className="w-[30%] h-1/2 absolute top-[-20px] left-[-300px] rotate-45 rounded-full opacity-25" style={style2}>
      </div>
      <div className="w-[40%] h-1/2 absolute bottom-[-20px] right-[-240px] rotate-45 rounded-full opacity-30" style={style}>
      </div>
      <div className="w-[40%] h-1/2 absolute bottom-[-20px] right-[-200px] rotate-45 rounded-full opacity-30" style={style2}>
      </div>

      <div className="w-[90%] flex justify-end items-center pt-4">
        <Image src={Logo} alt="logo" className="lg:w-[8%]  w-[30%]" />
      </div>

      <div className='mt-4 pt-10 border-t border-[#363636] w-[95%] flex flex-col justify-center items-center'>

      </div>

      <h1 className="lg:text-[54px] hidden lg:flex mt-10 text-white">Connect Web3 Wallet</h1>

      <div className="flex flex-col lg:w-[25%] w-[90%] mx-auto items-center bg-[#131313] rounded-[16px] my-5 z-20">
        <p className="py-2 border-b border-[#202020] w-full mb-2 text-center text-[#DBDBDB]">
          Connect wallet
        </p>
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <div className="loader">Connecting wallet...</div>
          </div>
        ) : (
          <ul className="flex flex-col space-y-5 w-full items-center pb-6">
            <li
              className="flex flex-row items-center bg-[#1A1A1A] rounded-[16px] py-4 w-[90%] gap-4 cursor-pointer"
              onClick={handleItemClick}
            >
              <Image src={MetamaskImg} alt="Metamask" className="w-[10%] ml-4" />
              <p>Metamask</p>
            </li>
            <li
              className="flex flex-row items-center bg-[#1A1A1A] rounded-[16px] py-4 w-[90%] gap-4 cursor-pointer"
              onClick={handleItemClick}
            >
              <Image src={CoinbaseImg} alt="Coinbase Wallet" className="w-[10%] ml-4" />
              <p>Coinbase Wallet</p>
            </li>
            <li
              className="flex flex-row items-center bg-[#1A1A1A] rounded-[16px] py-4 w-[90%] gap-4 cursor-pointer"
              onClick={handleItemClick}
            >
              <Image src={MarketCapImg} alt="Market Cap" className="w-[10%] ml-4" />
              <p>Market Cap</p>
            </li>
            <li
              className="flex flex-row items-center bg-[#1A1A1A] rounded-[16px] py-4 w-[90%] gap-4 cursor-pointer"
              onClick={handleItemClick}
            >
              <Image src={TrustWalletImg} alt="Trust Wallet" className="w-[10%] ml-4" />
              <p>Trust Wallet</p>
            </li>
            <li
              className="flex flex-row items-center bg-[#1A1A1A] rounded-[16px] py-4 w-[90%] gap- cursor-pointer"
              onClick={handleItemClick}
            >
              <div className="ml-4 w-[20%]">
                <div className="flex">
                  <Image src={coinoneImg} alt="Coinone" className="w-[30%]" />
                  <Image src={BithumbImg} alt="Bithumb" className="w-[30%]" />
                </div>
                <div className="flex">
                  <Image src={KuCoinImg} alt="KuCoin" className="w-[30%]" />
                  <Image src={HuobiImg} alt="Huobi" className="w-[30%]" />
                </div>
              </div>
              <p className="w-80">Other Wallets</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
