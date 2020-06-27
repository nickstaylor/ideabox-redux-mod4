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
export const showActive = () => ({
  type: 'ACTIVE_TODOS',
})
export const showCompleted = () => ({
  type: 'COMPLETED_TODOS',
})
export const showAll = () => ({
  type: 'SHOW_ALL',
})
