import React from "react";
import {Nav, Navbar} from "react-bootstrap";


class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav.Link href={"/"} className={"navbar-brand"}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
                        width="25"
                        height="25"
                        alt="brand"
                    />Книжный магазин
                </Nav.Link>
                <Nav className="mr-auto">
                    <Nav.Link href={"/add"} className="nav-link">Добавить книгу</Nav.Link>
                    <Nav.Link href={"/list"} className="nav-link">Список книг</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}


export default NavigationBar;