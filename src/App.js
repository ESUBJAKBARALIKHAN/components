import React,{useState} from 'react'


const App = () => {
  const[name,setName]=useState("akbar")
  return (
    <div>
      <center>
      {name}
      <br>
      </br>
      <button onClick={()=>setName("NARASIMHA")}>CLICK HERE
      </button>
      </center>
    </div>
  )
}

export default App
