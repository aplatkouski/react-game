import { Grid, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import RsSchoolLogo from 'Assets/icons/rsschool-logo.svg';
import ContributorLink from 'Components/ContributorLink';
import SvgImg from 'Components/SvgImg';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      flexGrow: 1,
      marginTop: 'auto',
      padding: theme.spacing(3, 2),
    },
    grid: {
      alignItems: 'center',
      color: theme.palette.text.secondary,
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  })
);

const AppIntro = () => (
  <Typography color="textSecondary" variant="body2">
    <Link
      color="inherit"
      href="https://github.com/aplatkouski/react-game"
      title="React2021Q1"
    >
      React Game
    </Link>
    {`, ${new Date().getFullYear()}.`}
  </Typography>
);

export default function Footer(): JSX.Element {
  const classes = useStyles();
  const aplatkouski = {
    name: 'Artsiom Platkouski',
    gitHubLink: 'https://github.com/aplatkouski',
  };

  return (
    <footer className={classes.footer}>
      <Grid container spacing={3}>
        <Grid className={classes.grid} item sm={4} xs={12}>
          <AppIntro />
        </Grid>
        <Grid className={classes.grid} item sm={4} xs={12}>
          <ContributorLink contributor={aplatkouski} />
        </Grid>
        <Grid className={classes.grid} item sm={4} xs={12}>
          <Link
            color="inherit"
            href="https://rs.school/js/"
            rel="noopener"
            target="_blank"
            underline="none"
          >
            <SvgImg alt="RSSchool logo" src={RsSchoolLogo} title="rs.school" />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
}
