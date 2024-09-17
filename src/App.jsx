import React from 'react'
import Card from './components/Card/Card'
import User from './components/userList/User'
import data from './assets/data.json'

const App = () => {
  return (
    <div className='bg-blue-500'>
      <div className=' w-[1350px] m-auto pt-10 flex gap-10 flex-wrap rounded-xl '>
        {data.map((obj) => <User data={obj} />)}
      </div>
    </div>
  )
}

export default App
