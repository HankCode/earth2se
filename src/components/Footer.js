import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    const classes = useStyles();
    return (
        <Typography variant='body2' color='textSecondary' className={classes.copyright}>
            {'Copyright © '}
            <Link color='inherit' href='https://earth2.se' target='new'>
                earth2.se
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    copyright: {
        fontSize: '1.3rem',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div>
            <footer className={classes.footer}>
                <Container maxWidth='sm'>
                    <Typography variant='body1'>
                        <br />
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}
