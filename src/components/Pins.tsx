import * as React from 'react';
import pinterest from '../util/pinterest';

interface IState {
    pins?: {}
}

// does this need to be wrapped in withRouter?
class Pins extends React.Component<any, IState> {
  componentDidMount() {
      this.fetchBoardData();
  }

  /*
  *  Fetch user boards from Pinterest
  */
  fetchBoardData() {
      pinterest.myPins(response => {
          this.setState({ pins: response.data.sort((a,b) => a.name > b.name ? 1 : -1) });
      });
  }

  render() {
    return <div>Pins!</div>
  }
};

export default Pins;