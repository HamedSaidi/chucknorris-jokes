import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../../css/List.css'
import {app} from '../../actions'
import LoadMoreJokes from '../lib/LoadMoreJokes'
import JokesList from '../lib/JokesList'
import FiltersList from '../lib/FiltersList'

class ListPage extends React.Component {
  constructor(props) {
    super(props)

    this.props.loadData()
    this.props.loadCategories()
  }

  render() {
    return (
      <div>
        <FiltersList />
        <JokesList />
        <LoadMoreJokes />
      </div>
    )
  }
}

ListPage.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  ...state.app,
})

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(app.loadData()),
  loadCategories: () => dispatch(app.loadCategories()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
