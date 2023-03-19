import React from 'react';
import { StyleRoot } from 'radium';
import classNames from "classnames";
import css from './List.module.css'
import BtnExit from "./Button/BtnExit";
import BtnSave from "./Button/BtnSave";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    style_header = {
        '@media (max-width: 520px)':{
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    style_list = {
        margin: '15px',
        border: 'lightgray 2px solid',
        borderRadius: '5px'
    }
    style_btn_save = {
        '@media (orientation: portrait)': {
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    render() {
        return (
            <StyleRoot>
                <div className={classNames(css.List)}>
                    <div style={this.style_header}>
                        <h1 style={{marginLeft:'15px'}}>
                            {this.props.header}
                        </h1>
                        <BtnExit>Закрыть</BtnExit>
                    </div>

                    <div style={this.style_list}>{this.props.children}</div>

                    <div style={this.style_btn_save}>
                        <BtnSave>Сохранить</BtnSave>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default List;