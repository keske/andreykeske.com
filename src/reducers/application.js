const initialState = {
  application: {
    language: 'ru',
  },
};

export function application(state = initialState, action) {
  switch (action.type) {

  case 'SETLANGUAGE':
    return {
      ...state,
      application: {
        language: action.language,
      },
    };


  default:
    return state;
  }
}
