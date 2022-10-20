import React from "react";

const GifDisplay = ({ gif_id, title, url }) => {
    return (
        <>
            <div key={gif_id}>
                <h3>{title}</h3>
                <img src={url} alt={title}></img>
                {/* {gif_id} */}
            </div>
            <button>Add Favorite</button>
        </>
    );
};

export default GifDisplay;
