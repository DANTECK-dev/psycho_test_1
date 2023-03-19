import React from 'react';
import css from "./ListItem.module.css";
import classNames from "classnames";

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={classNames(css.ListItem)}>
                <h3 style={{marginLeft: '10px'}}>{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default ListItem;