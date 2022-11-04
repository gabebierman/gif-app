import React, { useState } from "react";
import getGifs from "../shared/functions/getGifs";
import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "../shared/context/SearchContext";
import GifDisplay from "../shared/components/GifDisplay";
import { useFavoritesContext } from "../shared/context/FavoritesContext";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [rating, setRating] = useState("g");
    const [url, setUrl] = useState(null);
    const { searchResults, setSearchResults } = useSearchContext();
    const { favorites, addFavorite, removeFavorite } = useFavoritesContext();
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
                onClick={(e) => {
                    if (searchTerm) {
                        setUrl(`&q=${searchTerm}&rating=${rating}`);
                    }
                }}
            >
                Search
            </button>
            {error && "Uh oh"}
            {searchResults.length === 0 && "Dave's not here , man"}
            {searchResults.length !== 0 &&
                searchResults.map((e) => (
                    <GifDisplay
                        key={e.gif_id}
                        {...e}
                        isFavorite={favorites.some((fave) => fave.gif_id === e.gif_id)}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                    />
                ))}
        </div>
    );
};

export default SearchPage;
