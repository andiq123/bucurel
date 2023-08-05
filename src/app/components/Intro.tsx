import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className="hero py-52 slide-up" id="intro">
      <div className="hero-content flex-col lg:flex-row-reverse text-center -mt-28 bg-base-200 bg-opacity-20 backdrop-blur-lg">
        <div className="w-full">
          <Image
            src="/cardealer.jpg"
            width={0}
            height={0}
            alt="dealer"
            sizes="100vw"
            className="max-w-xl rounded-xl shadow-2xl bg-cover w-full h-full"
          />
        </div>
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
