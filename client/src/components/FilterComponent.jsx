import { useState } from 'react';

const FilterComponent = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

//   const [location, setLocation] = useState('');
//   const [radius, setRadius] = useState(50);
//   const [results, setResults] = useState([]);

//   const handleLocationSearch = (location) => {
//     setLocation(location);
//     // Perform search based on location and radius here
//     // For demonstration, we'll just set some dummy results
//     setResults([
//       `Result 1 near ${location} within ${radius} km`,
//       `Result 2 near ${location} within ${radius} km`,
//       `Result 3 near ${location} within ${radius} km`
//     ]);
//   };

//   const handleRadiusChange = (radius) => {
//     setRadius(radius);
//     // Update search results based on new radius
//     setResults(prevResults =>
//       prevResults.map(result => result.replace(/within \d+ km/, `within ${radius} km`))
//     );
//   };

  return (
    <div className="bg-gray-900 fixed top-32 text-white p-2 w-64 flex flex-col justify-center md:w-28 lg:w-56 rounded-md">
        <h1 className='text-center mb-4'>Filters</h1>
      <ul className="list-disc pl-5">
        {filteredItems.map((item, index) => (
          <li key={index} className="mb-1 text-xs">{item}</li>
        ))}
      </ul>




    </div>
  );
};

export default FilterComponent;