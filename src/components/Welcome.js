import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";


export default class Welcome extends Component {
    render() {
        return (
            <Jumbotron className={"bg-dark text-white"}>
                <h1>Привет reactjs</h1>
                <blockquote className={"blockquote mb-0"}>
                    <p>
                        Здесь будет находиться текст с главной страницы
                    </p>
                    <footer className={"blockquote-footer"}>
                        Борщёв Денис
                    </footer>
                </blockquote>
            </Jumbotron>
        )
    }
}
