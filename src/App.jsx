import { useState } from 'react'
import Header from './Component/Header.jsx'
import NotificationContainer from './Component/NotificationContainer.jsx'

import data from './notifications.js'
function App() {
 
  const [notification, setNotification]= useState(data)
  function remove(id) {
    setNotification(arr=> arr.filter(el=>el.id !==id ))
  }

  function clear(){
    setNotification([])
  }

  return (
<>
<Header/>
<NotificationContainer prop={notification} remove={remove}/>
<button onClick={clear} >Delete all</button>

</>
  )
}

export default App
