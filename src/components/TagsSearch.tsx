import * as React from 'react';
import * as _ from 'lodash';

interface IProps {
    tags: string[],
    isoGrid: any
}

interface IState {
    searchTerm?: string
}

// does this need to be wrapped in withRouter?
class SearchTags extends React.Component<IProps, IState> {
    constructor() {
        super();
        this.state = { searchTerm: '' };
    }

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

    handleSearch = (e) => {
        let searchTerm = e.target.value;
        this.setState({ searchTerm: searchTerm });

        if (!searchTerm) {
            return;
        }

        // todo: split multiple search terms here?

        let tag, matchingTags = '';
        for (let i = 0; i < this.props.tags.length; i++) {
            tag = this.props.tags[i];
            if (_.includes(tag, searchTerm) ){
                if (matchingTags) {
                    matchingTags += ', '    
                }
                matchingTags += `.${tag}`;
            }
        }

        searchTerm = matchingTags || `.${searchTerm}`;

        if (typeof this.props.isoGrid === "undefined") {
            console.log('isotope not initialised yet')
            return;
        }

        this.props.isoGrid.arrange({ filter: searchTerm });
    }

    render() {
        return (
            <input type='text' placeholder="Search tags" value={this.state.searchTerm} onChange={this.handleSearch} />
        )
    }
};

export default SearchTags;