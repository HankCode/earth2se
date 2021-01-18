import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Montserrat',
    },
    colorText: {
        color: '#fff',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4rem',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
}));

export default function Contact() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root} id='header'>
                <div className={classes.container}>
                    <h1 className={classes.title}>Kontaktuppgifter:</h1>
                </div>
            </div>
        </div>
    );
}
