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
            borderRadius: 8, 
            verticalAlign: 'top', 
            margin: 10, 
            overflow: 'hidden',
            fontSize: 0
        };

        let imgStyle = {
            maxWidth: 300
        }

        return (
            <Link style={tileStyle} to={`/pin/${pin.id}`} className={`grid-item ${pin.classes}`}>
                <img src={pin.image.large.url} style={imgStyle} />
            </Link>
        )
    }
};

export default PinTile;