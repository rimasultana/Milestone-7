import "./CartContainer.css";

export default function CartContainer({ isActive, handleActiveStatus }) {
  console.log(isActive);
  return (
    <div>
      <h2>CartContainer</h2>
      <div className="flex cursor-pointer gap-5">
        <div
          onClick={() => handleActiveStatus("cart")}
          className={` p-4 ${isActive.cart ? "btn bg-lime-500" : " btn"}`}
        >
          Cart
        </div>
        <div
          onClick={() => handleActiveStatus("about")}
          className={`p-4 ${isActive.cart ? "btn " : " btn bg-lime-500"}`}
        >
          About
        </div>
      </div>
    </div>
  );
}
