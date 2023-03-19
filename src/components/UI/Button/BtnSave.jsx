import React from 'react';
import classNames from "classnames";
import default_classes from './Btn.module.css'
import save_classes from './BtnSave.module.css'

class BtnSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundSize: '100% 0'
            }
        }
    }
    MouseEnter = () =>{
        console.log('mouse enter button save')
        this.setState({
            style: {
                backgroundSize: '100% 100%'
            }
        })
    }

    MouseLeave = () =>{
        console.log('mouse leave button save')
        this.setState({
            style: {
                backgroundSize: '100% 0'
            }
        })
    }

    render() {
        return (
            <button
                onMouseEnter={this.MouseEnter}
                onMouseLeave={this.MouseLeave}
                onFocus={this.MouseEnter}
                onBlur={this.MouseLeave}

                className={classNames(
                    default_classes.Btn,
                    save_classes.BtnSave,
                )}

                style={this.state.style}
            >

                {this.props.children}

            </button>
        );
    }
}

export default BtnSave;