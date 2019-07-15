import React from 'react'
import PropTypes from 'prop-types'
import '../../css/Button.css'

const Button = React.memo(({label, onClick, categoryClass}) => (
  <button className={`btn-container btn-${categoryClass}`} onClick={onClick}>
    { label }
  </button>
))

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  categoryClass: PropTypes.string,
}

export default Button
