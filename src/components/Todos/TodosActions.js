import React from 'react'
import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import s from './TodosActions.module.css'

const TodosActions = ({ resetTodos, deleteCompletedTodos, completedTodosExist }) => {
    return (
        <div className={s.todosActionsContainer}>

            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRefreshLine />
            </Button>

            <Button title="Clear completed todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions