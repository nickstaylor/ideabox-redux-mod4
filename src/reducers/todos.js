let todoState = {
  todos: [],
  filteredTodos: [],
  filtered: false
}

export const todos = (state = todoState, action) => {
  switch (action.type) {

    case 'ADD_TODO':
    let newTodos = [...state.todos, {id: Date.now(), todo: action.todo, completed: false}]
    return {todos: newTodos,
            filteredTodos: [],
            filtered: false
          }

    case 'SHOW_ALL':
    console.log('show all');
    return {todos: state.todos,
            filteredTodos: [],
            filtered: false
          }

    case 'COMPLETE_TODO':
    let newtodos1 = state.todos.map(item=>{
      (item.id === action.id) && (item.completed = !item.completed)
      return item
    })
    return {todos: newtodos1,
            filteredTodos: state.filtered,
            filtered: false
          }

    case 'DELETE_TODO':
    let newTodos2 =  state.todos.filter(item => action.id !== item.id);
    return {todos: newTodos2,
            filteredTodos: state.filtered,
            filtered: false
          }

    case 'ACTIVE_TODOS':
    let filteredActive =  state.todos.filter(item => !item.completed);
    return {todos: state.todos,
            filteredTodos: filteredActive,
            filtered: true
          }

    case 'COMPLETED_TODOS':

    let filteredComplete = state.todos.filter(item => item.completed);
    return {todos: state.todos,
            filteredTodos: filteredComplete,
            filtered: true
          }

    default:
    return state
  }
}
