import React from 'react';
import * as NewsAPI from '../utils/NewsAPI';
import SourceStore from '../stores/SourceStore';
import SourceItem from './source-items';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';
import Articles from '../components/articles';

export default class Sources extends React.Component {
    //create constructor having initial state set to display the sources available in the sourceStore
    //and sortBysAvailable declared as an array 
    //The additional functions(to load, change and filter) are also binded here
    //The deaultid is set to cnn
    constructor(props) {
        super(props);
        this.state = {
            sources: SourceStore.getAll(),
            sortBysAvailable: []
        };
        this._onLoad = this._onLoad.bind(this);
        this._onChange = this._onChange.bind(this);
        this.OnFilterChange = this.OnFilterChange.bind(this);
        this.defaultId = 'cnn';
    }
    
    

//On mounting the page, the functtion for getiing sources from the api is called
    componentWillMount() {
        NewsAPI.getNewsSources();
    }

//When the page actally mounts, the sourcestore listens for a change and calls the onload function which loads the sources to the page
//Also the the newsAPI for getting articles is called and it displays the default news as cnn which was given in the initial state
    componentDidMount() {
        SourceStore.addChangeListener(this._onLoad);
        NewsAPI.getNewsArticle(this.defaultId, this.sortBy);
        
    }

    componentWillUnmount() {
        SourceStore.removeChangeListener(this._onLoad);
    }
    
    //sets the state to the sources in the stores
    _onLoad() {
        this.setState({ sources: SourceStore.getAll() });
    }

    //Line 1- created a second reference to this
         //Line 2- Beacuse the sources is within an array of array, it can be accessed via this.state.sources[0]. 
        //...... to eliminate the lengthy naming, I store the value in sources variable
         //Line 3 t end of Function- Created a loop to loop through the source array and check if the value entered by the user matched the source id.
        //...if it matches, then I set the new state of source id to be the user Selection and pass it as a parameter tothe NewsApi that gets article so it
        //...displays the articles based on the user Selection 
    _onChange(event) {
        const that =this;
        let sources = this.state.sources[0];
        let prop = 0;
        for (; prop < sources.length; prop++) {
            if (sources[prop].id === event.target.value) {
                that.setState({sourceId: sources[prop].id})
                //console.log(that.state.sourceId)
                this.setState({ sortBysAvailable: sources[prop].sortBysAvailable })
                this.sortBysAvailable = sources[prop].sortBysAvailable;
                NewsAPI.getNewsArticle(that.state.sourceId, this.sortBysAvailable)
            }
        }
    }

    //This function Filters the user sources based on the user input
     //It waits for the event (onKeyUp event) then calls this function
    //---------------------------------------------------------------
    //Line 1- It first gets all the sources then converts the user input into a string and also a lowercase
    //Line 2- then stores it into the filterBy vairable.
    //Line 3- Created a filteredlist array to store all the sources to be displayed based on user input
    //Line 4 to end of function- Then I checked the user enters and input or not to be searched. 
    //if no input entered, then all sources are displayed 
    //else I created a loop to go through the sources 
    //Then checks using Regular Expressions if the user input (filterBy) is same as the value(name of the Source)
    //If it tallys as the user is typing, it pushes the source into the filteredList array
    //then sets the new state to the filtered ist to be displayed to the user
    
    OnFilterChange(event) {
        const allSources = this.state.sources[0];
        const filterBy = event.target.value.toString().toLowerCase();
        const filteredList = [];
        if (!event.target.value) {
            this.setState({
                sources: allSources
            });
        } else {
            for (var index = 0; index < allSources.length; index++) {
                let value = allSources[index].name;
                if ((new RegExp(filterBy)).test(value.toLowerCase())) {
                    filteredList.push(allSources[index]);
                    this.setState({
                        sources: [filteredList]
                    })
                }
            }
        }

    }

    //Line 1-Assigned sources to be storedin allSources
    //Line 2- The rows to display all sources delared as an array
    //Line 3- Assigned the OnChange() to be stored in change variable
    //Line 4- If all sources, it should map the source with its index as key and pass it to the child <sourceitem> as prop
    render() {
        let allSources = this.state.sources[0];
        let rows = [];
        //let change = this._onChange;
        if (allSources) {
            allSources.map((item, index) => {
                rows.push(<SourceItem key={index} value={item.id} name={item.name}
                    onclick={this._onChange} />)
            });
        }

        //using bootstrap styling, the entire page has 12 colns
        //assigning 2 colns to the sources and 10 to the articles
        //placed an input button at thetop for filter search
        //finally calls the arclescomponent to be displayed in the the 10 column 
        //passing sourceId and Sort by available whihis used for sorting
        return (
            <div className="col-lg-12">
                <div id="sidebar-wrapper" className="col-lg-2 list-group">
                    <h5>Please select News Source </h5>
                    <input type="text" className="form-control" placeholder="Search News...."
                         onKeyUp={this.OnFilterChange.bind(this)} />
                    <div
                        onChange={this._onChange}
                        onLoad={this._onLoad}>
                        {rows}
                    </div>
                </div>
                <div className="col-lg-10">
                    <Articles source={this.state.sourceId} sortParams={this.state.sortBysAvailable} />
                </div>
            </div>
        );
    }
}


