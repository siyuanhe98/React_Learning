import { ReactNode } from 'react'

interface Props {
  // represent any possible value that can be rendered in a React component.
  // It includes simple elements like strings and numbers, as well as more complex elements like React components and fragments.
  // The children prop represents the content placed between the opening and closing tags of a component when it is used.
  children: ReactNode
  onClose: () => void
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}></button>
    </div>
  )
}

export default Alert
