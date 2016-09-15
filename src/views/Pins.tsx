import * as React from 'react';
import { Link } from 'react-router';
import { PinTile } from '../components'
import pinterest from '../util/pinterest';
//var Isotope = require('isotope-layout');

declare var Isotope:any;


interface IProps {
    params: any
}

interface IState {
    boardId?: string,
    boardName?: string,
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
            this.setState({ pins: response.data, boardName: response.data[0].board.name });
            console.log(this.state.pins)
            //this.initIsotope();
        }
    )};
  
    initIsotope() {
        let grid = document.getElementById('pin-grid');
        let iso = new Isotope( grid, {
        // options...
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 400
        }
        });
      
    }

  render() {
    let title = (this.state && this.state.boardName) ? this.state.boardName : 'Loading...';
    let pinGrid = (this.state && this.state.pins) ? this.state.pins.map((pin) => <PinTile data={pin} key={pin.id} />) : '';
    
    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <div id="pin-grid">
                {pinGrid}
            </div>
        </div>
    )
  }
};

export default Pins;