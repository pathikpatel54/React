export function AddTodo(todo) {
  return {
    type: "AddTodo",
    payload: todo
  }
}
export function ClearTodo() {
  return {
    type: "ClearTodo",
    payload: ""
  }
}
export function DeleteTodo(index) {
  return {
    type: "DeleteTodo",
    payload: index
  }
}
