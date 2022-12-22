import React from "react";
import {Nav, Navbar} from "react-bootstrap";

class NavigationBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
               <Navbar.Brand href={"/"}>
               <img
                   src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
                   width="25"
                   height="25"
                   alt="brand"
               />Книжный магазин
               </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Add Book</Nav.Link>
                    <Nav.Link href="#">List Books</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}


export default NavigationBar;