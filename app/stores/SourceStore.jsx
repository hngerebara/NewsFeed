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

const SourceStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
    this.on(EventConstants.FILTER_CHANGE_EVENT, cb);
  },

  addClickListener(cb){
    this.on(EventConstants.CLICK_EVENT, cb);
  },

  removeClickListener(cb){
      this.removeListener(EventConstants.CLICK_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
    this.removeListener(EventConstants.FILTER_CHANGE_EVENT, cb);
  },


  getAll(){
    return _sources.list;
  },
});

// Store registers with dispatcher to handle actions.
AppDispatcher.register(payload => {

    switch (payload.actionType){
        case NewsConstants.GET_NEWS_SOURCES:
            if (_sources.list.length > 0) _sources.list = [];
            _sources.list.push(payload.response);
            SourceStore.emit(EventConstants.CHANGE_EVENT);
            break;

        default:
            return true;
    }
});


export default SourceStore;