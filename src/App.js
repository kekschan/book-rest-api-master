import React from "react";

import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import Book from "./components/Book";
import UserList from "./components/UserList";


function App() {
    const marginTop = {
        marginTop: "20px"
    };

    return (
        <Router>
            <NavigationBar/>
            <Container>
                <Row>
                    <Switch>
                        <Col lg={12} style={marginTop}>
                            <Route path={"/"} exact component={Welcome}/>
                            <Route path={"/add"} exact component={Book}/>
                            <Route path={"/edit/:id"} exact component={Book}/>
                            <Route path={"/list"} exact component={BookList}/>
                            <Route path={"/users"} exact component={UserList}/>
                        </Col>
                    </Switch>
                </Row>
                <Footer/>
            </Container>
        </Router>
    );
}

export default App;
