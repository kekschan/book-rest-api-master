import React, {Component} from 'react';
import axios from "axios";
import {Card, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faUsers} from "@fortawesome/free-solid-svg-icons";

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.findAllRandomUsers();
    }

    findAllRandomUsers() {
        axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
            .then(response => response.data)
            .then((date) => {
                this.setState({users: date})
            });
    }

    render() {
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={faUsers}/> Список пользователей
                    </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant={"dark"}>
                            <thead>
                            <tr>
                                <th>Имя </th>
                                <th>Email</th>
                                <th>Адрес</th>
                                <th>Дата создания</th>
                                <th>Баланс</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.length === 0 ?
                                <tr align={"center"}>
                                    <td colSpan={6}>Пользователи не найдены</td>
                                </tr> :
                                this.state.users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.first}{' '}{user.last}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.created}</td>
                                        <td>{user.balance}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}