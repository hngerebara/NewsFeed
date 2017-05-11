import AppDispatcher from "../dispatcher/AppDispatcher";
import NewsConstants from "../constants/NewsConstants";
import request from "superagent";
import apikey from "../utils/config";

/**
 * Actions defined
 */
const NewsActions = {
  //Action to get News Articles
  getNewsSources: () => {
    request
      .get("https://newsapi.org/v1/sources")
      .set({ Accept: "application/json", lang: "en" })
      .end((err, response) => {
        if (err) console.error(err);
        if (response) {
          AppDispatcher.dispatch({
            actionType: NewsConstants.GET_NEWS_SOURCES,
            response: response.body.sources
          });
        }
      });
  },

  //Action to get News Articles
  getNewsArticles(source, sortBy) {
    request
      .get(`https://newsapi.org/v1/articles?apiKey=${apikey.apikey}`)
      .query({ source: source, sortBy: sortBy })
      .end((err, response) => {
        if (err) console.error(err);
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
