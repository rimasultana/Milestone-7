 
export default function Watch({watch}) {

    const {name, price} = watch;
  return (
    <div className="py-5">
        <h3 className="text-2xl">Watch: {name}</h3>
        <p className="text-xl">Price: {price}</p>
    </div>
  )
}
