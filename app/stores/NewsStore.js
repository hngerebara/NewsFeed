import ObjectAssign from 'object-assign';
import { EventEmitter } from 'events';
import NewsConstants from '../constants/NewsConstants';
import EventConstants from '../constants/EventConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

// Define the Articles store as an empty array
const articles = {
  list: [],
  source: '',
  sortBy: ''
};

// Define the Store with emitter to listen for change
const NewsStore = ObjectAssign({}, EventEmitter.prototype, {
  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
  },

  getAll() {
    return articles.list;
  }
});

// Store registers with dispatcher to handle actions.
AppDispatcher.register((payload) => {
  switch (payload.actionType) {
    case NewsConstants.GET_NEWS_ARTICLE:
      if (articles.list.length > 0) articles.list = [];
      articles.list.push(payload.response.articles);
      articles.source = payload.response.source;
      articles.sortBy = payload.response.sortBy;
      NewsStore.emit(EventConstants.CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default NewsStore;
