import * as React from 'react';
import * as _ from 'lodash';

interface IProps {
    tags: string[],
    isoGrid: any,
}

// does this need to be wrapped in withRouter?
class TagsMenu extends React.Component<IProps, any> {

    handleFilter = (tag) => {
        if (typeof this.props.isoGrid === "undefined") {
            console.log('isotope not initialised yet')
        }
        this.props.isoGrid.arrange({filter: `.${tag}`});
    }

    render() {
        let buttons = (this.props && this.props.tags) ? this.props.tags.map((tag) => <button key={tag} data-filter={`.${tag}`} onClick={() => this.handleFilter(tag)}>{tag}</button>) : '';

        return (
            <div id="filter-buttons">
                {buttons}
            </div>
        )
  }
};

export default TagsMenu;