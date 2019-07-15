import React from 'react'
import PropTypes from 'prop-types'
import '../../css/Button.css'

const Button = React.memo(({more, onClick, additionalCssClasses}) => (
  <div className={`btn-container btn-view-more-container ${additionalCssClasses}`}>
    <button className={` btn-view-more `} onClick={onClick}>
      <div className="view-more-label">{`view ${more ? 'more' : 'less'}`}</div>
      <div className={`view-more-icon view-more-icon-${more ? 'less' : ''}`}/>
    </button>
  </div>
))

Button.propTypes = {
  more: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  additionalCssClasses:PropTypes.string
}

export default Button
