import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../css/ListItem.css'

const ListItem = React.memo(({categories = [], value, id}) => (
  <div className="ListItem">
    <div className="joke-title"><div className="joke-title-icon"/>{categories[0] || 'uncategorized'} Joke</div>
    <div className="joke-body">{value}</div>
    <div className="see-details"><Link to={`/joke/${id}`}>see details <div className="see-details-icon"/></Link></div>
  </div>
))

ListItem.propTypes = {
  categories: PropTypes.array,
  value: PropTypes.string,
  id: PropTypes.string
}

export default ListItem
