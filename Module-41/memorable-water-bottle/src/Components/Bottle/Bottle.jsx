export default function Bottle({ bottle, handleAddCard }) {
  const { name, price, img } = bottle;

  return (
    <div className="  border-2 border-red-900 rounded-lg py-5">
      <h3 className="text-xl">Bottle: {name}</h3>
      <div className="flex justify-center py-3">
      <img
          className="w-[300px] h-[300px] object-cover text-center rounded-t-xl"
          src={img}
          alt=""
        />
      </div>
      <p className="text-lg">${price}</p>
      <button onClick={()=>handleAddCard(bottle)} className="btn border-red-900 border-2 px-4 py-2">Parches</button>
    </div>
  );
}
