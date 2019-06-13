import React, {Fragment, Component} from 'react';
import './ListItem.css';

export default class ListItems extends Component{

    setImportant = (id) => {
        //console.log("imprtant" + id);
        this.props.change(id)
    }

    removeItem = (id) => {
        // console.log("remove" + id);
        this.props.remove(id)
    }

    render() {
        const {items} = this.props;
        const itemList = items.map(({name, important, id, done}) => {
            let imStyle = {
                color: important ? 'tomato' : 'black',
                backgroundColor: done ? 'green' : 'transparent'
            }
            // className="btn btn-default" 
            return  (
                <Fragment key={id}>
                    <span style={imStyle}>{name}</span>
                    <button className="btn btn-danger"
                            onClick={() => this.removeItem(id)}>
                        <i className="fa fa-remove"/>
                    </button>
                    <button className="btn btn-info"
                            onClick={() => this.setImportant(id)}>
                        <i className="fa fa-star"/>
                    </button>
                 </Fragment>
            )
        })
        return (
            <div className="ListItems">
            {itemList}
        </div>
        )
    }
}
    