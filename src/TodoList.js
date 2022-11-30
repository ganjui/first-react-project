import React from "react";
import './index.css';
export default TodoList;

function TodoList() { 
    return (
        <ul>
            {
                this.props.items.map(item => (
                    <li key={item.id}>
                        { item.text}
                </li>
            ))
            }
        </ul>
    )
}