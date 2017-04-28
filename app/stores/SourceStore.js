import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';
import EventConstants from '../constants/EventConstants';

// Define the Source store as an empty array
const _sources = {
  list: [],
  filterlist: []
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
const SourceStore = ObjectAssign( {}, EventEmitter.prototype, {
  getDefaultProps(props=undefined){
      if (props === undefined){
          return {defaultId: 'cnn', sortBy: 'top', sortBys: ['top']}
      }
     return props;
  },

  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
    //this.on(EventConstants.FILTER_CHANGE_EVENT, cb);
  },

  addClickListener(cb){
    this.on(EventConstants.CLICK_EVENT, cb);
  },

  removeClickListener(cb){
      this.removeListener(EventConstants.CLICK_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
    //this.removeListener(EventConstants.FILTER_CHANGE_EVENT, cb);
  },

  //method to return all Sources
  getAll(){
    return _sources.list;
  },
});


// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(payload => {
    const action = payload.action;
    switch (action.actionType){
        case NewsConstants.GET_NEWS_SOURCES:
            
            if (_sources.list.length > 0) _sources.list = [];
            _sources.list.push(action.response.sources);
            SourceStore.emit(EventConstants.CHANGE_EVENT);
            break;

        // case NewsConstants.SOURCE_FILTER:
        //   console.log('Source Filter inside store');
        //   const query = payload.action.response;
        //   _sources.filterlist = _sources.list.filter((source) => {
        //     console.log(source);
        //     if (source.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        //       console.log("this is the filtered list",_sources.filterlist);
        //       return source;
        //     }
        //   });
        //     SourceStore.emit(EventConstants.FILTER_CHANGE_EVENT);
        //     break;
            
        default:
            return true;
    }
});

export default SourceStore;