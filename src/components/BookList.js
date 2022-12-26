import React, {Component} from 'react';
import {Card, Table} from "react-bootstrap";

export default class BookList extends Component{
    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Список книг</Card.Header>
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
                        <tr className={"text-center"}>
                            <td colSpan={6}>Книги кончились</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}


