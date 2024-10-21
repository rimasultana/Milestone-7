const getStoredCard = () => {
  const storeCardString = localStorage.getItem("card");
  if (storeCardString) {
    return JSON.parse(storeCardString);
  }
  return [];
};

const addTols = (id) => {
  const card = getStoredCard();
  card.push(id);
  saveCardTols(card);
};
export { addTols, getStoredCard };
/* const saveCardTols = (card) =>{
    const  cardStringFiled = JSON.stringify(card);
    localStorage.setItem('card', cardStringFiled)
} */
