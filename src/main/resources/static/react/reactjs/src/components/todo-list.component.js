import React, { Component } from "react";
import TodoDataService from "../services/todo.service";
import { Link } from "react-router-dom";

export default class TodoList extends Component {
    constructor(props) {
            super(props);
            this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
            this.retrieveTodos = this.retrieveTodos.bind(this);
            this.refreshList = this.refreshList.bind(this);
            this.setActiveTodo = this.setActiveTodo.bind(this);
            this.removeAllTodos = this.removeAllTodos.bind(this);
            this.searchTitle = this.searchTitle.bind(this);

            this.state = {
                todos: [],
                currentTodo: null,
                currentIndex: -1,
                searchTitle: ""
            };
    }

    componentDidMount() {
        this.retrieveTodos();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle;
        });
    }

    retrieveTodos() {
        TodoDataService.getAll()
            .then(response => {
                this.setState({
                    todos: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveTodos();
        this.setState({
            currentTodo: null,
            currentIndex: -1
        });
    }

    setActiveTodo(todos, index) {
        this.setState({
            currentTodo: todos,
            currentIndex: index
        });
    }

    removeAllTodos() {
        TodoDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchTitle() {
        TodoDataService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    todos: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const 
    }
}