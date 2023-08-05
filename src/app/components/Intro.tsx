import Image from "next/image";
import React from "react";
import getBussinessInfo from "../data/bussiness-info";
import Link from "next/link";

type Props = {};
const businessInfo = getBussinessInfo();

export default function Intro({}: Props) {
  return (
    <div className="hero bg-base-100 py-52 border-b-8" id="intro">
      <div className="hero-content flex-col lg:flex-row-reverse text-center">
        <Image
          src="/cardealer.jpg"
          width={500}
          height={500}
          alt="dealer"
          className="max-w-xl rounded-xl shadow-2xl"
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
