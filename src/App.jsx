import React from 'react'
import Card from './components/Card/Card'
import User from './components/userList/User'
import data from './assets/data.json'

const App = () => {
  return (
    <div className=' p-5 w-[1400px] m-auto mt-10 flex gap-10 flex-wrap rounded-xl'>
      {data.map((obj)=> <User data={obj}/>)}
    </div>
  )
}

export default App
