const getEndGameMessage = (
  firstPlayerScore: number,
  secondPlayerScore: number
): string => {
  let message: string;
  if (firstPlayerScore === secondPlayerScore) {
    message = 'Draw!';
  } else if (firstPlayerScore > secondPlayerScore) {
    message = 'First player win!';
  } else {
    message = 'Second player win!';
  }
  return message;
};

export default getEndGameMessage;
