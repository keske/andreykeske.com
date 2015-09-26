const initialState = {
  application: {
    language: 'en',
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
