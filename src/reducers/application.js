const initialState = {
  application: {
    language: 'en',
    mode: 'card',
  },
};

export function application(state = initialState, action) {
  switch (action.type) {

    case 'SETLANGUAGE':
      return {
        ...state,
        application: {
          ...state.application,
          language: action.language,
        },
      };

    case 'SETTRAVELVIEWMODE':
      return {
        ...state,
        application: {
          ...state.application,
          mode: action.mode,
        },
      };

    default:
      return state;
  }
}
