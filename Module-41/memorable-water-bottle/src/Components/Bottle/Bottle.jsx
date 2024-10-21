export default function Bottle({ bottle }) {
  const { name, price, img } = bottle;

  return (
    <div className="  border-2 border-red-900 rounded-lg py-5">
      <h3 className="text-2xl">Bottle: {name}</h3>
      <div className="flex justify-center">
        <img
          className="w-[300px] object-cover text-center rounded-t-xl"
          src={img}
          alt=""
        />
      </div>
      <p className="text-xl">${price}</p>
    </div>
  );
}
