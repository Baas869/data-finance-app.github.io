
function Button({children, type, version, styles }) {

  return (
    <button type={type}  className={` w-[200px] btn-${version} font-bold my-6 mx-auto py-3 rounded-md ${styles}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'btn',
    version: 'primary',
}



export default Button