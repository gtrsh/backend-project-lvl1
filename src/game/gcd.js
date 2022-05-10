import getRandomNum from '../get-random-num.js';
import gameRun from '../engine.js';

const GAME_RULE_TEXT = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const getGameSettings = () => {
  const a = getRandomNum();
  const b = getRandomNum();

  return {
    question: `${a} ${b}`,
    answer: getGcd(a, b),
  };
};

export default () => gameRun(GAME_RULE_TEXT, getGameSettings);
