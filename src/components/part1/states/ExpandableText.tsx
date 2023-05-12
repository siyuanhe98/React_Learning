import { useState } from 'react'

interface ExpandableTextProps {
  children: string
  maxChar?: number
}
const ExpandableText = ({ children, maxChar = 10 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  if (children.length < 10) return <p>{children}</p>
  return (
    <div>
      <p>
        {isExpanded ? children : children.substring(0, maxChar) + '...'}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Less' : 'More'}
        </button>
      </p>
    </div>
  )
}

export default ExpandableText
