import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addTols, getStoredCard } from "../../LocalStorage/LocalStorage";

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("Bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(()=>{
  console.log("called bottles", bottles.length);
    if(bottles.length ){
      const storedCard = getStoredCard();
      console.log(storedCard, bottles); 

      for(id of storedCard){
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id ===  id);

        if(bottle){
          savedCard.push(bottle);
        }
      }
      console.log("saveed card", savedCard);
    }
  })

  const handleAddCard = (bottle) => {
    setCard([...card, bottle]);
    addTols(bottle.id);
  };

  return (
    <div>
      <h2 className="text-2xl">Bottles Available: {bottles.length}</h2>
      <h3>Card: {card.length}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {bottles.map((bottle) => (
          <Bottle
            handleAddCard={handleAddCard}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}
