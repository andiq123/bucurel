"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Intro({}: Props) {
  const width = window.innerWidth >= 768 ? 500 : 300;

  return (
    <div className="hero py-52 slide-up" id="intro">
      <div className="hero-content flex-col lg:flex-row-reverse text-center -mt-28 bg-base-200 bg-opacity-20 backdrop-blur-lg">
        <Image
          src="/cardealer.jpg"
          width={width}
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
