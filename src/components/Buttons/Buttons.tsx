import { Button, ButtonGroup } from '@material-ui/core';
import MARK from 'Entities/mark';
import * as React from 'react';
import * as StateTypes from 'States/types';

interface Props {
  cleanGameboard: () => StateTypes.IAction<undefined>;
  currentPlayerMark: MARK;
  initGameboard: (mark: MARK) => StateTypes.IAction<MARK>;
  isActiveGame: boolean;
  startGame: () => StateTypes.IAction<undefined>;
  stopGame: () => StateTypes.IAction<undefined>;
}

const Buttons = ({
  cleanGameboard,
  currentPlayerMark,
  initGameboard,
  isActiveGame,
  startGame,
  stopGame,
}: Props): JSX.Element => {
  const handleStopGame = () => {
    cleanGameboard();
    stopGame();
  };

  const handleStartGame = () => {
    initGameboard(currentPlayerMark);
    startGame();
  };

  return (
    <ButtonGroup
      aria-label="outlined primary button group"
      color="primary"
      variant="contained"
    >
      {isActiveGame ? (
        <Button color="secondary" onClick={() => handleStopGame()}>
          Stop Game
        </Button>
      ) : (
        <Button color="primary" onClick={() => handleStartGame()}>
          New Game
        </Button>
      )}
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
};

export default Buttons;
