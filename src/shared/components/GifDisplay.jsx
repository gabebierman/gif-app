import React from "react";
import getGifs from "../functions/getGifs";
import { SearchProvider, useSearchContext } from "../context/SearchContext";

function GifDisplay() {
    const { searchResults } = useSearchContext();
    return (
        <>
            {searchResults.length === 0 && "Dave's not here , man"}
            {searchResults.length !== 0 &&
                searchResults.map(
                    <div>
                        {searchResults.title}
                        <img src={searchResults.url}></img>
                    </div>
                )}

            {/* {error && "Something went wrong!?!?!"} */}
            {/* {!error && searchResults.map((v) => <div key={v.gif_id}><img src={v.url}></img></div>)} */}
        </>
    );
}

export default GifDisplay;
