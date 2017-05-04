import NewsConstants from '../constants/NewsConstants';
import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';
import EventConstants from '../constants/EventConstants.js';
import AppDispatcher from "../dispatcher/AppDispatcher.js";

// Define the Articles store as an empty array
const _articles = {
  list: [], source: '', sortBy: ''
};


const NewsStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
  },

  addClickListener(cb){
      this.on(EventConstants.CLICK_EVENT, cb);
  },

  removeClickListener(cb){
        this.removeListener(EventConstants.CLICK_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
  },

  getAll(){
    return _articles.list;
    
  }
});


AppDispatcher.register(payload => {
    const action = payload.action;
      
    switch (action.actionType){
        case NewsConstants.GET_NEWS_ARTICLE:
            if (_articles.list.length > 0) _articles.list = [];
            _articles.list.push(action.response.articles);
            _articles.source = action.response.source;
            _articles.sortBy = action.response.sortBy;
            NewsStore.emit(EventConstants.CHANGE_EVENT);
            break;
        default:
            return true;
    }

});


export default NewsStore;