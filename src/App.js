import React, {useCallback, useRef, useState} from 'react';
import ToDoTemplate from './component/ToDoTemplate';
import './App.css';

const App = () => {
    const [list, setList] = useState([]);
    const [todo, setTodo] = useState('');
    const toDoList = useRef(null);
    const nextId = useRef(0);

    const writeList = useCallback((e) => {
        setTodo(e.target.value);
    }, []);

    const plusList = useCallback((e) => {
        e.preventDefault();
        const item = {
            id : nextId.current, 
            todo : todo,
            checked : false
        };
        if (todo === "") {
            toDoList.current.focus();
        } else {
            setList(list.concat(item));
            setTodo('');
            toDoList.current.focus();
            nextId.current += 1;
        }
    }, [todo, list]);

    const onRemove = useCallback((id) => {
        const newList = list.filter(listItem=>listItem.id !== id);
        return setList(newList);
    }, [list]);

    

    return (
        <ToDoTemplate
            list={list}
            todo={todo}
            toDoList={toDoList}
            writeList={writeList}
            plusList={plusList}
            onRemove={onRemove}/>
    );
}

export default App;
