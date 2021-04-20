import {combineReducers} from "redux";
import setSelectedMovieReducer from "./setSelectedMovieReducer";

export default combineReducers({
    selectedMovies : setSelectedMovieReducer
})