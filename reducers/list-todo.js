export default function ToDoList(state = ["Sample", "Todo", "List"], action) {
  switch(action.type) {
    case "AddTodo":
      return state.concat([action.payload])
    case "ClearTodo":
      return [];
    case "DeleteTodo":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
      
  }
  return state;
}

