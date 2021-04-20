import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSelectedMovies } from "../actions"
import { movies } from "./movies";

const MovieItems = ({ selectedMovies, setSelectedMovies }) => {

    useEffect(() => {
        setSelectedMovies(movies);
    }, [])

    const renderedMovies = selectedMovies.length === 0 ? null :
        selectedMovies.map((movie, index) => {
            return (
                <div key={index} className="movie__box">
                    <div className="movie__img">
                        <img src={movie.img} alt="movie" />
                    </div>
                    <p className="movie__name">{movie.name}</p>
                    <button className="movie__button">詳細介紹</button>
                </div>
            )
        })

    return (
        <div className="items-container">
            {renderedMovies}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedMovies: state.selectedMovies
    }
}

export default connect(mapStateToProps, { setSelectedMovies })(MovieItems);