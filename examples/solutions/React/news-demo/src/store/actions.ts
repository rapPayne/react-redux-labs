import { Article } from '../types/Article';

// This is the only place it is set and it is simple, so adding
// a type adds nothing but friction here.
export const actionTypes = {
  FETCH_NEWS: "FETCH_NEWS",
  ADD_ARTICLE: "ADD_ARTICLE",
}

const fetchNews = (countryCode: string ='us') => ({type:actionTypes.FETCH_NEWS, countryCode});
const addArticle = (article :Article) => ({type:actionTypes.ADD_ARTICLE, article})
export const actions = {
  fetchNews,
  addArticle,
}