import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddTodo from './components/add-todo.component';
import Todo from './components/todo.component';
import TodoList from './components/todo-list.component';

class App extends Component {
    render() {
        return {
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a href="/todos" className="navbar-brand">
                            RAKUTEN
                        </a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="{/todos}" className="nav-link">
                                    Todos
                                </link>
                            </li>
                            <li className="nav-item">
                                <Link to="{/add}" className="nav-link">
                                    Add
                                </link>
                            </li>
                        </div>
                    </nav>

                    <div>
                        <Switch>
                            <Route exact path={["/", "todos" ]} component = {TodoList} />
                            <Route exact path="/add" component = {AddTodo} />
                            <Route path="/todos/:id" component = {Todo} />
                        </Switch>
                    </div>
                </div>
            </Router>
        }
    }
}