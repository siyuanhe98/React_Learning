import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import styles from './Likes.module.css'

interface Props {
  onClick: () => void
}

const Likes = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false)
  const toggle = () => {
    setIsLiked(!isLiked)
    onClick()
  }
  if (isLiked) {
    return (
      <div>
        <div className={styles.icon}>
          <AiFillHeart onClick={toggle} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className={styles.icon}>
          <AiOutlineHeart onClick={toggle} />
        </div>
      </div>
    )
  }
}

export default Likes
