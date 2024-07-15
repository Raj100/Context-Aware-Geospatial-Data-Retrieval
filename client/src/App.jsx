// import { useState } from 'react'
import { useSelector } from 'react-redux';
import './App.css'
import SearchBar from './components/SearchBar';

function App() {
  // const [count, setCount] = useState(0);
  const result =useSelector((state)=>state.Search.value);

  return (
    <>
      <div className='h-screen w-full bg-[#1E1E1E] bg-bgcolor'>
        {/* <Logo></Logo> */}
        <div className='fixed top-8 left-8 text-white'>
          CAGS
        </div>
        <SearchBar></SearchBar>
        <div className='pt-32 lg:mx-64'>
        {result}
        </div>
      </div>

    </>
  )
}

export default App;
