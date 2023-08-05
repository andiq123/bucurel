"use client";

import React, { useState, useEffect } from "react";
import getBussinessInfo from "../data/bussiness-info";
import Link from "next/link";
import Image from "next/image";

type Props = {};
const businessInfo = getBussinessInfo();

export default function Intro({}: Props) {
  const defaultWidth = 300;
  const [imageWidth, setImageWidth] = useState(defaultWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth >= 768 ? 500 : defaultWidth;
      setImageWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero py-52" id="intro">
      <div className="hero-content flex-col lg:flex-row-reverse text-center -mt-28 bg-base-200 bg-opacity-20 backdrop-blur-lg">
        <Image
          src="/cardealer.jpg"
          width={imageWidth}
          height={500}
          alt="dealer"
          className="max-w-xl rounded-xl shadow-2xl bg-cover"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Automobili di Marian Bucurel</h1>
          <p className="py-6">
            Benvenuti nel sito della nostra azienda di vendita di auto. Siamo
            orgogliosi di offrire una vasta gamma di automobili di alta qualità
            a prezzi competitivi.
          </p>
          <Link href="/cars" className="btn btn-primary text-white">
            Lista delle automobili
          </Link>
        </div>
      </div>
    </div>
  );
}
