import React from "react";

export default function Country({ country, handleClickFlags,handleClickVisited }) {
  const { name, area, flags, cca3,region } = country;

  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <h2 className="font-bold py-3 text-center">Name: {name.common}</h2>
      <figure>
        <img className="object-cover w-96 rounded-lg h-[250px]"
          src={flags.png}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className="font-semibold">Region: {region}</p>
        <p className="font-semibold">Area: {area}</p>
        <p className="font-semibold">{cca3}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-lime-500">Added</button>
          <button onClick={()=>handleClickVisited(name.common)} className="btn bg-lime-500">Visited</button>
          <button onClick={()=>handleClickFlags(flags.png)} className="btn bg-lime-500">Add flag</button>
        </div>
      </div>
    </div>
  );
}
