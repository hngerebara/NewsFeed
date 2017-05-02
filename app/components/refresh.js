import React from 'react';
import NewsStore from '../../stores/NewsStore';
import SourceStore from '../../stores/SourceStore';
import NewsActions from '../../actions/SourceActions';
import * as NewsAPI from "../../utils/NewsAPI";

export default class RefreshSource extends React.Component {
    render (){
        return (
            <button type="button"
                    onClick={(event) => {NewsAPI.getNewsSources()}}>
                <span className="glyphicon glyphicon-refresh" aria-hidden="true" />
            </button>
        );
    }
}

