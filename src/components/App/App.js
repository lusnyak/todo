import React, {Component} from 'react'

import Search from '../Search';
import List from '../List';
import Btn from '../AddItem';

import './App.css';

export default class App extends Component {
    tododata = [
        {name: 'Todo data 1', important: true, done: false, id: 1}, 
        {name: 'Todo data 2', important: false, done: true, id: 2},
        {name: 'Todo data 3', important: true, done: false, id: 3},
        {name: 'Todo data 4', important: false, done: true, id: 4},
    ];

    state = {
        todoList: this.tododata
    }
     
    changeAction = (id) => {
        this.setState(({todoList}) => {
            const updatedList = todoList.map((obj)=>{
                if (obj.id === id){
                    obj.important = !obj.important
                }
                return obj
            })
            return {
                todoList: updatedList
            }
        })
    }

    render() {
        let {todoList} = this.state
        return (
            <div>
                <Search/>
                <List 
                    items={todoList} 
                    changeItemData={(id) => this.changeAction(id)} />
                <Btn/>
            </div>
        )
    }
};