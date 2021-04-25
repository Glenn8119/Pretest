import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { setSelectedMovies } from "../actions"
import { movies } from "./movies"

const SearchBar = ({ setSelectedMovies }) => {

    const [inputValue, setInputValue] = useState("")
    const [debouncedInputValue, setDebouncedInputValue] = useState("");


    useEffect(() => {
        let timeoutID = setTimeout(() => {
            setDebouncedInputValue(inputValue)
        }, 500)

        return () => {
            clearTimeout(timeoutID)
        }
    }, [inputValue])

    useEffect(()=>{
        const matchMovies = movies.filter((movie) => {
            if (movie.name.includes(debouncedInputValue)) {
                return movie;
            }
        })
        setSelectedMovies(matchMovies);
    }, [debouncedInputValue])


    return (
        <Fragment>
            <input
                value={inputValue}
                placeholder="請輸入電影名稱"
                className="search-bar"
                onChange={(e)=>setInputValue(e.target.value)}
            />
        </Fragment>
    )
}

export default connect( null , { setSelectedMovies })(SearchBar);