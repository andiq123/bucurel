import React from "react";
import getBussinessInfo from "../data/bussiness-info";

const bussInfo = getBussinessInfo();
const { comune, indirizzo, provincia, cap } = bussInfo.domicilioFiscaleTitolare;
const address = indirizzo + ", " + comune + ", " + provincia + ", " + cap;

export default function ContactDesign() {
  return (
    <div className="p-10 bg-cover" id="contact">
      <h1 className="text-3xl font-bold mb-5 w-fit p-5 mx-auto bg-slate-200 rounded-xl">
        Dove Trovarci
      </h1>
      <p className="mt-5 py-5 font-bold">Il nostro indirizzo è: {address}</p>
      <div className="map-container hero-overlay bg-op">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.3919314927653!2d10.974054717254248!3d45.37723106545293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5fe060a1f63f%3A0x1d3b327a39bf33c2!2sVia%20della%20Stazione%2C%209%2C%2037135%20Verona%20VR%2C%20Italia!5e0!3m2!1sro!2sro!4v1691237827656!5m2!1sro!2sro"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
