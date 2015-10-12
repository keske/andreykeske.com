// `https://www.google.ru/search?q=google+images&newwindow=1#newwindow=1&tbm=isch&q=${ word }`,
// Song text
import { song } from './song.js';

// End of song parts in seconds
const firstVerseEnd = 29;
const secondVerseEnd = 60;
// 67
const thirdVerseEnd = 98;
const fourthVerseEnd = 117;
const fifthVerseEnd = 117;

export function getSecond() {
  return event.target.currentTime.toFixed(0);
}

export function getWord() {
  return ((event.target.currentTime * 1000).toFixed(0) / 475).toFixed(0);
}

export function getWordIndex(second, word) {
  switch (true) {
  case (second < firstVerseEnd):
    return word;
  case (second > firstVerseEnd && second < secondVerseEnd):
    return word - song().length;
  default:
    return word;
  }
}

export function getWindowTop(second, word) {
  switch (true) {
  case (second < firstVerseEnd):
    return 0;
  case (second > firstVerseEnd && second < secondVerseEnd):
    return word % 1 || word % 2 ? 0 : screen.height / 2;
  default:
    return 0;
  }
}

export function getWindowLeft(second, word) {
  switch (true) {
  case (second < firstVerseEnd):
    return 0;
  case (second > firstVerseEnd && second < secondVerseEnd):
    return word % 3 || word % 4 ? 0 : screen.width / 2;
  default:
    return 0;
  }
}

export function getWindowWidth(second) {
  switch (true) {
  case (second < firstVerseEnd):
    return screen.width;
  case (second > firstVerseEnd && second < secondVerseEnd):
    return screen.width / 2;
  default:
    return 0;
  }
}

export function getWindowHeight(second) {
  switch (true) {
  case (second < firstVerseEnd):
    return screen.height;
  case (second > firstVerseEnd && second < secondVerseEnd):
    return screen.height / 2;
  default:
    return 0;
  }
}

export function debug(top, left, word, wordIndex, second, width, height) {
  console.log('top: ' + top);
  console.log('left: ' + left);
  // console.log('word % 1: ' + word % 1);
  // console.log('word % 2: ' + word % 2);
  // console.log('word % 3: ' + word % 3);
  // console.log('word % 4: ' + word % 4);
  // console.log(song()[wordIndex]);
  // console.log(song()[wordIndex]);
  // console.log(second);
  // console.log(wordIndex);

  // console.log('width: ' + width);
  // console.log('height: ' + height);
}
