import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RiDiscordLine, RiInstagramLine, RiFacebookBoxLine } from 'react-icons/ri';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: '125px',
        fontFamily: 'Montserrat',
        textAlign: 'center',
    },
    colorText: {
        color: '#fff',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    title: {
        color: '#fff',
        fontSize: '3.2rem',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.2rem',
        },
    },
    uTitle: {
        color: '#fff',
        fontSize: '1.6rem',
    },
    topics: {
        color: '#fff',
        fontSize: '1.4rem',
    },
    link: {
        color: '#fff',
    },
}));

export default function Contact() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <h1 className={classes.title}>Ni når oss enklast via:</h1>
                <div className={classes.topics}>
                    <Link
                        href='https://www.instagram.com/earth2sweden/'
                        target='_blank'
                        underline='hover'
                        className={classes.link}
                    >
                        <RiInstagramLine size='100' />
                    </Link>
                    <Link
                        href='https://discord.gg/JyN33jt2zX'
                        target='_blank'
                        underline='hover'
                        className={classes.link}
                    >
                        <RiDiscordLine size='100' />
                    </Link>
                    <Link
                        href='https://www.facebook.com/groups/234900221532796'
                        target='_blank'
                        underline='hover'
                        className={classes.link}
                    >
                        <RiFacebookBoxLine size='100' />
                    </Link>
                </div>
                <h1 className={classes.uTitle}>
                    Kom gärna in och chatta med oss på vår discord-server!
                </h1>
            </div>
        </>
    );
}
