import NewsActions from '../actions/NewsActions.js';
import request from 'superagent';
import apikey  from './config.js';

//Makes a call to the News API to fetch both sources and articles
export function getNewsSources(){
    request.get('https://newsapi.org/v1/sources')
      .set({Accept : 'application/json', lang: 'en'})
      .end((err, response) => {
        if (err) console.error(err);
        if(response) NewsActions.getNewsSources(response.body);
      });
}


export function getNewsArticle(source) {
    request.get('https://newsapi.org/v1/articles?q={source}')
        .query({source: source})
        .set({'X-Api-Key': apikey.apikey, Accept : 'application/json'})
        .end((err, response) => {
            if (err) console.error(err);
            if(response) NewsActions.getNewsArticles(response.body);
        });
}
export function getSort(source, sortBy) {
    console.log("hhhjdhjhdssh",sortBy)
    request.get('https://newsapi.org/v1/articles?')
        .query({source: source, sortBy: sortBy})
        .set({'X-Api-Key': apikey.apikey, Accept : 'application/json'})
        .end((err, response) => {
            if (err) console.error(err);
            if(response) NewsActions.getNewsArticles(response.body);
        });
}
