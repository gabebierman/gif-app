import React, { useState } from "react";
import getGifs from "../shared/functions/getGifs";
import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "../shared/context/SearchContext";
import GifDisplay from "../shared/components/GifDisplay";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [rating, setRating] = useState("g");
    const [url, setUrl] = useState(null);
    const { searchResults, setSearchResults } = useSearchContext();
    const { error } = useQuery(["getGifs", url], () => getGifs(url), {
        onSuccess: (data) => setSearchResults(data),
        enabled: !!url,
    });
    return (
        <div>
            <input
                placeholder="Search Term"
                id="search-term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg-13">PG-13</option>
                <option value="r">R</option>
            </select>
            <button
                variant="secondary"
                onClick={(e) => {
                    if (searchTerm) {
                        setUrl(`&q=${searchTerm}&rating=${rating}`);
                    }
                }}
            >
                Search
            </button>
            {error && "Uh oh"}
            {!error && <GifDisplay></GifDisplay>}
        </div>
    );
};

export default SearchPage;
