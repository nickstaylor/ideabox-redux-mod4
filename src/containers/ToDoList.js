import React from 'react'
import { connect } from 'react-redux';
import ToDo from './ToDo'
import { showCompleted, showActive, showAll } from '../actions'


const ToDoList = ({todos, filtered, showActive, showAll, showCompleted}) => {
  let mapTodos;
  if(!filtered.length){
    mapTodos = todos
  } else {
    if (filtered === 'active'){
    // mapTodos = filteredTodos
    mapTodos = todos.filter(item => !item.completed);
    }
    if (filtered === 'completed'){
    mapTodos = todos.filter(item => item.completed);
    }
  }
  const displayToDos = mapTodos.map(todo=>{
    return (
      <ToDo
      {...todo}
      key={todo.id}
      />
    )
  })

  return (
    <div>
    <h2>List of To Do's</h2>
    <ul>
    {displayToDos}
    </ul>
    {
      todos.length ?
      <div>
      <button className="task-button" onClick={() => showCompleted()}>Completed Todos</button>
      <button className="task-button" onClick={() => showActive()}>Active Todos</button>
      <button className="task-button" onClick={() => showAll()}>All Your Todos</button>
    </div> : ''
    }
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  // filteredTodos: state.todos.filteredTodos,  
  filtered: state.todos.filtered
})

const mapDispatchToProps = dispatch => ({
  showActive: () => dispatch(showActive()),
  showCompleted: () => dispatch(showCompleted()),
  showAll: () => dispatch(showAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
