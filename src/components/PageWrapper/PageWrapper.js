import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.secondary.light,
        padding: '20px',
        height: 'calc(100vh - 40px)'
    },
});

const PageWrapper = (props) => {
    const {classes, title, children} = props;
    return (
        <div className={classes.root}>
            <Typography component="h2" variant="title">{title}</Typography>
            {children}
        </div>
    );
};

export default withStyles(styles)(PageWrapper);