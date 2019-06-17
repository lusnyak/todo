import React, {Component} from 'react';
import './AddItem.css';

export default class AddItem extends Component {

    state = {
        text: ''
    }

    inputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    formOnSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.text)
    }

    render() {
        return (
            <form onSubmit={this.formOnSubmit}>
                <div className="form-group w-25 d-inline-block ml-2 mr-2">
                    <input type="text" 
                        className="form-control"
                        onChange={this.inputChange}/>
                </div>
                <button 
                    className="btn btn-danger">
                        Add list
                </button>
            </form>
            
        )
    }
}
