import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultSearch } from "../features/SearchSlice/SearchSlice";
const SearchBar = () => {
    const dispatch = useDispatch();
    const [search,setSearch]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(defaultSearch(search));        
    }
    return (
        <>
            <form className='fixed top-8 w-full px-2 lg:px-60 md:px-10'>
                <div className='flex w-full search-container'>
                    <select id="countries" className="mr-2 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue>Select Query</option>
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <textarea value={search} onChange={(e)=>{setSearch(e.target.value)}} rows="1" cols="10" className='mr-2 p-1.5 h-10 grow bg-transparent px-4 rounded-lg text-black  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500' type="text" placeholder='Search' />
                    <button onClick={handleSubmit} type="submit" className='bg-blue-500 hover:bg-blue-600 px-2 text-white rounded-lg lg:px-10 h-10'>Search</button>
                </div>
            </form>
        </>
    )
}

export default SearchBar;
