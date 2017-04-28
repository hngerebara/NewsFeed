import ObjectAssign from 'object-assign';
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';
import EventConstants from '../constants/EventConstants';

// Define the Source store as an empty array
const sort = {
  articles: [],
  source: [],
  sortBy: ''
};

const SortStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(EventConstants.CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(EventConstants.CHANGE_EVENT, cb);
  },

  //method to return all Sources
  getAll(){
    console.log('this is getAll ',sort.articles)
       return sort.articles;
  },
//   getSort(){
//     console.log('this is getAll ',_sources.sortedList)
//        return _sources.sortedList;
//   }
});


AppDispatcher.register(payload => {
    const action = payload.action;
    switch (action.actionType){
         case NewsConstants.ARTICLES_SORT:
            if (sort.articles.length > 0)sort.articles = [];
            sort.articles = [...payload.response.articles, ...sort.articles];
            sort.source = payload.response.source;
            sort.sortBy = payload.response.sortBy;
            //sort.articles.push(action.response.sources);
            SourceStore.emit(EventConstants.CHANGE_EVENT);
            break;

        default:
            return true;
    }
});

export default SortStore;