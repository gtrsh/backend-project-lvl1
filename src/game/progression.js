import getRandomNum from '../get-random-num.js';
import gameRun from '../engine.js';

const DEFAULT_MAX_COUNT = 10;
const DEFAULT_MAX_STEP_COUNT = 100;
const GAME_RULE_TEXT = 'What number is missing in the progression?';

const getGameSettings = () => {
  const start = getRandomNum(0, DEFAULT_MAX_STEP_COUNT);
  const step = getRandomNum(1, DEFAULT_MAX_STEP_COUNT);
  const missingElement = getRandomNum(0, DEFAULT_MAX_COUNT - 1);
  const result = [];

  for (let i = 0; i < DEFAULT_MAX_COUNT; i += 1) {
    const value = start + step * i;
    result.push(value);
  }

  const answer = result[missingElement];

  result[missingElement] = '..';

  return {
    answer,
    question: `${result.join(' ')}`,
  };
};

export default () => gameRun(GAME_RULE_TEXT, getGameSettings);
