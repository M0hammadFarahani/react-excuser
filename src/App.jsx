import { useState } from "react";




function App() {

  const [excuse, setExcuse] = useState('')

  const handleClick = (e) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${e.target.value}`)
    .then(res => res.json())
    .then(data => setExcuse(data[0].excuse))
  }

  return (
    <div className="container text-center">
      <h1 className="my-5">Generate an excuse</h1>

      <div className="btn-group mb-5">
        <button className="btn btn-primary text-light" value="party" onClick={handleClick}>Party</button>
        <button className="btn btn-primary text-light" value="family" onClick={handleClick}>Family</button>
        <button className="btn btn-primary text-light" value="office" onClick={handleClick}>Office</button>
      </div>

      <div className="w-75 p-5 mx-auto border rounded">
        <h2>{excuse}</h2>
      </div>
    </div>
  )
}



export default App;