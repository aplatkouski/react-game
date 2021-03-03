import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import * as React from 'react';

const ITEM_HEIGHT = 48;

const LongMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="long-menu"
        aria-haspopup="true"
        aria-label="more"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
        anchorEl={anchorEl}
        id="long-menu"
        keepMounted
        onClose={handleClose}
        open={open}
      >
        <MenuItem key="Stats" onClick={handleClose}>
          Stats
        </MenuItem>
        <MenuItem key="Hot-keys" onClick={handleClose}>
          Hot-keys
        </MenuItem>
        <MenuItem key="Settings" onClick={handleClose}>
          Settings
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LongMenu;
