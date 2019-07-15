import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import PropTypes from 'prop-types'


import ListItem from './ListItem'
import LoadingIndicator from './LoadingIndicator'

import {app} from '../../actions'


const JokesList = React.memo(({categoriesToDisplay = [], dataByCategory = {uncategorized: []}, per = 7, category = 'uncategorized', showMoreJokes, selectCategory}) => (
  get(dataByCategory, `[${category}]`, []).length ? (<div>
      <div className={`category btn-${category}`}>{category} Jokes</div>
      <div className="List">
      {
        dataByCategory[category].slice(0, per).map((joke) => (<ListItem {...joke} key={joke.id} />))
      }
      </div>
    </div>)
  : (<LoadingIndicator />)
))

const mapStateToProps = state => ({
  ...state.app,
})

JokesList.propTypes = {
  categoriesToDisplay: PropTypes.array,
  dataByCategory: PropTypes.object,
  per: PropTypes.number,
  category: PropTypes.string,
  showMoreJokes: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch(app.selectCategory(category)),
  showMoreJokes: (category) => dispatch(app.showMoreJokes(category)),
})


export default connect(mapStateToProps, mapDispatchToProps)(JokesList)
