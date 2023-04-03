import React from 'react';
import classNames from "classnames";
import css from "./CheckBox.module.css";

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label : this.props.children,
            checked : false,
            style: {
                border: 'lightgray 2px solid',
            }
        }
    }
    MouseEnter = () => {
        //console.log('mouse enter checkbox save')
        this.setState({
            style: {
                border: 'red 2px solid',
            }
        })
    }
    MouseLeave = () => {
        //console.log('mouse leave checkbox save')
        this.setState({
            style: {
                border: 'lightgray 2px solid',
            }
        })
    }
    Change = () => {
        this.setState(
            this.state.checked = !this.state.checked
        )
    }

    render() {
        return (
            <div className={classNames(css.CheckBox)} id={this.props.groupName}>
                <input className={!this.state.checked ? css.CheckBoxInput : css.CheckBoxInputActive}
                       type={'checkbox'}
                       name={this.props.groupName}

                       onMouseEnter={this.MouseEnter}
                       onMouseLeave={this.MouseLeave}
                       onFocus={this.MouseEnter}
                       onBlur={this.MouseLeave}
                       onFocusCapture={this.MouseEnter}
                       //onChange={this.Change}

                       value={this.state.label}

                ></input>
                <label className={classNames(css.CheckBoxLabel)}>{this.state.label}</label>
            </div>
        );
    }
}

export default CheckBox;