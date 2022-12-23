import React from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Row} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import Book from "./components/Book";


function App() {

    const marginTop = {
        marginTop: "20px"
    };

    return (
        <div className="App">
            <NavigationBar/>
            <Router>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path={"/"} exact component={Welcome}/>
                            <Route path={"/add"} exact component={BookList}/>
                            <Route path={"/list"} exact component={Book}/>
                        </Switch>
                    </Col>
                </Row>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
