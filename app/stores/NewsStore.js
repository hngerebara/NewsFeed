import ObjectAssign from 'object-assign';
import { EventEmitter } from 'events';
import NewsConstants from '../constants/NewsConstants';
import EventConstants from '../constants/EventConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const articles = {
  list: [],
};

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

AppDispatcher.register((payload) => {
  switch (payload.actionType) {
    case NewsConstants.GET_NEWS_ARTICLE:
      if (articles.list.length > 0) articles.list = [];
      articles.list.push(payload.response.articles);
      NewsStore.emit(EventConstants.CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default NewsStore;
