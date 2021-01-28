import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaBeer } from 'react-icons/fa';
import { Grid, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '0vh',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="center" >
                <Grid item>
                    <FaBeer />
                </Grid>
                <Grid item>
                    <Grid>
                        <Button>FAQ</Button>
                        <Button>How it works</Button>
                        <Button>Blog</Button>
                        <Button>For Groups</Button>
                        <Button>For Partners</Button>
                     </Grid>
                </Grid>
                <Grid item>
                    <Button>
                        Sign In
                    </Button>
                    <Button variant="outlined">
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}