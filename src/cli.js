import readlineSync from 'readline-sync';

const getUserGreeting = () => {
// Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getUserNumberAnswer = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer:');

  return answer;
};

export default getUserGreeting;

export {
  getUserGreeting,
  getUserNumberAnswer,
};
