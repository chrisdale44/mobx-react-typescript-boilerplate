import * as React from 'react';
import { Link } from 'react-router';

interface IProps {
    data: any,
    key: string
}

interface IState {

}

// does this need to be wrapped in withRouter?
class PinTile extends React.Component<IProps, IState> {
    render() {
        let pin = this.props.data;
        
        let tileStyle = {
            position: 'relative', 
            display: 'inline-block', 
            height: 200,
            width: 200,
            borderRadius: 8, 
            verticalAlign: 'top', 
            margin: 10, 
            overflow: 'hidden'
        };

        let imgStyle = {
            position: 'absolute', 
            minWidth: '100%', 
            minHeight: '100%'
        }

        return (
            <Link style={tileStyle} to={`/pin/${pin.id}`}>
                <img src={pin.image.large.url} style={imgStyle} />
            </Link>
        )
    }
};

export default PinTile;