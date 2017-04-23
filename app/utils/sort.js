import React from 'react';

export default class filter extends React.component {
    constructor(props) {
        super(props)
        this.state = {
            sortBy: 'top',
            data: this.props.articles.sort(sortTop)
        }
    }

    sortData() {
        if (this.state.sortType === 'latest') {
            this.setState = {
                sortBy: 'latest',
                data: this.props.articles.sort(sortLatest)
            }
        }
        else {
            this.setState = {
                sortBy: 'popular',
                data: this.props.articles.sort(sortPopular)
            }
        }
    }
}
render() {
    return (
        <div>
           
        </div>
    );
};

            