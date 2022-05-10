import readlineSync from 'readline-sync';

const DEFAULT_POINT_COUNT = 3;

const gameRun = (gameRuleText, getGameSettings) => {
  console.log('Welcome to the Brain Games!');

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  console.log(gameRuleText);

  for (let i = 0; i < DEFAULT_POINT_COUNT; i += 1) {
    const { question, answer } = getGameSettings();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default gameRun;
