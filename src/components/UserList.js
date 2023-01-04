import React, {Component} from 'react';
import axios from "axios";
import {Button, Card, FormControl, InputGroup, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFastBackward,
    faFastForward,
    faStepBackward,
    faStepForward,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage: 1,
            usersPerPage: 5
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

    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.users.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };

    lastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.users.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.users.length / this.state.usersPerPage)
            });
        }
    };

    render() {
        const {users, currentPage, usersPerPage} = this.state;
        const lastIndex = currentPage * usersPerPage;
        const firstIndex = lastIndex - usersPerPage;
        const currentUsers = users.slice(firstIndex, lastIndex);
        const totalPages = users.length / usersPerPage;

        const pageNumCss = {
            width: "45px",
            border: "1px solid #17A2BB",
            color: "#17A2BB",
            textAlign: "center",
            fontWeight: "bold"
        };

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
                                <th>Имя</th>
                                <th>Email</th>
                                <th>Адрес</th>
                                <th>Дата создания</th>
                                <th>Баланс</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.length === 0 ?
                                <tr align={"center"}>
                                    <td colSpan={6}>Пользователи не найдены</td>
                                </tr> :
                                currentUsers.map((user, index) => (
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
                    <Card.Footer>
                        <div style={{"float": "left"}}>
                            Страница {currentPage} из {totalPages}
                        </div>
                        <div style={{"float": "right"}}>
                            <InputGroup size={"sm"}>
                                <InputGroup.Prepend>
                                    <Button type={"button"} variant={"outline-info"}
                                            disabled={currentPage === 1 ? true : false}
                                            onClick={this.firstPage}>
                                        <FontAwesomeIcon icon={faFastBackward}/> Первая
                                    </Button>
                                    <Button type={"button"} variant={"outline-info"}
                                            disabled={currentPage === 1 ? true : false}
                                            onClick={this.prevPage}>
                                        <FontAwesomeIcon icon={faStepBackward}/> Прошлая
                                    </Button>
                                </InputGroup.Prepend>
                                <FormControl style={pageNumCss} className={"bg-dark"} name={"currentPage"}
                                             value={currentPage}
                                             onChange={this.changePage}/>
                                <InputGroup.Append>
                                    <Button type={"button"} variant={"outline-info"}
                                            disabled={currentPage === totalPages ? true : false}
                                            onClick={this.nextPage}>
                                        Следующая <FontAwesomeIcon icon={faStepForward}/>
                                    </Button>
                                    <Button type={"button"} variant={"outline-info"}
                                            disabled={currentPage === totalPages ? true : false}
                                            onClick={this.lastPage}>
                                        Последняя <FontAwesomeIcon icon={faFastForward}/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}