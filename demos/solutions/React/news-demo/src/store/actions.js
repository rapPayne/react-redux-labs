
export const actionTypes = {
  FETCH_NEWS: "FETCH_NEWS",
  ADD_ARTICLE: "ADD_ARTICLE",
}

const fetchNews = (countryCode='us') => ({type:actionTypes.FETCH_NEWS, countryCode});
const addArticle = article => ({type:actionTypes.ADD_ARTICLE, article})
export const actions = {
  fetchNews,
  addArticle,
}