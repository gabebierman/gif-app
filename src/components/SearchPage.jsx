import React, { useState } from "react";
import getGifs from "../shared/functions/getGifs";
import { useQuery } from "@tanstack/react-query";
import GifDisplay from "../shared/components/GifDisplay";
import { setSearch, removeFavorite } from "../shared/redux/store";
import { addFavorite } from "../shared/redux/store";
import { connect } from "react-redux";
import { Button } from "../shared/styled/Button";
import { FlexContainer } from "../shared/styled/FlexContainer";
import { Form } from "../shared/styled/Form";

const SearchPage = ({ searchResults, setSearch, removeFavorite, addFavorite, favorites }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [rating, setRating] = useState("g");
    const [url, setUrl] = useState(null);
    const { error } = useQuery(["getGifs", url], () => getGifs(url), {
        onSuccess: (data) => setSearch(data),
        enabled: !!url,
    });
    return (
        <div>
            <Form>
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
                <Button
                    variant="secondary"
                    onClick={(e) => {
                        if (searchTerm) {
                            setUrl(`&q=${searchTerm}&rating=${rating}`);
                        }
                    }}
                >
                    Search
                </Button>
            </Form>
            <FlexContainer>
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
            </FlexContainer>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeFavorite: (gif_id) => dispatch(removeFavorite(gif_id)),
    addFavorite: (gif) => dispatch(addFavorite(gif)),
    setSearch: (results) => dispatch(setSearch(results)),
});

const mapStateToProps = (state) => ({
    favorites: state.favorites,
    searchResults: state.search,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
