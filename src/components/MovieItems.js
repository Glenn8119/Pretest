import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { setSelectedMovies } from "../actions"
import { movies } from "./movies";
import close from "../img/close.png"

const MovieItems = ({ selectedMovies, setSelectedMovies }) => {

    useEffect(() => {
        setSelectedMovies(movies);
    }, [])

    const renderedMovies = selectedMovies.length === 0 ? null :
        selectedMovies.map((movie, index) => {
            return (
                <Fragment>
                    <div key={index} className="movie__box" id={`movie${index}`}>
                        <div className="movie__img">
                            <img src={movie.img} alt="movie" />
                        </div>
                        <p className="movie__name">{movie.name}</p>
                        <a href={`#popup${index}`} className="movie__button">詳細介紹</a>
                    </div>
                    <div className="popup" id={`popup${index}`}>
                        <div className="popup__content">
                            <a className="close" href={`#movie${index}`}>
                                <img src={close}></img>
                            </a>
                            <div className="popup__poster">
                                <img src={movie.img} alt="introduction picture"></img>
                            </div>
                            <div className="popup__detail">
                                <span>大綱介紹</span>
                                <p>{movie.detail}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>

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