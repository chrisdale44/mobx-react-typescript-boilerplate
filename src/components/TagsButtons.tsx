import * as React from 'react';
import * as _ from 'lodash';
import {mainStyle} from '../style';

interface IProps {
    tags: string[],
    isoGrid: any,
}

interface IState {
    currentTags?: any
}

// does this need to be wrapped in withRouter?
class TagsMenu extends React.Component<IProps, IState> {
    constructor() {
        super();
        this.state = {
            currentTags: []
        }
    }

    handleFilter = (e) => {
        let tag = e.target.dataset.filter.substring(1);
        
        if (typeof this.props.isoGrid === "undefined") {
            console.log('isotope not initialised yet')
            return;
        }

        if (_.includes(this.state.currentTags, tag)) {
            // deselect it 
            let currentTags = this.state.currentTags.filter((i) => {
                return i !== tag
            });
            this.setState({ currentTags: currentTags }, this.updateFilter);
            e.target.classList.remove(mainStyle.tagButtonSelected);
        } else {
            // else, select it
            this.setState({ currentTags: this.state.currentTags.concat([tag]) }, this.updateFilter)
            e.target.classList.add(mainStyle.tagButtonSelected);
        }
    }

    updateFilter() {
        let tag, tagString = '';
        if (this.state.currentTags.length) {
            for (let i = 0; i < this.state.currentTags.length; i++) {
                tag = this.state.currentTags[i];
                tagString += `.${tag}`;
            }
        }
        
        this.props.isoGrid.arrange({filter: tagString});
    }

    render() {
        let buttons = (this.props && this.props.tags) ? 
            this.props.tags.map((tag) => <div key={tag} data-filter={`.${tag}`} onClick={this.handleFilter} className={mainStyle.tagButton}>{tag}</div>) : '';

        return (
            <div className={mainStyle.buttonsContainer}>
                {buttons}
            </div>
        )
    }
};

export default TagsMenu;