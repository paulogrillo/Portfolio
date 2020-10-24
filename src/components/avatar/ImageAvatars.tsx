import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImgLogo from '../../img/profile1.png';
import '../avatar/style.css';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *':
      {
        margin: theme.spacing(10),
        
      },
      marginTop: theme.spacing(-10),
      heigth: 20,
    },
    large: {
      width: theme.spacing(36),
      height: theme.spacing(36),
    },
  }),
);

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={ImgLogo} className={classes.large} />
    </div>
  );
}