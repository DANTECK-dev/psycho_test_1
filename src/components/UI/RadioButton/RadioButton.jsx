import React from 'react';
import classNames from "classnames";
import css from "./RadioButton.module.css";

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label : this.props.children,
            state : false
        }
    }
    MouseEnter = () => {
        //console.log('mouse enter radio button exit')
        this.setState({
            style: {
                backgroundSize: '100% 100%'
            }
        })
    }

    MouseLeave = () => {
        //console.log('mouse leave radio button exit')
        this.setState({
            style: {
                backgroundSize: '100% 0'
            }
        })
    }
    render() {
        return (
            <div className={classNames(css.RadioButton)}>
                <input className={classNames(css.RadioButtonInput)}
                       type={'radio'}
                       name={this.props.groupName}

                       onMouseEnter={this.MouseEnter}
                       onMouseLeave={this.MouseLeave}
                       onFocus={this.MouseEnter}
                       onBlur={this.MouseLeave}

                       value={this.state.label}
                ></input>
                <label className={classNames(css.RadioButtonLabel)}>{this.state.label}</label>
            </div>
        );
    }
}

export default RadioButton;