export function getLanguage() {
  return {
    type: 'GETLANGUAGE',
  };
}

export function setLanguage(language) {
  return {
    type: 'SETLANGUAGE',
    language,
  };
}
