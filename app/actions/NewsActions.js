import AppDispatcher from '..//dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants.js';


export default {
  //Action to get News Sources
  getNewsSources(response) {
    AppDispatcher.handleViewAction({
      actionType: NewsConstants.GET_NEWS_SOURCES,
      response
    });
  },

  //Action to get News Articles
  getNewsArticles(response){
      AppDispatcher.handleViewAction({
         actionType: NewsConstants.GET_NEWS_ARTICLE,
          response
      });
  }
};