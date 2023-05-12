interface Props {
  children: string
  // optional props
  color?: // only accept one of the specified values
  | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  onClick: () => void
}
// set the defalut value for props
const Button1 = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button1
