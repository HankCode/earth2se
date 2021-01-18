import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SortIcon from '@material-ui/icons/Sort';
import Link from '@material-ui/core/Link';
import { FaDiscord } from 'react-icons/fa';

import { Link as NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '75px',
        height: '49px',
    },
    appbar: {
        background: 'rgba(0,0,0,0.3)',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    sIcon: {
        color: '#fff',
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    icon: {
        color: '#fff',
        fontSize: '1.2rem',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    socialLinks: {
        color: '#fff',
        fontSize: '1.2rem',
    },
    link: {
        textDecoration: 'none',
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
    },
}));

export default function Nav() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        <Link href='/' className={classes.link}>
                            <img
                                src='../assets/logo_earth2transparant_exact.png'
                                alt='Earth2.se logo'
                                className={classes.logo}
                            />
                        </Link>
                    </h1>

                    <div className={classes.sIcon}>
                        <IconButton>
                            <Link
                                href='https://discord.gg/JyN33jt2zX'
                                target='_blank'
                                className={classes.socialLinks}
                            >
                                <FaDiscord />
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link
                                href='https://www.facebook.com/groups/234900221532796'
                                target='_blank'
                                className={classes.socialLinks}
                            >
                                <FacebookIcon />
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link
                                href='https://twitter.com/Earth2Sweden'
                                target='_blank'
                                className={classes.socialLinks}
                            >
                                <TwitterIcon />
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link
                                href='https://www.instagram.com/earth2sweden/'
                                target='new'
                                className={classes.socialLinks}
                            >
                                <InstagramIcon />
                            </Link>
                        </IconButton>
                    </div>

                    <div className={classes.icon}>
                        <IconButton
                            className={classes.socialLinks}
                            aria-label='menu'
                            onClick={handleMenu}
                        >
                            <SortIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <NavLink to='/' className={classes.link}>
                                    Hem
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <NavLink to='/blog' className={classes.link}>
                                    Blog
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <NavLink to='/contact' className={classes.link}>
                                    Kontakt
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <NavLink to='/faq' className={classes.link}>
                                    Vanliga frågor
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
