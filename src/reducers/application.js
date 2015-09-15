const initialState = {
  application: {
    settings: {
      language: 'ru',
    },
  },
};
export function application(state = initialState, action) {
  const newState = {...state};

  switch (action.type) {

  case 'GETLANGUAGE':
    return newState;

  case 'SETLANGUAGE':
    newState.application.settings.language = action.language;
    return newState;

  default:
    return newState;
  }
}
