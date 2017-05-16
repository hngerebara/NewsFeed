import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';
import request from 'superagent';
import apikey from '../utils/config';

/**
 * Action defined to get sources
 * @returns {object}
 */
const NewsActions = {
  // Action to get News Articles
  getNewsSources: () => {
    request
      .get('https://newsapi.org/v1/sources')
      .set({
        Accept: 'application/json',
        lang: 'en'
      })
      .end((err, response) => {
        if (err) alert(err);
        if (response) {
          AppDispatcher.dispatch({
            actionType: NewsConstants.GET_NEWS_SOURCES,
            response: response.body.sources
          });
        }
      });
  },

  /**
   * Action defined to get articles
   * @param {string} source, sortBy
   * @returns {object}
   */
  getNewsArticles(source, sortBy) {
    request
      .get(`https://newsapi.org/v1/articles?apiKey=${apikey.apikey}`)
      .query({
        source,
        sortBy
      })
      .end((err, response) => {
        if (err) alert(err);
        if (response) {
          AppDispatcher.dispatch({
            actionType: NewsConstants.GET_NEWS_ARTICLE,
            response: response.body
          });
        }
      });
  }
};

export default NewsActions;
