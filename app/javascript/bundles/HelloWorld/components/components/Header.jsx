import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '0vh',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
            <Grid container direction="row" justify="space-between" alignItems="center" >
                <Grid item>
                <Typography variant="h6">Of Space</Typography>
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
        
            </Container>
         </div>
    );
}