import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  // ? uso de peticiones HTTP con "AXIOS"

  const [user, setUser] = useState()
  const [count, setCount] = useState(0)

  useEffect(() => {
    const dataUrl = "https://randomuser.me/api/"
    axios.get(dataUrl)
      .then(res => setUser(res.data.results[0]))
      .catch(err => console.log(err))
    //.then(res => console.log(res)) // ns sirve para cuando un apromesa se resuelve correctamente
    //.catch(err => console.log(err)) // cuando el servidor ns devuelve un error
  }, [count])

  const clickRamdomUsers = () => {
    setCount(count + 1)
  }


  return (
    <div className="App">
      <div className="content">
        <h1>UseEffect Martes / Axios</h1>
        <div className="img">
          <img src={user?.picture.large} alt={user?.name.first} />
        </div>
        <h2>{user?.name.title} {user?.name.first} {user?.name.last}</h2>
        <ul>
          <li><strong>Email: </strong>{user?.email}</li>
          <li><strong>Gender: </strong>{user?.gender}</li>
          <li><strong>Phone: </strong>{user?.phone}</li>
          <li><strong>gender: </strong>{user?.registered.age}</li>
        </ul>
        <button onClick={clickRamdomUsers}>Netx Users</button>
      </div>
    </div>
  )
}

export default App
