import React from 'react';
import './toDoList.css';
import ToDoListItem from '../ToDoListItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ToDoList = ({list, onRemove}) => {
    const transitionOptions={
        transitionName:"fade",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
    };

    const renderList = list.map((value) => {
        return (
            <ToDoListItem key={value.id} value={value.todo} index={value.id} onRemove={onRemove}/>
        );
    });
   
    return (
        <div>
            {list.length === 0 &&
                <div>널이다아아 이말이야</div>
            }
            <ul className="list-group">
                <ReactCSSTransitionGroup {...transitionOptions}>
                    {renderList}
                </ReactCSSTransitionGroup>
            </ul>
        </div>
    );

}

export default ToDoList;