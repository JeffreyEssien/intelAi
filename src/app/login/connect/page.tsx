"use client"

import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import Elipse1 from "../../landingpages/images/Ellipse 6.png";
import Elipse2 from "../../landingpages/images/Ellipse 107.png";
import MetamaskImg from "../../landingpages/images/MetaMask Symbol.png";
import CoinbaseImg from "../../landingpages/images/Coinbase Symbol.png";
import MarketCapImg from "../../landingpages/images/Coin Market Cap Symbol.png";
import TrustWalletImg from "../../landingpages/images/trust-wallet-svgrepo-com 1.png";
import CoinoneImg from "../../landingpages/images/Coinone Symbol.png";
import BithumbImg from "../../landingpages/images/Bithumb Symbol.png";
import KuCoinImg from "../../landingpages/images/KuCoin Symbol.png";
import HuobiImg from "../../landingpages/images/Huobi Symbol.png";
import Logo from '../../landingpages/images/Intel AI logo (1) (1) (1).png';

const wallets = [
  { name: "Metamask", imgSrc: MetamaskImg },
  { name: "Coinbase Wallet", imgSrc: CoinbaseImg },
  { name: "Market Cap", imgSrc: MarketCapImg },
  { name: "Trust Wallet", imgSrc: TrustWalletImg },
  {
    name: "Other Wallets",
    imgSrc: [
      { src: CoinoneImg, alt: "Coinone" },
      { src: BithumbImg, alt: "Bithumb" },
      { src: KuCoinImg, alt: "KuCoin" },
      { src: HuobiImg, alt: "Huobi" },
    ]
  }
];

const Connect: React.FC = () => {
  const style: React.CSSProperties = {
    background: "radial-gradient(circle, rgba(3, 255, 163, 0.05), rgba(13, 13, 13, 0.9))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const style2: React.CSSProperties = {
    background: "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(13, 13, 13, 0.9))",
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
      <div className="w-[30%] h-1/2 absolute top-[-20px] left-[-300px] rotate-45 rounded-full opacity-25" style={style}></div>
      <div className="w-[30%] h-1/2 absolute top-[-20px] left-[-300px] rotate-45 rounded-full opacity-25" style={style2}></div>
      <div className="w-[40%] h-1/2 absolute bottom-[-20px] right-[-240px] rotate-45 rounded-full opacity-30" style={style}></div>
      <div className="w-[40%] h-1/2 absolute bottom-[-20px] right-[-200px] rotate-45 rounded-full opacity-30" style={style2}></div>

      <Link href='/' className="w-[90%] flex justify-start items-center pt-4">
        <Image src={Logo} alt="logo" className="lg:w-[8%] w-[30%]" />
      </Link>

      <div className='mt-4 pt-10 border-t border-[#363636] w-[95%] flex flex-col justify-center items-center'></div>

      <h1 className="lg:text-[54px] hidden lg:flex mt-10 text-white">Connect Web3 Wallet</h1>

      <div className="flex flex-col lg:w-[25%] w-[90%] mx-auto items-center bg-[#131313] rounded-[16px] my-5 z-20">
        <p className="py-2 border-b border-[#202020] w-full mb-2 text-center text-[#DBDBDB]">Connect wallet</p>
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <div className="loader">Connecting wallet...</div>
          </div>
        ) : (
          <ul className="flex flex-col space-y-5 w-full items-center pb-6">
            {wallets.map((wallet, index) => (
              <li
                key={index}
                className="flex flex-row items-center bg-[#1A1A1A] rounded-[16px] py-4 w-[90%] gap-4 cursor-pointer"
                onClick={handleItemClick}
              >
                {Array.isArray(wallet.imgSrc) ? (
                  <div className="ml-4 w-[20%]">
                    <div className="flex">
                      {wallet.imgSrc.slice(0, 2).map((img, idx) => (
                        <Image key={idx} src={img.src} alt={img.alt} className="w-[30%]" />
                      ))}
                    </div>
                    <div className="flex">
                      {wallet.imgSrc.slice(2).map((img, idx) => (
                        <Image key={idx} src={img.src} alt={img.alt} className="w-[30%]" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <Image src={wallet.imgSrc} alt={wallet.name} className="w-[10%] ml-4" />
                )}
                <p>{wallet.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Connect;
