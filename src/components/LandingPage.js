import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Widgets from './Widgets';

const useStyles = makeStyles((theme) => ({
    wrapper: {},
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
        fontSize: '3.2rem',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.2rem',
        },
    },
    expandIcon: {
        color: '#fff',
        fontSize: '4rem',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div>
            <div className={classes.root} id='header'>
                <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                    <div className={classes.container}>
                        <h1 className={classes.title}>
                            The swedish earth2.io
                            <br /> community
                        </h1>
                        <Scroll to='my-widgets' smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.expandIcon} />
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
            </div>
            <Widgets />
        </div>
    );
}
