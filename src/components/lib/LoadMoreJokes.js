import React from 'react'
import '../../css/Button.css'
import { connect } from 'react-redux'
import {app} from '../../actions'

import ViewMoreButton from './ViewMoreButton'
import { get } from 'lodash'

const Button = React.memo(({dataByCategory, category, showMoreJokes, per, additionalCssClasses}) => (
    get(dataByCategory, `[${category}].length`, 0) >= per
      ? (<ViewMoreButton onClick={showMoreJokes} more additionalCssClasses="view-more-jokes" />)
      : null
))


const mapStateToProps = state => ({
  ...state.app,
})

const mapDispatchToProps = (dispatch) => ({
  showMoreJokes: (category) => dispatch(app.showMoreJokes(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
