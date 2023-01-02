import React from 'react'
import Todo from './Todo'
import s from "./TodoList.module.css"

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div className={s.todoListContainer}>
            {!todos.length && <h2>Список задач пуст</h2>}
            {todos.map((todo) => (
                <Todo key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    )
}

export default TodoList

