export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})
export const completeToDo = id => ({
  type: 'COMPLETE_TODO',
  id
})
export const deleteToDo = id => ({
  type: 'DELETE_TODO',
  id
})
export const showActive = todos => ({
  type: 'ACTIVE_TODOS',
  todos
})
export const showCompleted = todos => ({
  type: 'COMPLETED_TODOS',
  todos
})
export const showAll = todos => ({
  type: 'SHOW_ALL',
  todos
})
