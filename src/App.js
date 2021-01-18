import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Blog from './components/test';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Post from './components/Post';
import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg2.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <Nav />
                <Switch>
                    <Route path='/' component={LandingPage} exact />
                    <Route path='/contact' component={Contact} />
                    <Route path='/blog' component={Blog} exact />
                    <Route path='/blog/:slug' component={Post} />
                    <Route path='/faq' component={Faq} exact />
                    {/* <Route path='/blog/:slug' component={BlogPost} /> */}
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
