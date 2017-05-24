/* eslint-disable no-undef */
import request from 'superagent';
import AppDispatcher from '../dispatcher/AppDispatcher';
import NewsConstants from '../constants/NewsConstants';

/**
 * Action defined to get sources
 * @returns {object}
 */
const NewsActions = {

   /**
   * @description Action defined to get Sources
   * @returns {Array} retuns an array of objects
   */
  getNewsSources: () => {
    request
      .get('https://newsapi.org/v1/sources')
      .set({
        Accept: 'application/json',
        lang: 'en'
      })
      .end((err, response) => {
        if (response) {
          AppDispatcher.dispatch({
            actionType: NewsConstants.GET_NEWS_SOURCES,
            response: response.body.sources
          });
        }
      });
  },

  /**
   *
   * @description Action defined to get articles
   * @param {string} source
   * @param {string} sortBy
   * @returns {Array} retuns an array of objects
   */
  getNewsArticles(source, sortBy) {
    request
      .get(`https://newsapi.org/v1/articles?apiKey=${NEWSAPI_KEY}`)
      .query({
        source,
        sortBy
      })
      .end((err, response) => {
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
