import React from 'react';
import './toDoListItem.css';

function ToDoListItem({index, value, onRemove}) {
    return (
        <li className="list-group-item">
            <span className="item-value">{value}</span>
            <button className="btnRemove btn btn-danger" onClick={() => onRemove(index)}>삭제</button>
        </li>
    );
}

export default ToDoListItem;