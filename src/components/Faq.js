import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import faq from '../static/faq';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
    },
    colorText: {
        color: '#fff',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    container: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '900px',
        marginTop: '125px',
        marginBottom: '125px',
    },
    title: {
        color: '#fff',
        fontSize: '2rem',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    stycke: {
        color: '#fff',
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        maxWidth: '900px',
    },
    qtitle: {
        fontSize: '1.2rem',
        padding: '10px',
    },
    qWrap: {
        margin: '10px',
        padding: '20px',
        background: 'rgba(0,0,0,0.2)',
        border: '1px solid grey',
        borderRadius: '4px',
    },
    link: {
        textDecoration: 'nonae',
        color: '#fff',
    },
}));

export default function Blog() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Vanligt ställda frågor:</h1>
                    {faq.map((data) => (
                        <div className={classes.qWrap}>
                            <p className={classes.stycke}>
                                <span className={classes.qtitle}>{data.f}</span>
                                <br />
                                <br />
                                {data.s}
                            </p>
                        </div>
                    ))}
                    <p className={classes.stycke}>
                        För mer omfattande hjälp på engelska hänvisar vi er till Earth 2 officiella
                        hemsida:
                        <br />
                        <Link
                            href='https://www.earth2.io/tutorials'
                            target='_blank'
                            className={classes.socialLinks}
                        >
                            <span className={classes.link}>https://www.earth2.io/tutorials</span>
                        </Link>
                        <br />
                        <Link
                            href='https://www.earth2.io/faq'
                            target='_blank'
                            className={classes.socialLinks}
                        >
                            <span className={classes.link}>https://www.earth2.io/faq</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
