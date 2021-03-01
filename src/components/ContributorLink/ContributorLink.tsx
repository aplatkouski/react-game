import { Link } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';
import GitHubLogo from 'Assets/icons/github-logo.svg';
import SvgImg from 'Components/SvgImg';
import IContributor from 'Entities/contributor';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      color: theme.palette.text.secondary,
      '& > *': {
        marginLeft: theme.spacing(1),
      },
    },
  })
);

interface Props {
  contributor: IContributor;
}

const ContributorLink = ({ contributor }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Link
      classes={classes}
      href={contributor.gitHubLink}
      rel="noopener"
      target="_blank"
      underline="none"
      variant="body2"
    >
      {`© ${contributor.name}`}
      <SvgImg alt="GitHub logo" src={GitHubLogo} title="github.com" />
    </Link>
  );
};

export default ContributorLink;
