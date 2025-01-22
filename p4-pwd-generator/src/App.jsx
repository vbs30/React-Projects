import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberPresent, setNumberPresent] = useState(false)
  const [characterPresent, setCharacterPresent] = useState(false)
  const [copyStatus, setCopyStatus] = useState(false)
  const [password, setPassword] = useState("")
  const pwdRef = useRef(null)

  const pwdGenerator = useCallback(() => {
    let pwd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberPresent)
      str += "0123456789"
    if (characterPresent)
      str += "~!@#$%^&*(){}[]-+/*="
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pwd += str.charAt(char)
    }
    setPassword(pwd)

  }, [length, numberPresent, characterPresent, setPassword /*Dependencies, what are dependent when one thing happens, interrelated values*/])

  //if any reload happens or any change happens, these 4 things also should get that effect
  useEffect(() => { pwdGenerator() }, [length, numberPresent, characterPresent, pwdGenerator])

  const copyInput = useCallback(() => {
    pwdRef.current.select()
    window.navigator.clipboard.writeText(password)
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 500);
  }, [password])

  return (

    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
        {/* Input box with Copy button */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="flex-1 p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
            ref={pwdRef}
          />
          <button onClick={copyInput} className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {copyStatus ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Range input and checkboxes */}
        <div className="flex justify-between items-center">
          <div>
            <label className="flex items-center space-x-2">
              <span className="text-base">Length: {length}</span>
              <input
                type="range"
                min={8}
                max={30}
                value={length}
                onChange={(e) => { setLength(e.target.value) }}
                className="cursor-pointer"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked={numberPresent} onChange={(e) => { setNumberPresent((prev) => !prev) }} id='numInput' />
              <span className="text-base">Numbers</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked={characterPresent} onChange={(e) => { setCharacterPresent((prev) => !prev) }} id='charInput' />
              <span className="text-base">Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
