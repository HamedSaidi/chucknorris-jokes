import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import LoadingIndicator from './LoadingIndicator'

import '../../css/DetailsItem.css'
import {app} from '../../actions'


class DetailsList extends PureComponent {
  constructor(props) {
    super(props)

    if(!get(this.props, 'product.id'))
      this.props.getRandomProduct()
  }

  renderLikesCounter(likes) {
    const label = ['new in town', 'trending', 'hall of fame']
    if (likes < 0)
      return 'chestnut'

    if (likes < 50)
      return 'new in town'

    if (likes < 100)
      return 'trending'

    return 'hall of fame'
  }

  render() {
    if (get(this.props, 'product.id', false)) {
      const likes = Math.random() * 200 - 50
      const label = this.renderLikesCounter(likes)
      return (
        <div className="ListItem DetailsItem">
          <div className="joke-title">
            <div className="joke-title-icon"/>
            <div>{ this.props.product.categories[0] || 'uncategorized'}</div>
            <div className={`likes ${label}`}>{label}</div>
          </div>
          <div className="joke-body">{this.props.product.value}</div>
          <div className="see-details"><Link to={`/`}>go back to List view <div className="see-details-icon"/></Link></div>
        </div>      )
    }

    return (<LoadingIndicator />);
  }
}

const mapStateToProps = state => ({
  ...state.app,
})

DetailsList.propTypes = {
  product: PropTypes.object,
}

const mapDispatchToProps = (dispatch) => ({
  getRandomProduct: () => dispatch(app.getRandomProduct()),
})


export default connect(mapStateToProps, mapDispatchToProps)(DetailsList)
