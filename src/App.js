import React from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";


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
                        <Welcome/>
                         <Footer/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
