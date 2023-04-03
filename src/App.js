import './styles/App.css';
import List from "./components/UI/List";
import ListItem from "./components/UI/ListItem";
import TextArea from "./components/UI/TextArea/TextArea";
import RadioButton from "./components/UI/RadioButton/RadioButton";
import CheckBox from "./components/UI/CheckBox/CheckBox";
import React from "react";
import {StyleRoot} from "radium";
import classNames from "classnames";
import css from "./components/UI/List.module.css";
import BtnExit from "./components/UI/Button/BtnExit";
import BtnSave from "./components/UI/Button/BtnSave";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.saveClick = this.saveClick.bind(this);
        this.state = {
            names: this.getRandomNames(10, 10)
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomName(length) {
        let abc = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
        let result = ''
        for(let i = 0; i < length; i++)
            result += abc[this.getRandomInt(0, abc.length)]
        return result
    }
    getRandomNames(count, length) {
        let result = []
        for(let i = 0; i < count; i++)
            result.push(this.getRandomName(length))
        console.log(result)
        return result
    }

    saveClick() {
        //alert('Нажатие на кнопку')
        for(let i = 0; i < document.querySelectorAll('textarea').length; i++)
            if(document.querySelectorAll('textarea').item(i).value !== 'x')
                console.log(document.querySelectorAll('textarea').item(i).value)

        for(let i = 0; i < this.state.names.length; i++)
            for(let j = 0; j < document.querySelectorAll('input[name=' + this.state.names[i] + ']:checked').length; j++)
                console.log(document.querySelectorAll('input[name=' + this.state.names[i] + ']:checked').item(j).value)
        //alert(document.querySelectorAll('input[name=ca4mtv1Ft8refreshJxF]:checked').item(0))
    }

    render() {
        return (
            <div className="App">
                <List header={'Психологический тест студентов'} saveClick={this.saveClick}>
                    <ListItem title={'1. Каким вы видите образ обычного студента'}>
                        <TextArea placeholder={'Введите текст'} Name={this.state.names[0]}>

                        </TextArea>
                    </ListItem>
                    <ListItem title={'2. Находясь в стенах университета, испытываете ли Вы напряжение, чувство тревоги и с чем это у вас связано?'}>
                        <RadioButton groupName={this.state.names[1]}>Чувствую себя уверенно</RadioButton>
                        <RadioButton groupName={this.state.names[1]}>Боюсь выступать публично</RadioButton>
                        <RadioButton groupName={this.state.names[1]}>Испытываю напряжение, общаясь с преподавателем</RadioButton>
                        <RadioButton groupName={this.state.names[1]}>Боюсь, что моих знаний недостаточно, другие знают и могут больше</RadioButton>
                        <RadioButton groupName={this.state.names[1]}>Испытываю тревогу не могу объяснить причину её появления</RadioButton>
                    </ListItem>
                    <ListItem title={'16. Чем определяется ваше желание учиться'}>
                        <CheckBox groupName={this.state.names[2]}>Учусь, потому что моя будущая специальность и процесс обучения мне нравятся</CheckBox>
                        <CheckBox groupName={this.state.names[2]}>Учусь, потому что не хочу служить в армии</CheckBox>
                        <CheckBox groupName={this.state.names[2]}>Учусь, потому что в основном, это желание родителей, и я не хочу их подвести</CheckBox>
                        <CheckBox groupName={this.state.names[2]}>Учусь, потому что надо</CheckBox>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default App;
