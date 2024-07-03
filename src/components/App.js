import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleChange = () =>{
    console.log(name);
    setList([...list, name]);
  }

  return (
    <div id="main">

      <input type='text' onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleChange}>Name List</button>
      <ol id='relativeList'>
        {
          list.map((element, idx) =>{
            return <li id={`relativeListitem${idx}`}>{element}</li>
          })
        }
      </ol>
    </div>
  )
}

export default App
