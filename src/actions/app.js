import axios from 'axios'
import constants from './constants'

export const selecetCategory = (category) => (dispatch) => {
  dispatch({ type: constants.INCREMENT_COUNTER, category })
}

export const viewMoreCategories = () => (dispatch, getState) => {
  dispatch({ type: constants.VIEW_MORE_CATEGORIES })
}

export const getRandomProduct = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/random`)
  dispatch({ type: constants.LOAD_RANDOM_PRODUCT, data })
}

export const viewLessCategories = () => (dispatch, getState) => {
  dispatch({ type: constants.VIEW_LESS_CATEGORIES })
}

export const selectCategory = (category) => (dispatch, getState) => {
  dispatch({ type: constants.SELECT_CATEGORY, category })
}

export const showMoreJokes = () => (dispatch, getState) => {
  dispatch({ type: constants.SHOW_MORE_JOKES })
}

export const toggleViewMoreCategories = (bool) => (dispatch, getState) => {
  const { app: { categoriesToDisplay,  categories }} = getState()
  const type = categoriesToDisplay.length ===  categories.length ? constants.VIEW_LESS_CATEGORIES : constants.VIEW_MORE_CATEGORIES
  dispatch({ type })
}

export const loadData = () => async (dispatch, getState) => {
  const { data: {result} } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/search?query=all`)
  dispatch({ type: constants.LOAD_JOKES, data: result })
}

export const loadCategories = () => async (dispatch, getState) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/categories`)
  dispatch({ type: constants.LOAD_CATEGORIES, data })
}
