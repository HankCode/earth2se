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

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '125px',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
    },
    blogPostContainer: {
        display: 'flex',
        flexDirection: 'column',
        magin: '0px',
    },
    card: {
        maxWidth: 550,
        background: 'rgba(0,0,0,0.2)',
        margin: '20px',
        textAlign: 'center',
    },
    media: {
        height: 300,
    },
    title: {
        color: '#fff',
        fontSize: '3.2rem',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.2rem',
        },
        margin: '0px',
    },
    bTitle: {
        fontFamily: 'Montserrat',
        fontSize: '1.2rem',
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
        color: '#fff',
    },
}));

export default function Blog() {
    const classes = useStyles();
    const blogPost = [
        {
            title: 'My Second Blog Post',
            content:
                '<p>Fruitcake biscuit jujubes chupa chups brownie chocolate. Pastry jelly beans macaroon soufflé pastry marshmallow cake chocolate bar. Brownie jelly-o lemon drops sweet roll. Donut tiramisu sugar plum chocolate. Croissant muffin biscuit. Cheesecake liquorice pudding oat cake biscuit powder. Chocolate bar wafer brownie danish gummies. Pie gingerbread tart lollipop biscuit cupcake fruitcake sweet macaroon. Dragée icing bear claw sugar plum cake caramels. Dragée muffin halvah topping oat cake powder brownie. Biscuit jelly brownie pastry marshmallow croissant. Sesame snaps jelly chupa chups bonbon apple pie wafer halvah caramels cupcake. Oat cake cotton candy jelly.</p><p>Danish ice cream toffee brownie biscuit. Croissant carrot cake icing candy canes. Pastry cotton candy cake gummies jelly beans. Gingerbread macaroon pie chocolate cake cake tootsie roll. Marzipan dragée chocolate sweet lemon drops candy tiramisu candy canes sweet. Chupa chups toffee bonbon. Pastry sweet roll jelly-o donut candy jelly beans lemon drops. Chocolate cake cupcake soufflé marzipan jelly-o sweet lemon drops pastry candy canes. Candy macaroon macaroon fruitcake toffee. Dessert lollipop soufflé. Caramels biscuit pudding tootsie roll jelly fruitcake. Tiramisu bonbon liquorice chocolate bar chupa chups.</p>',
            coverImage: 'http://placekitten.com/700/350',
            coverImageAlt: 'Another random kitten from placekitten.com.',
            slug: 'my-second-blog-post',
            dateFormatted: '2019-08-07',
            datePretty: 'August 7th, 2019',
        },
        {
            title: 'My First Blog Post',
            content:
                '<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>',
            coverImage: 'http://placekitten.com/700/400',
            coverImageAlt: 'A random kitten from placekitten.com.',
            slug: 'my-first-blog-post',
            dateFormatted: '2019-08-01',
            datePretty: 'August 1st, 2019',
        },
        {
            title: 'My First Blog Post',
            content:
                '<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>',
            coverImage: 'http://placekitten.com/700/400',
            coverImageAlt: 'A random kitten from placekitten.com.',
            slug: 'my-first-blog-post',
            dateFormatted: '2019-08-01',
            datePretty: 'August 1st, 2019',
        },
        {
            title: 'My First Blog Post',
            content:
                '<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>',
            coverImage: 'http://placekitten.com/700/400',
            coverImageAlt: 'A random kitten from placekitten.com.',
            slug: 'my-first-blog-post',
            dateFormatted: '2019-08-01',
            datePretty: 'August 1st, 2019',
        },
        {
            title: 'My First Blog Post',
            content:
                '<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>',
            coverImage: 'http://placekitten.com/700/400',
            coverImageAlt: 'A random kitten from placekitten.com.',
            slug: 'my-first-blog-post',
            dateFormatted: '2019-08-01',
            datePretty: 'August 1st, 2019',
        },
        {
            title: 'My First Blog Post',
            content:
                '<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>',
            coverImage: 'http://placekitten.com/700/400',
            coverImageAlt: 'A random kitten from placekitten.com.',
            slug: 'my-first-blog-post',
            dateFormatted: '2019-08-01',
            datePretty: 'August 1st, 2019',
        },
        {
            title: 'My First Blog Post',
            content:
                '<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>',
            coverImage: 'http://placekitten.com/700/400',
            coverImageAlt: 'A random kitten from placekitten.com.',
            slug: 'my-first-blog-post',
            dateFormatted: '2019-08-01',
            datePretty: 'August 1st, 2019',
        },
        {
            title: 'My First Blog Post',
            content:
                '<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>',
            coverImage: 'http://placekitten.com/700/400',
            coverImageAlt: 'A random kitten from placekitten.com.',
            slug: 'my-first-blog-post',
            dateFormatted: '2019-08-01',
            datePretty: 'August 1st, 2019',
        },
    ];

    return (
        <>
            <div className={classes.root}>
                <h1 className={classes.title}>Blogarkiv:</h1>
                <div className={classes.blogPostContainer}>
                    {blogPost.map((blogPost) => (
                        <Card key={blogPost.slug} className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={blogPost.coverImage}
                                    alt={blogPost.coverImageAlt}
                                    title='CoverImage'
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='h1'
                                        className={classes.bTitle}
                                    >
                                        {blogPost.title} &mdash; {blogPost.datePretty}
                                    </Typography>
                                    {/* <Typography
                            component='p'
                            dangerouslySetInnerHTML={{
                                __html: `${blogPost.content.substring(0, 200)}...`,
                            }}
                        /> */}
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary' className={classes.cardLink}>
                                    <Link
                                        to={`/blog/${blogPost.slug}`}
                                        className='link'
                                        underline='hover'
                                        color='inherit'
                                    >
                                        Continue reading...
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
