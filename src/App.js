import React from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Container, Row} from "react-bootstrap";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";


function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <Container>
                <Row>
                   <Jumbotron>

                   </Jumbotron>
                </Row>
            </Container>
        </div>
    );
}

export default App;
