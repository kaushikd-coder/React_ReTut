import { useCallback, useEffect, useRef, useState } from "react"

function PassGenerator() {

    const [length, setLength] = useState(8);
    const[numberAllowed, setNumber] = useState(false);
    const[charAllowed, setChar] = useState(false);
    const [pass, setPass] = useState('');

    const passRef = useRef(null)

    const GeneratePassword = useCallback(() => {
        let pass = '';
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numberAllowed) str += "0123456789";
        if(charAllowed) str += "!@#$%^&*()_+";

        for(let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str.length);
            pass += str.charAt(index);
        }

        setPass(pass);
    },[length,charAllowed,numberAllowed]);

    const handleCopy = () => {
        window.navigator.clipboard.writeText(pass);
        passRef.current.focus()
    }

    useEffect(() => {
        GeneratePassword();
    },[length,numberAllowed,charAllowed])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 text-orange-500 my-8 px-4">
        <h1 className="text-white text-center my-3">PassWord Generator</h1>
        <div className="flex shadow-md rounded-md overflow-hidden md-10">
            <input className="w-full mr-3" type="text" value={pass} placeholder="password" ref={passRef}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopy}>Copy</button>
        </div>
        <div className="flex items-center gap-x-3">
            <input className="cursor-pointer" type="range" value={length} min={6} max={100} onChange={(e) => setLength(e.target.value)}/>
            <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-3">
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
                setChar((prev) => !prev)
            }}/>
            <label htmlFor="charAllowed">Character</label>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
                setNumber((prev) => !prev)
            }} />
            <label htmlFor="numberAllowed">Number</label>
        </div>
    </div>
  )
}

export default PassGenerator
