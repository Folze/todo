import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import s from "./Todo.module.css"

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div className={`${s.todo}
        ${todo.isCompleted ? s.completedTodo : ''}`}>
            <RiTodoFill className={s.todoIcon} />
            <div className={s.todoText}>{todo.text}</div>
            <FaCheck className={s.checkIcon} onClick={() => toggleTodo(todo.id
            )} />
            <RiDeleteBin2Line className={s.deleteIcon} onClick={() => deleteTodo(todo.id)} />
        </div>
    )
}

export default Todo