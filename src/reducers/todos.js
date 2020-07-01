let todoState = {
  todos: [],
  // filteredTodos: [],
  filtered: ''
}

export const todos = (state = todoState, action) => {
  switch (action.type) {

    case 'ADD_TODO':
    let newTodos = [...state.todos, {id: Date.now(), todo: action.todo, completed: false}]
    return {todos: newTodos,
            // filteredTodos: [],
            filtered: ''
          }

    case 'SHOW_ALL':
    console.log('show all');
    return {todos: state.todos,
            // filteredTodos: [],
            filtered: ''
          }

    case 'COMPLETE_TODO':
    let newtodos1 = state.todos.map(item=>{
      (item.id === action.id) && (item.completed = !item.completed)
      return item
    })
    return {todos: newtodos1,
            // filteredTodos: state.filteredTodos,
            filtered: state.filtered
          }

    case 'DELETE_TODO':
    let newTodos2 =  state.todos.filter(item => action.id !== item.id);
    return {todos: newTodos2,
            // filteredTodos: state.filteredTodos,
            filtered: state.filtered
          }

    case 'ACTIVE_TODOS':
    // let filteredActive =  state.todos.filter(item => !item.completed);
    return {todos: state.todos,
            // filteredTodos: filteredActive,
            filtered: 'active'
          }

    case 'COMPLETED_TODOS':

    // let filteredComplete = state.todos.filter(item => item.completed);
    return {todos: state.todos,
            // filteredTodos: filteredComplete,
            filtered: 'completed'
          }

    default:
    return state
  }
}
