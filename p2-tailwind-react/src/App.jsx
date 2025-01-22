import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign from './components/Sign'

function App() {
  // const name = ["Vinayak", "Bhaskar", "Suryavanshi", "YVN", "VBS"]
  // const role = ["SDE 1", "Service", "Surname", "Associate Consultant", "DON Mafia"]
  // const location = ["Mumbai", "Pune", "Nashik", "Mumbai", "India"]

  const details = [
    { name: "Vinayak", role: "SDE 1", location: "Mumbai" },
    { name: "Bhaskar", role: "Service", location: "Pune" },
    { name: "Suryavanshi", role: "Surname", location: "Nashik" },
    { name: "YVN", role: "Associate Consultant", location: "Mumbai" },
    { name: "VBS", role: "DON Mafia", location: "India" },
  ];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <br></br>
      {/* <Sign name="Vinayak" role="SDE 1" location="Navi Mumbai" />
      <br></br>
      <Sign name="Yutika" role="Associate Consultant" location="Mumbai" /> */}

      {/* {name.map((n, index) => (
        
        <Sign
          name={n}
          role={role[index]}
          location={location[index]}
        />
      ))} */}

      {details.map((detail, index) => (
        <Sign 
          key={index}
          index = {index} 
          name={detail.name} 
          role={detail.role} 
          location={detail.location} 
        />
      ))}


    </>
  )
}

export default App
