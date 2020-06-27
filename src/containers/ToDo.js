import React from 'react';
import { connect } from 'react-redux';
import { completeToDo, deleteToDo } from '../actions'


const ToDo = ({ id, todo, completed, completeToDo, deleteToDo }) => {
  return (
    <li className={completed ? "completed-task" : null}>{todo}
    <button className="task-button" onClick={() => completeToDo(id)}>Completed ?</button>
    <button className="task-button" onClick={() => deleteToDo(id)}>Delete</button>
    </li>
  )

}

const mapDispatchToProps = dispatch => ({
  completeToDo: id => dispatch( completeToDo(id)),
  deleteToDo: id => dispatch(deleteToDo(id))
})
export default connect(null, mapDispatchToProps)(ToDo);
