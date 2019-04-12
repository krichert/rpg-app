import React from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonIcon from '@material-ui/icons/Person';
import SecurityIcon from '@material-ui/icons/Security';
import FlagIcon from '@material-ui/icons/FlagOutlined';
import FlashIcon from '@material-ui/icons/FlashOn';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import logo from '../logo.svg'

const styles = theme => ({
    root: {
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        boxShadow: '0 0 10px #222',
        padding: '0 20px',
        '& nav a': {
            textDecoration: 'none'
        }
    },
    title: {
        color: theme.palette.secondary.light,
        marginBottom: '20px'
    },
    logo: {
        margin: '0 auto',
        padding: '20px 0',
        width: 120,
        height: 120,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: theme.palette.secondary.light,
        padding: '20px'
    }
});

const Sidebar = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Avatar className={classes.logo} src={logo}/>
            <Typography component="h1" variant="display1" className={classes.title}>RPG App</Typography>
            <List component="nav">
                <NavLink to="/summary">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Podsumowanie"/>
                    </ListItem>
                </NavLink>
                <NavLink to="/equipment">
                    <ListItem button>
                        <ListItemIcon>
                            <SecurityIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Ekwipunek"/>
                    </ListItem>
                </NavLink>
                <NavLink to="/stats">
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Statystki"/>
                    </ListItem>
                </NavLink>
                <NavLink to="/skills">
                    <ListItem button>
                        <ListItemIcon>
                            <FlashIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Umiejętności"/>
                    </ListItem>
                </NavLink>
            </List>
            <Divider/>
            <List component="nav">
                <NavLink to="/map">
                    <ListItem button>
                        <ListItemIcon>
                            <FlagIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Mapa"/>
                    </ListItem>
                </NavLink>
                <NavLink to="/tasks">
                    <ListItem button>
                        <ListItemIcon>
                            <FormatListBulletedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Zadania"/>
                    </ListItem>
                </NavLink>
            </List>
            <Divider/>
            <List component="nav">
                <NavLink to="/log-out">
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Wyloguj"/>
                    </ListItem>
                </NavLink>
            </List>
            <Typography component="h4" variant="subheading" className={classes.footer}>
                © Kamil Richert
            </Typography>
        </div>
    );
};

export default withStyles(styles)(Sidebar);