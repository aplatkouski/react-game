import { Button, ButtonGroup } from '@material-ui/core';
import MARK from 'Entities/mark';
import * as React from 'react';
import { useState } from 'react';
import * as StateTypes from 'States/types';

interface Props {
  cleanGameboard: () => StateTypes.IAction<undefined>;
  currentPlayerMark: MARK;
  initGameboard: (mark: MARK) => StateTypes.IAction<MARK>;
  startGame: () => StateTypes.IAction<undefined>;
  stopGame: () => StateTypes.IAction<undefined>;
}

const Buttons = ({
  cleanGameboard,
  currentPlayerMark,
  initGameboard,
  startGame,
  stopGame,
}: Props): JSX.Element => {
  const [hasActiveGame, setHasActiveGame] = useState(false);

  const handleStopGame = () => {
    cleanGameboard();
    stopGame();
    setHasActiveGame(false);
  };

  const handleStartGame = () => {
    initGameboard(currentPlayerMark);
    startGame();
    setHasActiveGame(true);
  };

  return (
    <ButtonGroup
      aria-label="outlined primary button group"
      color="primary"
      variant="contained"
    >
      {hasActiveGame ? (
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
