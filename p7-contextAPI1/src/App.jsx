import React, {useState} from "react"
import UseContextProvider from "./context/UseContextProvider"
import Profile from "./components/Profile"
import Login from "./components/Login"

function App() {

  return (
    <UseContextProvider>
      <Login />
      <Profile />
    </UseContextProvider>
  )
}

export default App
