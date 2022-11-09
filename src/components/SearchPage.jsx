import React, { useState } from "react";
import getGifs from "../shared/functions/getGifs";
import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "../shared/context/SearchContext";
import GifDisplay from "../shared/components/GifDisplay";
import { useFavoritesContext } from "../shared/context/FavoritesContext";
import { Input } from "../shared/styled/Input";
import { Button } from "../shared/styled/Button";
import { FlexContainer } from "../shared/styled/FlexContainer";
import { Form } from "react-router-dom";
import { Nav } from "../shared/styled/Nav";

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
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Input
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
                <Button
                    onClick={(e) => {
                        if (searchTerm) {
                            setUrl(`&q=${searchTerm}&rating=${rating}`);
                        }
                    }}
                >
                    Search
                </Button>
            </div>
            {error && "Uh oh"}
            {searchResults.length === 0}
            {searchResults.length !== 0 &&
                searchResults.map((e) => (
                    <FlexContainer>
                        <GifDisplay
                            key={e.gif_id}
                            {...e}
                            isFavorite={favorites.some((fave) => fave.gif_id === e.gif_id)}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                        />
                    </FlexContainer>
                ))}
        </>
    );
};

export default SearchPage;
