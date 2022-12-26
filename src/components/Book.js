import React, {Component} from 'react';
import {Button, Card, Col, Form} from "react-bootstrap";
import { faPlusSquare, faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '', author: '', isbnNumber: '',
            price: '', language: '', genre: ''
        };
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);

    }

    submitBook(event) {
        alert(
            ' Title: ' + this.state.title +
            ' Author: ' + this.state.author +
            ' Isbn: ' + this.state.isbnNumber +
            ' Price: ' + this.state.price +
            ' Language: ' + this.state.language +
            ' Genre: ' + this.state.genre);
        event.preventDefault();
    }

    bookChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon={faPlusSquare}/> Добавить книгу</Card.Header>
                <Form onSubmit={this.submitBook} id={"bookFormId"}>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"formGridTitle"}>
                                <Form.Label>Название</Form.Label>
                                <Form.Control required
                                              type="text" name={"title"}
                                              value={this.state.title}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Введите название книги"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId={"formGridAuthor"}>
                                <Form.Label>Автор</Form.Label>
                                <Form.Control required
                                              type="text" name={"author"}
                                              value={this.state.author}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Введите автора"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"formGridIsbm"}>
                                <Form.Label>ISBN номер</Form.Label>
                                <Form.Control required
                                              type="text" name={"isbnNumber"}
                                              value={this.state.isbnNumber}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Введите ISBN номер"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId={"formGridPrice"}>
                                <Form.Label>Цена</Form.Label>
                                <Form.Control required
                                              type="text" name={"price"}
                                              value={this.state.price}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Введите цену"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"formGridLanguage"}>
                                <Form.Label>Язык</Form.Label>
                                <Form.Control required
                                              type="text" name={"language"}
                                              value={this.state.language}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Введите язык"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId={"formGridGenre"}>
                                <Form.Label>Жанр</Form.Label>
                                <Form.Control required
                                              type="text" name={"genre"}
                                              value={this.state.genre}
                                              onChange={this.bookChange}
                                              className={"bg-dark text-white"}
                                              placeholder="Введите жанр"/>
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign": "right"}}>
                        <Button size={"sm"} variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave}/> Добавить
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }
}
