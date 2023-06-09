import React from 'react';
import css from "./TextArea.module.css";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import classNames from "classnames";

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                border: 'lightgray 2px solid',
                overflow: 'visible',
            }
        }
    }
    onFocus = () => {
        //console.log('focus on textarea')
        this.setState({
            style: {
                border: 'gray 2px solid',
                overflow: 'visible',
            }
        })
    }
    onBlur = () => {
        //console.log('focus on textarea')
        this.setState({
            style: {
                border: 'lightgray 2px solid',
                overflow: 'visible',
            }
        })
    }
    render() {
        return (
            <TextareaAutosize className={classNames(css.TextArea)}
                              placeholder={this.props.placeholder}
                              onFocus={this.onFocus}
                              onBlur={this.onBlur}
                              style={this.state.style}
                              name={this.props.Name}
            ></TextareaAutosize>
        );
    }
}

export default TextArea;