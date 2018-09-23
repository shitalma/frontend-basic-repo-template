const createReducer = (initialState, handlers) =>
  function reducer(state = initialState, action) {
    if (action.type in handlers) {
      return handlers[action.type](state, action);
    }
    return state;
  };

export default createReducer;
