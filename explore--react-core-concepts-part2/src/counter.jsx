import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

const HandalAdd =()=>{
 const newCount = count + 1;
 setCount(newCount);
}
const handleReduse =()=>{
 const newCount = count - 1;
 setCount(newCount);

}

    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={HandalAdd}>Add</button>
            <button onClick={handleReduse}>Reduse</button>
        </div>
    )
}