import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 550,
        background: 'rgba(0,0,0,0.2)',
        margin: '20px',
    },
    media: {
        height: 300,
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '2rem',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Montserrat',
        fontSize: '1.2rem',
        color: '#ddd',
    },
    cardLink: {
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#ddd',
    },
});

export default function ImageCard({ data, checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={data.image} title='Discord' />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='h5'
                            component='h1'
                            className={classes.title}
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                            className={classes.desc}
                        >
                            {data.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary' className={classes.cardLink}>
                        <Link href={data.link} target={data.target}>
                            Direktlänk
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Collapse>
    );
}
