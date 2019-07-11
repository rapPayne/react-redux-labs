import { actions, actionTypes } from './actions'
export const fetchNewsMiddleware = ({getState, dispatch}) => next => action => {
  if (action.type === actionTypes.FETCH_NEWS) { 
    const apiKey = "Your key goes here";
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=mx`;
    fetch(url)
    .then(res => res.json())
    .then(res => res.articles)
    .then(articles => articles.forEach(article => dispatch(actions.addArticle(article))))
  }
  next(action);
}