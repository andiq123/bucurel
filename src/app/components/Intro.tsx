"use client";

import React, { useState, useEffect } from "react";
import getBussinessInfo from "../data/bussiness-info";
import Link from "next/link";

type Props = {};
const businessInfo = getBussinessInfo();

export default function Intro({}: Props) {
  const [imageWidth, setImageWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth >= 768 ? 500 : 400;
      setImageWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero bg-base-100 py-52 border-b-8" id="intro">
      <div className="hero-content flex-col lg:flex-row-reverse text-center">
        <img
          src="/cardealer.jpg"
          width={imageWidth}
          height={500}
          alt="dealer"
          className="max-w-xl rounded-xl shadow-2xl bg-cover"
        />
        <div>
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
