import React from 'react'

export default function Country({country}) {



    
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center">
        <button className="btn bg-lime-500">Added</button>
        <button className="btn bg-lime-500">Visited</button>
        <button className="btn bg-lime-500">Add flag</button>
      </div>
    </div>
  </div>
  )
}
