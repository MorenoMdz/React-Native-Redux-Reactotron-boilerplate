const INITIAL_STATE = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
  { id: 3, text: 'Todo 3', completed: false },
];

export default function todosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text, completed: false }];
    case 'MARK_AS_COMPLETED':
      return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
}
