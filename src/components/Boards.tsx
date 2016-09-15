import * as React from 'react';
import pinterest from '../util/pinterest';

interface IState {
    boards?: {}
}

// does this need to be wrapped in withRouter?
class Boards extends React.Component<any, IState> {
  componentDidMount() {
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
    return <div>Boards!</div>
  }
};

export default Boards;