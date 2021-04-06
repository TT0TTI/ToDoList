import React from 'react';
import {GoPlus} from 'react-icons/go';
import './toDoInsert.css';

function ToDoInsert({plusList, writeList, todo, toDoList}) {
    return (
        <form onSubmit={plusList}>
            <div className="input-group">
                <input
                    className="form-control form-control-lg"
                    placeholder="오늘 할 일"
                    type="text"
                    onChange={writeList}
                    value={todo}
                    ref={toDoList}/>
                <div className="input-group-btn">
                    <button type="submit" className="btnAdd btn"><GoPlus/></button>
                </div>
            </div>
        </form>
    );
}

export default ToDoInsert;