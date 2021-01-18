{
    blogPosts.map((blogPost) => (
        <Card key={blogPost.slug} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={blogPosts.coverImage}
                    alt={blogPost.coverImageAlt}
                    title='CoverImage'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h1' className={classes.bTitle}>
                        {blogPost.title} &mdash; {blogPost.datePretty}
                    </Typography>
                    <Typography
                        dangerouslySetInnerHTML={{
                            __html: `${blogPost.content.substring(0, 200)}...`,
                        }}
                    >
                        {data.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary' className={classes.cardLink}>
                    <Link to={`/${blogPost.slug}`}>Continue reading...</Link>
                </Button>
            </CardActions>
        </Card>
    ));
}
