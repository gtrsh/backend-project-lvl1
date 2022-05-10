import getRandomNum from '../get-random-num.js';
import gameRun from '../engine.js';

const GAME_RULE_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameSettings = () => {
  const number = getRandomNum();

  return {
    question: number,
    answer: !(number % 2) ? 'yes' : 'no',
  };
};

export default () => gameRun(GAME_RULE_TEXT, getGameSettings);
