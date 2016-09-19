import * as React from 'react';
import { Link } from 'react-router';
import { PinTile, TagsSearch, TagsButtons, LogoutButton } from '../components';
import pinterest from '../util/pinterest';
import * as _ from 'lodash';
let styles = require('../style/main.css');

declare var Isotope:any;
declare var imagesLoaded:any;

interface IProps {
    params: any
}

interface IState {
    boardId?: string,
    boardName?: string,
    pins?: DTO.IPinsDto[],
    allHashtags?: string[],
    searchTerm?: string,
    isoGrid?: any
}

// does this need to be wrapped in withRouter?
class Pins extends React.Component<IProps, IState> {
    constructor() {
        super();
        this.state = { searchTerm: '' };
    }
    
    componentDidMount() {
        this.fetchBoardData(this.props.params.boardId);
    }

    /*
    *  Fetch user boards from Pinterest
    */
    fetchBoardData(boardId) {
        pinterest.myBoardPins(boardId, response => {
            // todo: test response here

            this.setState({ allHashtags: this.processHashtags(response.data) });
            
            this.setState({ pins: response.data, boardName: response.data[0].board.name });

            // Initialise Isotope once images have loaded
            imagesLoaded(document.getElementById(styles.pinGrid), () => {
                this.initIsotope(); 
            });
        }
    )};

    processHashtags(data) {
        // Loop over response data 
        // Select hashtags from each pin notes
        let notes, hashtags, classes, allHashtags = [];
        
        for (let i = 0; i < data.length; i++) {
            notes = data[i].note.split(' ');
            hashtags = [];
            classes = '';

            for (let j = 0; j < notes.length; j++) {
                if (notes[j].indexOf('#') == 0) {
                    hashtags.push(notes[j].substring(1));
                    classes = `${classes} ${notes[j].substring(1)}`;
                }
            }

            data[i].classes = classes;
            allHashtags = _.union(allHashtags, hashtags);
        }
        return allHashtags;
    }
  
    initIsotope() {
        console.log('initialised')
        this.setState({ 
            isoGrid: new Isotope(`#${styles.pinGrid}`, {
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
            })
        });
    }

    render() {
        let title = (this.state && this.state.boardName) ? this.state.boardName : 'Loading...';
        let pinGrid = (this.state && this.state.pins) ? this.state.pins.map((pin) => <PinTile data={pin} key={pin.id} />) : '';
        
        return (
            <div>
                <Link to={'/'}>Back</Link>
                <LogoutButton/>
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                <TagsSearch tags={this.state.allHashtags} isoGrid={this.state.isoGrid} />
                <TagsButtons tags={this.state.allHashtags} isoGrid={this.state.isoGrid} />
                <div id={styles.pinGrid} className={styles.gridContainer}>
                    {pinGrid}
                </div>
            </div>
        )
    }
};

export default Pins;