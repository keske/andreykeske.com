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

export function setTravelViewMode(mode) {
  return {
    type: 'SETTRAVELVIEWMODE',
    mode,
  };
}
