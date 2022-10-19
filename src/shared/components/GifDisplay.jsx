import React from "react";
import getGifs from "../functions/getGifs";
import { SearchProvider, useSearchContext } from "../context/SearchContext";

function GifDisplay({ gif_id, title, url }) {
    return (
        <>
            <div key={gif_id}>
                {title}
                <img src={url} alt={title}></img>
                {gif_id}
            </div>
        </>
    );
}

export default GifDisplay;
