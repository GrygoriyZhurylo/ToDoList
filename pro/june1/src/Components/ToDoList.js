import React from 'react';


function ToDolist(props) {

    return (
        <div className="App">
            {
                props.todos.map(el =>
                    <li key={el.id}>
                        {el.name}
                        {el.done ? '✅' : '❌'}
                        <button onClick={()=>props.onDeleteTask(el.id)}>Delete</button>
                        <button onClick={()=>props.onDoneTaskToggle(el.id)}>{el.done ? 'Undone' : 'Done'}</button>
                    </li>
                )
            }
        </div>
    );
}

export default ToDolist;
