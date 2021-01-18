import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

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

export default function Post({ match }) {
    const classes = useStyles();
    const slug = match.params.slug;
    const postSlugs = ['my-first-blog-post', 'my-second-blog-post'];

    const postDoesNotExist = postSlugs.indexOf(slug) === -1;
    if (postDoesNotExist) {
        return <Redirect to='/404' />;
    }
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Här är det en blog_post</h1>
                </div>
            </div>
        </div>
    );
}
