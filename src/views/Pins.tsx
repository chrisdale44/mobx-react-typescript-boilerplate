import * as React from 'react';
import pinterest from '../util/pinterest';

interface IProps {
    boardId: string;
}

interface IState {
    pins?: {}
}

// does this need to be wrapped in withRouter?
class Pins extends React.Component<IProps, IState> {
  componentDidMount() {
      this.fetchBoardData(this.props.boardId);
  }

  /*
  *  Fetch user boards from Pinterest
  */
  fetchBoardData(boardId) {
      pinterest.myBoardPins(boardId, response => {
          this.setState({ pins: response.data });
      });
  }

  render() {
    return <div>Pins!</div>
  }
};

export default Pins;