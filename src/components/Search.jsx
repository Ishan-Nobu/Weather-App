import { FaSearch } from "react-icons/fa";

function Search( { search, searchValue, setSearchValue} ) 
{   
    // Click Search
    const clickEvent = (e) => { 
        if(e.type === "click")
        {
            search(e);
        }
    };

    return (
        <>
        <div className="flex flex-row items-center justify-center space-x-3 mb-7 pt-4">
            <input className="rounded-md bg-amber-50 text-black font-light w-100 shadow-xl capitalize focus:outline-none p-2 
            placeholder:normal-case" 
            type="text" placeholder="Search city..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={search}/>
            <FaSearch className="size-5 cursor-pointer transition ease-in-out hover:scale-150" onClick={clickEvent}/>
            {/* <FaLocationCrosshairs className="size-5 cursor-pointer transition ease-in-out hover:scale-150"/> */}
        </div>
        </>
    )
}

export default Search