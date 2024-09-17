import User from './components/userList/User'
import data from './assets/data.json'

const App = () => {
  return (
    <div className='bg-blue-500'>
      <div className=' w-[1320px] m-auto pt-10 flex gap-10 flex-wrap rounded-xl '>
        {data.map((obj,i) => <User data={obj}  key={i}/>)}
      </div>
    </div>
  )
}

export default App
