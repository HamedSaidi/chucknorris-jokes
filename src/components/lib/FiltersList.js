import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../../css/List.css'
import Button from './Button'
import ViewMoreButton from './ViewMoreButton'
import {app} from '../../actions'


const List = React.memo(({categoriesToDisplay = [], toggleViewMoreCategories, category = 'uncategorized', selectCategory}) => (
  <div className="filters">
    {
      categoriesToDisplay.map(cat => (<Button
        onClick={() => selectCategory(cat)}
        categoryClass={cat}
        label={cat}
        key={cat} />))
    }
    <ViewMoreButton onClick={toggleViewMoreCategories} more={categoriesToDisplay.length === 7} key="view-more" />
  </div>
))

const mapStateToProps = state => ({
  ...state.app,
})

const mapDispatchToProps = (dispatch) => ({
  toggleViewMoreCategories: () => dispatch(app.toggleViewMoreCategories()),
  selectCategory: (category) => dispatch(app.selectCategory(category)),
})

List.propTypes = {
  categoriesToDisplay: PropTypes.array,
  toggleViewMoreCategories: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  category: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
