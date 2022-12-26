import React, {Component} from 'react';
import {Card, Table} from "react-bootstrap";
import {faList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8081/rest/books")
            .then(response => response.data)
            .then((date) =>{
                this.setState({books: date})
                });
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    <FontAwesomeIcon icon={faList}/> Список книг
                </Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Автор</th>
                            <th>ISBN номер</th>
                            <th>Цена</th>
                            <th>Язык</th>
                            <th>Жанр</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.books.length === 0 ?
                            <tr className={"text-center"}>
                                <td colSpan={6}>Книги кончились</td>
                            </tr>
                            :
                            this.state.books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.isbnNumber}</td>
                                    <td>{book.price}</td>
                                    <td>{book.language}</td>
                                    <td>

                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}


