import { history } from '../';

const navigate = (url, newTab) => {
  if (!newTab) {
    history.push(url);
  } else {
    window.open(url, '_blank');
  }
};

export default navigate;
