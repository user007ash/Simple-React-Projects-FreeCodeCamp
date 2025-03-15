// Project - Fetch Cat Facts  

import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [facts, setFacts] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const [loading, setloading] = useState (false)
  
  const fetchFacts = () => {
    setloading(true)
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {setFacts(data.fact)})
    .catch(error => console.error("Error fetching facts:", error))
    .finally(()=>setloading(false))

  } 

  useEffect(() => {
    fetchFacts();
  }, []);
  
  return (
    
    <div className="bg-amber-500 p-8 flex flex-col min-h-screen items-center text-4xl gap-12">
      <h1 className="text-6xl font-bold ">Cat Fact Generator</h1>
      <div className="border-2 border-black min-w-full  p-8 flex flex-col items-center gap-6 ">
        <button className="shadow-md shadow-black bg-gray-600 text-gray-100 font-bold px-3 py-4 rounded-2xl hover:bg-gray-700 hover:shadow-sm" onClick={()=>
          {
            if (isHidden) fetchFacts();
            setIsHidden(!isHidden);
          }}>
            New Fact
        </button>

        <h2 className={`${isHidden?'hidden':''} p-4`}>{loading?'Loading...':'"'+facts+'"'}</h2>
      </div>
    </div>
  )
}

export default App
