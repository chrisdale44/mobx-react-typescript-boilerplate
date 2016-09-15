import * as React from 'react';
import { BoardTile } from '../components';
import pinterest from '../util/pinterest';

interface IState {
    boards: DTO.IBoardsDto[]
}

// does this need to be wrapped in withRouter?
class Boards extends React.Component<any, IState> {
    componentDidMount() {
        this.setState({boards: null})
        this.fetchBoardData();
    }

    /*
    *  Fetch user boards from Pinterest
    */
    fetchBoardData() {
        pinterest.myBoards(response => {
            this.setState({ boards: response.data.sort((a,b) => a.name > b.name ? 1 : -1) });
        });
    }

    render() {
        let boardGrid = (this.state && this.state.boards) ? 
            this.state.boards.map((board) => <BoardTile data={board} key={board.id} />) : '';
        return (
            <div>
                <h1>Boards!</h1>
                {boardGrid}
            </div>
        )
    }
};

export default Boards;