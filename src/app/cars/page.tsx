"use client";

import { useState } from "react";
import getCars from "../data/cars-data";

const cars = getCars();

export default function Cars() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("priceAsc");

  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });

  const filteredCars = cars.filter((car) => {
    const searchLower = search.toLowerCase();
    const brandLower = car.brand.toLowerCase();
    const brandWithModelLower = `${car.brand} ${car.model}`.toLowerCase();

    return (
      brandLower.includes(searchLower) ||
      brandWithModelLower.includes(searchLower)
    );
  });

  if (sortOption === "priceAsc") {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceDesc") {
    filteredCars.sort((a, b) => b.price - a.price);
  }

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleSort = (event: any) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-between mb-10 flex-col gap-5 lg:gap-0 lg:flex-row">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="pl-10 py-2 pr-3 rounded-lg border-2 border-gray-200 w-full sm:w-64 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Cerca per marca"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-6 w-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.85 14.35a6.5 6.5 0 1 1 4.3-1.63l3.85 3.86a1 1 0 1 1-1.42 1.42l-3.86-3.85zm6.65-6.65a5 5 0 1 0-7.08 7.08 5 5 0 0 0 7.08-7.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <select
          className="border-2 border-gray-200 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 transition-colors"
          value={sortOption}
          onChange={handleSort}
        >
          <option value="priceAsc">Prezzo: dal più basso</option>
          <option value="priceDesc">Prezzo: dal più alto</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredCars.map((car) => (
          <div
            key={`${car.brand}-${car.model}`}
            className="card bg-base-200 shadow-xl"
          >
            <figure>
              <img
                src={car.imageUrl}
                alt={`${car.brand} ${car.model}`}
                className="object-cover w-full h-48"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {car.brand} {car.model}
                {car.isNew && (
                  <div className="badge badge-secondary text-xs">Nuova</div>
                )}
              </h2>
              <p className="text-sm font-medium mb-2">
                {formatter.format(car.price)}
              </p>
              <p className="text-xs text-gray-500 mb-2">
                {car.km} km - {car.year} - {car.horsepower} CV
              </p>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-xs">Alimentazione: {car.fuel}</p>
                <p className="text-xs">Trasmissione: {car.transmission}</p>
                <p className="text-xs">Motorizzazione: {car.motorization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
