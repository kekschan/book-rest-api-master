import React, {Component} from 'react';
import {Button, ButtonGroup, Card, Image, Table} from "react-bootstrap";
import {faEdit, faList, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          books : []
        };
    }

    findAllBooks(){
        axios.get("http://localhost:8081/rest/books")
            .then(response => response.data)
            .then((date) =>{
                this.setState({books: date})
            });
    }

    componentDidMount() {
       this.findAllBooks();
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
                            <th>Actions</th>
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
                                    <td>
                                        <Image src={book.coverPhotoUrl}
                                               roundedCircle
                                               width={25}
                                               height={25}/> {book.title}
                                    </td>
                                    <td>{book.author}</td>
                                    <td>{book.isbnNumber}</td>
                                    <td>{book.price}</td>
                                    <td>{book.language}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size={"sm"} variant={"outline-primary"}>
                                                <FontAwesomeIcon icon={faEdit}/></Button>{''}
                                            <Button size={"sm"} variant={"outline-danger"}>
                                                <FontAwesomeIcon icon={faTrash}/></Button>{''}
                                        </ButtonGroup>
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


