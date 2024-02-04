import { useState } from "react"

function Bg() {
    const[color, setColor] = useState("olive");

    const handleRed = (newColor) => {
        // console.log(e.value);
        setColor(newColor)
    }
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="flex  flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <button className="mx-2 rounded-full bg-red-400 text-black p-5" onClick={() => handleRed('Red')}>Red</button>
        <button className="mx-2 rounded-full bg-blue-400 p-5" onClick={() => handleRed('Blue')}>Blue</button>
        <button className="mx-2 rounded-full bg-green-400 text-black p-5" onClick={() => handleRed("Green")}>Green</button>
    </div>
    </div>
  )
}

export default Bg
