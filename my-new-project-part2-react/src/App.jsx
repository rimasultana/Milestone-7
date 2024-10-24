import AllProducts from "./Components/AllProduct/AllProducts";
import Header from "./Components/Header/Header";
import CartContainer from "./Components/CartContainer/CartContainer";
import { useState } from "react";
function App() {
  const [isActive, setActive] = useState({
    cart: true,
    status: "cart",
  });


  const handleActiveStatus = status=>{
    if(status == "cart"){
      setActive({
        cart:true,
        status: "active"
      })
    }
    else{
      setActive({
        cart: false,
        status: "about"
      })
    }
  }
  console.log(isActive);
  return (
    <>
      <Header></Header>
      <div className="flex justify-around">
        <AllProducts></AllProducts>
        <CartContainer isActive={isActive} handleActiveStatus={handleActiveStatus} ></CartContainer>
      </div>
    </>
  );
}

export default App;
