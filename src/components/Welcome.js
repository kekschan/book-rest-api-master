import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";

class Welcome extends React.Component{
    render() {
        return(
            <Jumbotron className={"bg-dark text-white"}>
                <h1>Привет reactjs</h1>
                <p>
                    Здесь будет находиться текст с главной страницы
                </p>
            </Jumbotron>
        )
    }
}

export default Welcome