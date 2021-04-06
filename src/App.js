import React, {useCallback, useRef, useState} from 'react';
import ToDoTemplate from './component/ToDoTemplate';
import './App.css';

const App = () => {
    const [list, setList] = useState([]);
    const [todo, setTodo] = useState('');
    const toDoList = useRef(null);

    const writeList = useCallback((e) => {
        setTodo(e.target.value);
    }, []);

    const plusList = useCallback((e) => {
        e.preventDefault();
        if (todo === "") {
            toDoList
                .current
                .focus();
        } else {
            setList(list.concat(todo));
            setTodo('');
            toDoList
                .current
                .focus();
        }
    }, [todo, list]);

    const onRemove = useCallback((id) => {
        const newList = list.slice();
        newList.splice(id, 1);
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
