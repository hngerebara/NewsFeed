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


export function getNewsArticle(source, sortBy) {
    request.get(`https://newsapi.org/v1/articles?apiKey=${apikey.apikey}`)
        .query({source: source, sortBy: sortBy})
        .end((err, response) => {
            console.log(response,"gghfghgfg");
            if (err) console.error(err);
            if(response) NewsActions.getNewsArticles(response.body);
        });
         
}

