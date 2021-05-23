export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(elm => elm.id !== action.payload.id)
    default:
      return state;
  }
};
