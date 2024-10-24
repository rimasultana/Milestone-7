
export default function Header() {
  return (
    <div className="bg-slate-300">
      <nav className="flex items-center justify-between  w-11/12 mx-auto  py-5">
        <div>
            <h2 className="text-3xl">Logo</h2>
        </div>
        <div>
            <ul className="flex items-center gap-10 text-xl">
                <li>Home</li>
                <li>Products</li>
                <li>Cart1</li>
                <li>$500</li>
            </ul>
        </div>
      </nav>
    </div>
  );
}
