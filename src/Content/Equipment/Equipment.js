import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import PageWrapper from '../../components/PageWrapper';

const styles = theme => ({
    root: {
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        boxShadow: '0 0 10px #222',
        padding: '0 20px'
    },
});

class Equipment extends React.Component {
    render() {
        return <PageWrapper title="Ekwipunek">

        </PageWrapper>
    }
}


export default withStyles(styles)(Equipment)