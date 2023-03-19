import './styles/App.css';
import List from "./components/UI/List";
import ListItem from "./components/UI/ListItem";
import TextArea from "./components/UI/TextArea/TextArea";

function App() {
  return (
    <div className="App">
        <List header={'Психологический тест студентов'}>
            <ListItem title={'1. Каким вы видите образ обычного студента'}>
                <TextArea placeholder={'Введите текст'}>

                </TextArea>
            </ListItem>
        </List>
    </div>
  );
}

export default App;
