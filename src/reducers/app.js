import { groupBy } from 'lodash'
import constants from '../actions/constants'

const initialState = {
  data: [],
  dataByCategory: {},
  per: 7,
  productId: '',
  product: {},
  categoriesToDisplay: [],
  categories: [],
  category: 'dev',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LOAD_JOKES:
      return {
        ...state,
        data: action.data,
        dataByCategory: groupBy(action.data, ({categories: [category = 'uncategorized']}) => category),
        per: 6,
      }

    case constants.INIT_DETAILS_PAGE:
      return {
        ...state,
        productId: action.id
      }

    case constants.LOAD_RANDOM_PRODUCT:
      return {
        ...state,
        product: action.data
      }

      case constants.SHOW_MORE_JOKES:
        return {
          ...state,
          per: state.per + 6,
        }

    case constants.LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.data,
        categoriesToDisplay: action.data.slice(0, 7),
        // category: action.data[0], we'll use dev as default category since it has a few items
        category: 'dev',
      }

    case constants.VIEW_MORE_CATEGORIES:
      return {
        ...state,
        categoriesToDisplay: state.categories,
      }

    case constants.VIEW_LESS_CATEGORIES:
      return {
        ...state,
        categoriesToDisplay: state.categories.slice(0, 7),
      }

    case constants.SELECT_CATEGORY:
      return {
        ...state,
        category: action.category,
      }

    default:
      return state
  }
}
