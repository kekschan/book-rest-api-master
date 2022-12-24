import React from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Row} from "react-bootstrap";
import {Route, BrowserRouter, Switch} from 'react-router-dom'

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
            <BrowserRouter>
                <NavigationBar/>
                <Row>
                    <Switch>
                        <Col lg={12} style={marginTop}>
                            <Route path={"/"} exact component={Welcome}/>
                            <Route path={"/add"} exact component={Book}/>
                            <Route path={"/list"} exact component={BookList}/>
                        </Col>
                    </Switch>
                </Row>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
