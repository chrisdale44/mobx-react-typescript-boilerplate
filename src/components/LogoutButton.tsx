import * as React from 'react';
import { withRouter } from 'react-router';
import pinterest from '../util/pinterest';

class LogoutButton extends React.Component<any, any> {
    constructor() {
        super();
    }

    handleLogout = () => {
        this.props.router.replace('logout');
    } 

    render() {
        return <span style={{float: 'right', cursor: 'pointer'}} onClick={this.handleLogout}>Logout</span>
    }
};

export default withRouter(LogoutButton);