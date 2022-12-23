import React from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";


function App() {

    const marginTop = {
        marginTop: "20px"
    };

    return (
        <div className="App">
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Jumbotron className={"bg-dark text-white"}>
                            <h1>Привет reactjs</h1>
                            <p>
                                Здесь будет находиться текст с главной страницы
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
