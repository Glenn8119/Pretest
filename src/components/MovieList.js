import React from "react";
import { connect } from "react-redux";
import { setSelectedMovies } from "../actions";
import { movies } from "./movies";

const MovieList = ({setSelectedMovies}) => {

    const onMain = () =>{
        setSelectedMovies(movies);
    }

    const onHorror = () =>{
        const horrorMovies = movies.filter((movie)=>{
            if(movie.type==="horror"){
                return movie
            }
        })
        setSelectedMovies(horrorMovies);
    }

    const onHero = () =>{
        const heroMovies = movies.filter((movie)=>{
            if(movie.type==="hero"){
                return movie
            }
        })
        setSelectedMovies(heroMovies);
    }

    const onRomantic = () =>{
        const romanticMovies = movies.filter((movie)=>{
            if(movie.type==="romantic"){
                return movie
            }
        })
        setSelectedMovies(romanticMovies);
    }

    const onComedy = () =>{
        const comedyMovies = movies.filter((movie)=>{
            if(movie.type==="comedy"){
                return movie
            }
        })
        setSelectedMovies(comedyMovies);
    }

    return (
        <div className="list-container">
            <ul className="list">
                <li className="list__item"><button onClick={onMain}>主頁</button></li>
                <li className="list__item"><button onClick={onHorror}>驚悚電影</button></li>
                <li className="list__item"><button onClick={onHero}>英雄電影</button></li>
                <li className="list__item"><button onClick={onRomantic}>愛情電影</button></li>
                <li className="list__item"><button onClick={onComedy}>喜劇電影</button></li>
            </ul>
        </div>
    )
}


export default connect(null, { setSelectedMovies })(MovieList);