import React from 'react';
import ToDoList from '../ToDoList';
import ToDoInsert from '../ToDoInsert';
import './toDoTemplate.css';

function ToDoTemplate({list, todo, toDoList, writeList, plusList, onRemove}) {
    return (
        <div className="toDoList-Template">
            <h3 className="toDoList-Introduce">3학년 1반 10번 김진호의 ToDoList 만들기</h3>
            <ToDoInsert todo={todo} writeList={writeList} plusList={plusList} toDoList={toDoList}/>
            <ToDoList list={list} onRemove={onRemove} />
        </div>
    );
}

export default ToDoTemplate;