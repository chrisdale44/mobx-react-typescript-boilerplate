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
            <div style={{height: 100, width: 100, margin: 10, padding: 10, border: '1px solid black'}}>
                {board.name}
            </div>
        )
    }
};

export default BoardTile;