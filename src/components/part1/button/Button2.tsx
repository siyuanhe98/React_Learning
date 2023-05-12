import styles from './Button2.module.css'

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
const Button2 = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button
      className={[styles.button, styles['button-' + color]].join(' ')}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button2
