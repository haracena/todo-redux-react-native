const initialState = [
  { id: 1, desc: 'todo 1', completed: true },
  { id: 2, desc: 'todo 2', completed: false },
];

const COMPLETE = 'COMPLETE';
const SUBMIT = 'SUBMIT';
const START_SUBMIT = 'START_SUBMIT';
const ERROR_SUBMIT = 'ERROR_SUBMIT';

export const complete = (id) => ({
  type: COMPLETE,
  payload: id,
});

export const submit = (todo) => ({
  type: SUBMIT,
  payload: todo,
});

export const startSubmit = () => ({
  type: START_SUBMIT,
});

export const errorSubmit = (error) => ({
  type: ERROR_SUBMIT,
  error,
});

export const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case COMPLETE:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );

    case SUBMIT:
      return [...state, payload];

    default:
      return state;
  }
};

export const saveTodo = (text) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    dispatch(startSubmit());
    try {
      const todo = {
        desc: text,
        completed: false,
      };
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          body: JSON.stringify(todo),
        }
      );
      const id = await response.json();
      console.log(id);
      dispatch(submit({ ...todo, ...id }));
    } catch (e) {
      dispatch(errorSubmit(e));
    }
  };
};
