import React, { useCallback, useState, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

    for (let i = 1; i <= length; i++) {
      const IndexOfCharWhichNeedToBeSelectedFromStr = Math.floor(
        Math.random() * str.length,
      );

      pass += str.charAt(IndexOfCharWhichNeedToBeSelectedFromStr);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const SaveToClipboard=(e)=>{
    passwordRef.current?.select()
    // passwordRef.current.setSelectionRange(0, 3);
    navigator.clipboard.writeText(password);
    setCopied(true)
    setTimeout(() => {
        setCopied(false)
    }, 1000);

  }

  const passwordRef=useRef("");

  useEffect(() => {
    PasswordGenerator();
  }, [PasswordGenerator]);

  return (
    <div className="h-screen w-screen bg-gray-900 text-amber-50 flex justify-center items-center pt-7 ">
      <div className="border border-amber-200 p-4 rounded-2xl w-screen ">
        <h1 className="text-2xl">Password Generator</h1>
        <div className=" flex  mt-5 ">
          <input
            type="text"
            className="bg-amber-50  p-2 flex-1 outline-none  text-black text-2xl "
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button className="bg-blue-500 p-2 rounded-r-2xl cursor-pointer" onClick={SaveToClipboard}>
            {copied ? "copied":"copy"}
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          <input
            type="range"
            min={6}
            max={30}
            step={1}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="lengthRange">Length({length})</label>
          <input
            type="checkbox"
            id="numberAllowed"
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numberAllowed">Number</label>
          <input
            type="checkbox"
            id="charAllowed"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charAllowed">Special</label>
        </div>
      </div>
    </div>
  );
};

export default App;
