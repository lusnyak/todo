import React, {Component} from 'react';

export default class Search extends Component {

    changeValue = ({target}) => {
        this.props.searchToDoData(target.value)
    }

    render(){
        return (
            <>
                <div className="form-group w-25 d-inline-block ml-2 mr-2 mt-2">
                    <input className="form-control" 
                        type="search" 
                        placeholder='Search...'
                        onChange={this.changeValue} />
                </div>
                <button className="btn btn-danger">Important</button>
                <button className="btn btn-info">Done</button>
            </>
        )
    }
};


