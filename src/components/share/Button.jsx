import PropTypes from 'prop-types'
import { version } from 'react'

function Button({children, type, version, styles, isDisabled, }) {

  return (
    <button type={type} disabled={isDisabled} className={` w-[200px] btn-${version} font-bold my-6 mx-auto py-3 rounded-md ${styles}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'btn',
    disabled: false,
    version: 'primary',
}



export default Button