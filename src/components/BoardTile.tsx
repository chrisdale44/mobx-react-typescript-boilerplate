import * as React from 'react';

interface IProps {
    data: any,
    key: string
}

interface IState {

}

// does this need to be wrapped in withRouter?
class BoardTile extends React.Component<IProps, IState> {
    render() {
        let board = this.props.data;

        return (
            <div style={{position: 'relative', display: 'inline-block', height: 250, width: 250, borderRadius: 8, verticalAlign: 'top', margin: 10, overflow: 'hidden'}}>
                <h2>{board.name}</h2>
                <img src={board.image.large.url} style={{position: 'absolute', width: '100%'}} />
            </div>
        )
    }
};

export default BoardTile;