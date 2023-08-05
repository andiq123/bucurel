import React from "react";

export default function AboutDaisy() {
  return (
    <div
      className="relative overflow-hidden md:border-none border-t-8 border-primary-content"
      id="about"
    >
      <div className="absolute md:top-44 top-20 md:-left-10 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-pink-500 rotate-12 rounded-xl -z-10 opacity-50"></div>

      <div className="container max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold p-5 mb-4 bg-gray-200 rounded-2xl w-fit mx-auto">
          Chi Siamo
        </h1>

        <div className="bg-base-100 shadow-xl rounded-box p-8 text-2xl">
          <p>
            Siamo un&apos;azienda specializzata nella vendita di automobili di
            alta qualità. La nostra missione è quella di offrire ai nostri
            clienti un&apos;esperienza di acquisto eccezionale, fornendo veicoli
            affidabili, sicuri e di lusso a prezzi competitivi.
          </p>

          <p className="mt-4">
            Ci impegniamo a garantire la soddisfazione dei nostri clienti
            attraverso un servizio personalizzato, trasparente e professionale.
          </p>
        </div>
      </div>
    </div>
  );
}
