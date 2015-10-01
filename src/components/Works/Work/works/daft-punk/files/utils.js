// Song text
import { song } from './song.js';

// End of song parts in seconds
const firstVerseEnd = 29;
const secondVerseEnd = 60;

export function getCurrentWord(second, word) {
  switch (true) {
  case (second < firstVerseEnd):
    return word;
  case (second < firstVerseEnd && second < secondVerseEnd):
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
