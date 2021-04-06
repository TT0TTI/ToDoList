import React from 'react';
import './toDoList.css';
import ToDoListItem from '../ToDoListItem';

const ToDoList = ({list, onRemove}) => {

    return (
        <div>
            <ul className="list-group">
                {
                    list.map((value, index) => {
                        return <ToDoListItem key={index} value={value} index={index} onRemove={onRemove}/>
                    })
                }
            </ul>
        </div>
    );

}

export default ToDoList;