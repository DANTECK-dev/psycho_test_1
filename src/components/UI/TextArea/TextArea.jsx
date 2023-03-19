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
            }
        }
    }
    onFocus = () => {
        console.log('focus on textarea')
        this.setState({
            style: {
                border: 'gray 2px solid',
            }
        })
    }
    onBlur = () => {
        console.log('focus on textarea')
        this.setState({
            style: {
                border: 'lightgray 2px solid',
            }
        })
    }
    render() {
        return (
            <TextareaAutosize className={classNames(css.TextArea)}
                      placeholder={this.props.placeholder}
                              onFocus={this.onFocus}
                              onBlur={this.onBlur}
                              style={this.state.style}>
            </TextareaAutosize>
        );
    }
}

export default TextArea;