import * as React from 'react';
import { withRouter } from 'react-router';
import pinterest from '../util/pinterest';

class Logout extends React.Component<any, any> {
    componentWillMount = () => {
        pinterest.logout();
        this.props.router.replace('/');
    }

    render() {
        return <div></div>
    }
};

export default withRouter(Logout);