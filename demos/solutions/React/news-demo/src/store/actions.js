
export const actionTypes = {
  FETCH_NEWS: "FETCH_NEWS",
  ADD_ARTICLE: "ADD_ARTICLE",
}

const fetchNews = () => ({type:actionTypes.FETCH_NEWS});
const addArticle = article => ({type:actionTypes.ADD_ARTICLE, article})
export const actions = {
  fetchNews: fetchNews,
  addArticle,
}