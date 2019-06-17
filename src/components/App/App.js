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
        todoList: this.tododata,
        list: this.tododata 
    }
     
    changeAction = (id) => {
        this.setState(({todoList}) => {
            const updatedList = todoList.map((obj)=>{
                if (obj.id === id) {
                    obj.important = !obj.important
                }
                return obj
            })
            return {
                todoList: updatedList,
                list: updatedList
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({todoList}) => {
            const updatedList = todoList.filter((obj)=>{
                return obj.id !== id
            })

            return {
                todoList: updatedList,
                list: updatedList
            }
        })
    }

    doneItem = (id) => {
        this.setState(({todoList}) => {
            const updatedList = todoList.map((obj)=>{
                if (obj.id === id){
                    obj.done = !obj.done
                }
                return obj
            })
            return {
                todoList: updatedList,
                list: updatedList
            }
        })
    }

    searchValue = (text) => {
        if (text === '') {
            this.setState(({list})=>{
                return {
                    todoList: list,
                }
            })
        }

        this.setState(({todoList}) => {
            const updatedList = todoList.filter((obj)=>{
                return obj.name.includes(text)
            })
            // for (const obj of todoList) {
            //     if (obj.name.includes(text)){

            //     }
            // }
            return {
                todoList: updatedList,
            }
        })
    }

    filter = (type) => {        
        const {list} = this.state
        let updatedList = list
        if (type === "done"){
            updatedList = list.filter((obj)=> {
                return obj.done === true
            })
        } else {
            updatedList = list.filter((obj)=> {
                return obj.important === true
            })
        }        
        this.setState(()=>{
            return {
                todoList: updatedList,
            }
        })
    }

    addItemData = (text) => {
        this.setState(({todoList})=>{
            const updatedList = todoList;
            const newId = updatedList.length ? updatedList[updatedList.length - 1].id + 1 : 1
            const item = {name: text, important: false, done: false, id: newId}
            updatedList.push(item)
            return {
                todoList: updatedList
            }
        })
    }

    render() {
        const {todoList} = this.state
        return (
            <div>
                <Search 
                    searchToDoData={(text)=>this.searchValue(text)}
                    filterToDoData={(type)=>this.filter(type)}/>
                <List 
                    items={todoList} 
                    changeItemData={(id) => this.changeAction(id)} 
                    removeItemData={(id) => this.deleteItem(id)}
                    doneItemData={(id)=>this.doneItem(id)}/>
                <Btn addItem={this.addItemData}/>
            </div>
        )
    }
};