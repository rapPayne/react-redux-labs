import { actions, actionTypes } from './actions'
export const loggingMiddleware = ({getState, dispatch}) => next => action => {
  console.log("Dispatching", action, getState());
  next(action);
}
export const fetchNewsMiddleware = ({getState, dispatch}) => next => action => {
  if (action.type === actionTypes.FETCH_NEWS) { 
    const apiKey = "Your newsapi.org key here";
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${action.countryCode}`;
    fetch(url)
    .then(res => res.json())
    .then(res => res.articles)
    .then(articles => articles.forEach(article => dispatch(actions.addArticle(article))))
  }
  next(action);
}