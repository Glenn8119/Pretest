import React from "react";
import MovieList from "./MovieList";
import MovieItems from "./MovieItems";

const Main = () => {
    return (
        <div className="main-container">
            <MovieList />
            <MovieItems />
            <a href="#container" className="gotop"><span>Top</span></a>
        </div>
    )
}

export default Main;