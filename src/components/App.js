import React from "react";
import "../css/style.css";

import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import Main from "./Main";
import CountDown from "./CountDown";

const App = () => {
    return (
        <div className="container" id="container">
            <SearchBar />
            <Carousel />
            <CountDown />
            <Main />
        </div>
    )
}

export default App;