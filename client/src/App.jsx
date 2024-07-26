import { useSelector } from 'react-redux';
import './App.css'
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import FilterComponent from "./components/FilterComponent"
import { useState } from 'react';
import feild from "./assets/field.jpeg"
import feild2 from "./assets/feild2.jpeg"



function App() {
  // const [count, setCount] = useState(0);
  const result =useSelector((state)=>state.Search.value);

  const items = [
    'Satellite',
    'Topographic',
    'GIS',
    'Weather',
    'Urban'
  ];

  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState(50);
  // const [results, setResults] = useState([]);


  return (
    <>
    {/* bg-[#171819] */}
      <div className='h-screen w-full  bg-[#121414] bg-bgcolor'>
        <Logo></Logo>

        <SearchBar></SearchBar>
        <div className='text-white pt-32 mx-2 md:mx-20 lg:mx-64 '>
        {result}
        <div className='flex wrap'>
          <div className='p-2 pb-10 bg-white w-52 rounded-lg relative m-2 mt-0'>
            <img className='rounded' src={feild} alt="feild" />
            <h1 className='absolute text-black'> A Field in New jersey</h1>
          </div>
          <div className='p-2 pb-12 bg-white w-52 rounded-lg relative m-2 mt-0'>
            <img className='rounded h-72 w-full' src={feild2} alt="feild" />
            <h1 className='absolute text-black'> A Field in New Jersey (topographical map)</h1>
          </div>
        </div>
        {/* <h2 className="text-xl mb-2">Search Results for `${location}` within {radius} km</h2> */}

        </div>

        <div className="mr-4">
        {/* <h1 className="text-xl font-bold mb-4 text-white ml-4">Filters</h1> */}
        <FilterComponent items={items} />
      </div>

      </div>

    </>
  )
}

export default App;
