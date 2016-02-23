export const showNewLabel = date => {
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = today.getMonth() + 1;

  // const _month = date.getMonth() + 1;
  // const _year = date.getFullYear();

  // return (_month === month && _year === year) ? true : false;
  return false;
};

export const showStartDateMonth = (start, end) => {
  const splitStart = start.split(' ');
  const splitEnd = end.split(' ');

  return (splitStart[1] === splitEnd[1]) ? splitStart[0] : start;
};
