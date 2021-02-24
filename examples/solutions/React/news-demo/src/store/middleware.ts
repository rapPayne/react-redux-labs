import { actions, actionTypes } from './actions'
import { Article } from '../types/Article';
import { ArticlesResponse } from '../types/ArticlesResponse';
import { Middleware, MiddlewareAPI, AnyAction } from 'redux';

export const loggingMiddleware: Middleware = (api: MiddlewareAPI) => next => (action: AnyAction) => {
  console.log("Dispatching", action, api.getState());
  next(action);
}
export const fetchNewsMiddleware: Middleware = (api: MiddlewareAPI) => next => action => {
  if (action.type === actionTypes.FETCH_NEWS) { 
    //const apiKey: string = "Your newsapi.org key here";
    const apiKey = "7a78cc5c25f1499fb2092e462d7694a8";
    const url: string = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${action.countryCode}`;
    fetch(url)
    .then(res => res.json())
    .then((res :ArticlesResponse) => {
      if (res.status !== "ok") throw res;
      return res;
    })
    .then(res => res.articles)
    .then(articles => articles.forEach((article: Article) => api.dispatch(actions.addArticle(article))))
    .catch(err => console.error("Error fetching articles", err))
  }
  next(action);
}