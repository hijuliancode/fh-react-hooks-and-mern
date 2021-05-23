export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(elm => elm.id !== action.payload)
    case 'toggle':
      return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
    default:
      return state;
  }
};
