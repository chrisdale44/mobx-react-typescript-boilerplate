import * as React from 'react';
import { PinTile } from '../components'
import pinterest from '../util/pinterest';

interface IProps {
    params: any
}

interface IState {
    boardId?: string,
    pins?: DTO.IPinsDto[]
}

// does this need to be wrapped in withRouter?
class Pins extends React.Component<IProps, IState> {
  componentDidMount() {
      this.fetchBoardData(this.props.params.boardId);
  }

  /*
  *  Fetch user boards from Pinterest
  */
  fetchBoardData(boardId) {
      pinterest.myBoardPins(boardId, response => {
          this.setState({ pins: response.data });
          console.log(this.state.pins)
      });
  }

  render() {
    let pinGrid = (this.state && this.state.pins) ? this.state.pins.map((pin) => <PinTile data={pin} key={pin.id} />) : 'No pins';
    return (
        <div>
            <h1>Pins!</h1>
            {pinGrid}
        </div>
    )
  }
};

export default Pins;